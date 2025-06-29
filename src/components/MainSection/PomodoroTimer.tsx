
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSettings } from '@/components/MainSection/SettingsContext';


interface PomodoroTimerProps {
  tier: string;
}


type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

const PomodoroTimer: React.FC<PomodoroTimerProps> = () => {
  const { settings } = useSettings();

  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
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


// Default durations
const defaultDurations = { pomodoro: 25, shortBreak: 5, longBreak: 15 };


const modes = React.useMemo(() => ({
  pomodoro: {
    duration: (settings.useDefaults ? defaultDurations.pomodoro : settings.durations.pomodoro) * 60,
    label: 'Pomodoro',
    color: 'from-red-400 to-red-600'
  },
  shortBreak: {
    duration: (settings.useDefaults ? defaultDurations.shortBreak : settings.durations.shortBreak) * 60,
    label: 'Short Break',
    color: 'from-green-400 to-green-600'
  },
  longBreak: {
    duration: (settings.useDefaults ? defaultDurations.longBreak : settings.durations.longBreak) * 60,
    label: 'Long Break',
    color: 'from-blue-400 to-blue-600'
  }
}), [settings, defaultDurations.pomodoro, defaultDurations.shortBreak, defaultDurations.longBreak]);



  // Function to play notification sound
  const playNotificationSound = () => {
    try {
      const audioContext = new (
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      )();
      
      // Create a bell-like sound using multiple frequencies
      const frequencies = [800, 1000, 1200]; // Bell-like frequencies
      const duration = 0.8; // Sound duration in seconds
      
      frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        oscillator.type = 'sine';
        
        // Create envelope for bell-like sound
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1 / frequencies.length, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime + index * 0.1);
        oscillator.stop(audioContext.currentTime + duration + index * 0.1);
      });
    } catch {
      console.log('Audio not supported or failed to play');
      // Fallback: try to use a simple beep
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhGAhGn+Pwtm0hGAhFouPwqm0hGAhFouPwqm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+Pwtm0hGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+PwqmwfGAhGn+Pw==');
        audio.play();
      } catch {
        console.log('No audio support available');
      }
    }
  };

    // 🔧 Request notification permission on first load
  useEffect(() => {
    if (typeof window !== 'undefined' && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

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
  }, [isRunning, timeLeft, mode, session, modes]);

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
<div className="flex flex-col items-center space-y-8 mb-11 mt-4 px-4 sm:px-6">
  {/* Mode Selector */}
  <div className="bg-white/20 backdrop-blur-sm rounded-full p-0 flex flex-wrap justify-center gap-2 sm:space-x-2">
    {Object.entries(modes).map(([key, config]) => (
      <button
        key={key}
        onClick={() => handleModeChange(key as TimerMode)}
        className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-200 cursor-pointer ${
          mode === key
            ? 'bg-white text-red-500 shadow-lg'
            : 'text-white hover:bg-white/20'
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
  <div className="flex flex-wrap items-center justify-center gap-4">
    <Button
      onClick={toggleTimer}
      size="lg"
      className="bg-white text-red-500 hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-200 transform cursor-pointer"
    >
      {isRunning ? (
        <>
          <Pause className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
          PAUSE
        </>
      ) : (
        <>
          <Play className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
          START
        </>
      )}
    </Button>

    <Button
      onClick={resetTimer}
      variant="outline"
      size="lg"
      className="border-white/30 text-black rounded-full px-6 py-3 sm:px-6 sm:py-4 cursor-pointer"
    >
      <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
    </Button>
  </div>
</div>

  );
};

export default PomodoroTimer;
