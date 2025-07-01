
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useSettings } from '@/components/MainSection/SettingsContext';
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { useMemo as reactUseMemo } from 'react';
import { useCallback } from 'react';
//import Settings from '../MainSection/Header';





type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

// Default durations
const defaultDurations = { pomodoro: 25, shortBreak: 5, longBreak: 15 };

const PomodoroTimer: React.FC = () => {
  const { settings } = useSettings();
  const durations = settings.durations ?? defaultDurations;



  const [mode, setMode] = useState<TimerMode>('pomodoro');
const initialDuration = (settings.useDefaults ? defaultDurations.pomodoro : durations.pomodoro) * 60;
const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [session, setSession] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (isRunning) {
      e.preventDefault();
      e.returnValue = ''; // Needed for browser confirmation
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, [isRunning]);


const modes = useMemo(() => ({
  pomodoro: {
    duration: (settings.useDefaults ? defaultDurations.pomodoro : durations.pomodoro) * 60,
    label: 'Pomodoro',
    color: 'from-red-400 to-red-600'
  },
  shortBreak: {
    duration: (settings.useDefaults ? defaultDurations.shortBreak : durations.shortBreak) * 60,
    label: 'Short Break',
    color: 'from-green-400 to-green-600'
  },
  longBreak: {
    duration: (settings.useDefaults ? defaultDurations.longBreak : durations.longBreak) * 60,
    label: 'Long Break',
    color: 'from-blue-400 to-blue-600'
  }
}), [settings.useDefaults, durations]);

// Function to play notification sound

const playNotificationSound = useCallback(() => {
  const soundEnabled = settings?.sound ?? true;
  const soundVolume = settings?.soundVolume ?? 1.0;
  const alarm = settings?.alarm ?? 'bell';

  if (!soundEnabled) return;

  const audio = new Audio(`/sounds/${alarm}.mp3`);
  audio.volume = soundVolume;

  audio.play().catch((err) => {
    console.warn('Failed to play audio from /sounds:', err);

    // Fallback: Use Web Audio API
    try {
      const audioCtx = new (
        window.AudioContext ||
        ((window as unknown) as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      )();
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = soundVolume;
      gainNode.connect(audioCtx.destination);

      const frequencies = [800, 1000];
      const now = audioCtx.currentTime;

      frequencies.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        osc.connect(gainNode);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.5);
      });
    } catch (fallbackErr) {
      console.error('Both audio fallback methods failed', fallbackErr);
    }
  });
}, [settings?.sound, settings?.soundVolume, settings?.alarm]);


// Request notification permission
useEffect(() => {
  if (typeof window !== 'undefined' && Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
}, []);

// 🔄 Reset everything on reload
useEffect(() => {
  setTimeLeft(initialDuration);
  setIsRunning(false);
  setMode('pomodoro');
  setSession(1);
}, [initialDuration]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            // Play notification sound when timer completes
            playNotificationSound();
            
            // Auto-switch modes
            if (mode === 'pomodoro') {
              const nextMode = session % 4 === 0 ? 'longBreak' : 'shortBreak';
              setMode(nextMode);
              setTimeLeft(modes[nextMode].duration);
              if (mode === 'pomodoro') setSession(prev => prev + 1);
            } else {
              setMode('pomodoro');
              setTimeLeft(modes.pomodoro.duration);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, mode, session, modes, playNotificationSound]);

  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(modes[newMode].duration);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(modes[mode].duration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((modes[mode].duration - timeLeft) / modes[mode].duration) * 100;

  return (
<div className="flex flex-col items-center space-y-8 mb-8 px-4 sm:px-6 -mt-6">
  <div className="bg-transparent backdrop-blur-sm rounded-full p-0 flex flex-wrap justify-center gap-2 sm:space-x-2">  {Object.entries(modes).map(([key, config]) => (
      <button
        key={key}
        onClick={() => handleModeChange(key as TimerMode)}
        className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-200 cursor-pointer border border-white/50 ${
          mode === key
            ? 'bg-white text-black/95 shadow-lg'
            : 'text-white hover:bg-white hover:text-black'
        }`}
      >
        {config.label}
      </button>
    ))}
  </div>

  {/* Timer Circle */}
  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="4"
        fill="transparent"
      />
      {/* Progress circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="white"
        strokeWidth="4"
        fill="transparent"
        strokeDasharray={`${2 * Math.PI * 45}`}
        strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
        className="transition-all duration-1000 ease-linear"
        strokeLinecap="round"
      />
    </svg>

    {/* Timer Display */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="text-4xl sm:text-6xl font-bold text-white mb-1 sm:mb-2">
        {formatTime(timeLeft)}
      </div>
      <div className="text-white/80 text-sm sm:text-lg">
        Session #{session}
      </div>
    </div>
  </div>

  {/* Controls */}
  <div className="flex flex-wrap items-center justify-center gap-3">
  <Button
    onClick={toggleTimer}
    size="lg"
    className="bg-white round-full text-black/95 hover:bg-white/95 px-10 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transition-all duration-200 transform cursor-pointer 2xl"
  >
    {isRunning ? 'PAUSE' : 'START'}
  </Button>
 
    <FaArrowRotateRight className="w-6 h-6 text-white cursor-pointer hover:text-white/95 transition-all duration-200" 
     onClick={resetTimer}/>

    <IoMdSettings
      className="w-8 h-8 text-white cursor-pointer hover:text-white/95 transition-all duration-200"
      onClick={() => document.dispatchEvent(new CustomEvent('open-settings'))}
    />

  </div>
</div>

  );
};
export default PomodoroTimer;

function useMemo<T>(factory: () => T, deps: React.DependencyList): T {
  return reactUseMemo(factory, deps);
}
