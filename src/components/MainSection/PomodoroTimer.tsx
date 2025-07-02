
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useSettings } from '@/components/MainSection/SettingsContext';
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { useMemo as reactUseMemo } from 'react';
import { useCallback } from 'react';
import { Plus, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import TaskItem from './TaskItem';
import AdBanner from '../AdBanner';
//import Settings from '../MainSection/Header';



interface Task {
  id: string;
  text: string;
  completed: boolean;
  pomodoros: number;
  estimatedPomodoros: number;
}




type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

// Default durations
const defaultDurations = { pomodoro: 25, shortBreak: 5, longBreak: 15 };

const PomodoroTimer: React.FC = () => {
  const { settings } = useSettings();
  const durations = settings.durations ?? defaultDurations;

 const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);


    const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        pomodoros: 0,
        estimatedPomodoros: 1
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setIsAdding(false);
    }
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalPomodoros = tasks.reduce((sum, task) => sum + task.pomodoros, 0);

  // Load from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);



  // Save to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);







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
  const soundVolume = settings?.soundVolume ?? 0.3;
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
<div className="flex flex-col items-center space-y-8 mb-10 px-4 sm:px-6 mt-4">
  <div className="bg-transparent backdrop-blur-sm rounded-full p-0 flex flex-wrap justify-center gap-2 sm:space-x-2">  {Object.entries(modes).map(([key, config]) => (
      <button
        key={key}
        onClick={() => handleModeChange(key as TimerMode)}
        className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium duration-200 cursor-pointer border border-white/50 ${
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


  {/* AdBanner */}
  <div className="w-full flex justify-center my-4">
    <AdBanner />
  </div>



      {/* TaskManager */}

    <div className="bg-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 text-white container mx-auto w-full max-w-screen-sm sm:max-w-2xl shadow-xl transition-all duration-300 mx-2 border border-white/10
">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-xl sm:text-xl font-bold">Tasks</h2>
        <div className="text-sm text-left sm:text-right">
          <div>{completedTasks}/{tasks.length} completed</div>
          <div className="flex items-center gap-1 mt-1">
            <Clock className="w-4 h-4" />
            <span>{totalPomodoros} pomodoros</span>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-3 mb-6 min-h-[180px]">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        ))}

        {tasks.length === 0 && !isAdding && (
          <div className="text-center py-8 text-white/80">
            <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No tasks yet. Add one to get started!</p>
          </div>
        )}
      </div>

      {/* Add Task Section */}
      {isAdding ? (
        <div className="space-y-3">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What are you working on?"
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 w-full focus:ring-1 focus:ring-white/10"
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            autoFocus
          />
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={addTask}
              className="bg-white text-black hover:bg-white/95 flex-1 cursor-pointer"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>

            <Button
              onClick={() => {
                setIsAdding(false);
                setNewTask('');
              }}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/90 hover:text-black cursor-pointer"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsAdding(true)}
          className="w-full bg-white/20 hover:bg-white/30 text-white border-2 border-dashed border-white/40 cursor-pointer"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Task
        </Button>
      )}
    </div>


</div>

  );
};
export default PomodoroTimer;

function useMemo<T>(factory: () => T, deps: React.DependencyList): T {
  return reactUseMemo(factory, deps);
}
