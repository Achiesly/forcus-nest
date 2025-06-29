"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TaskItem from './TaskItem';






interface Task {
  id: string;
  text: string;
  completed: boolean;
  pomodoros: number;
  estimatedPomodoros: number;
}

interface TaskManagerProps {
  tier: string;
}

const TaskManager: React.FC<TaskManagerProps> = ({ }) => {
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

  return (
<div className="bg-blue-700 rounded-2xl p-4 sm:p-6 text-white container mx-auto max-w-[95%] sm:max-w-3xl shadow-lg">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
    <h2 className="text-lg sm:text-xl font-semibold">Tasks</h2>
    <div className="text-sm text-left sm:text-right">
      <div>{completedTasks}/{tasks.length} completed</div>
      <div className="flex items-center gap-1 mt-1">
        <Clock className="w-4 h-4" />
        <span>{totalPomodoros} pomodoros</span>
      </div>
    </div>
  </div>

  {/* Task List */}
  <div className="space-y-3 mb-6">
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onUpdate={updateTask}
        onDelete={deleteTask}
      />
    ))}

    {tasks.length === 0 && !isAdding && (
      <div className="text-center py-8 text-white/70">
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
        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 w-full"
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
        autoFocus
      />
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          onClick={addTask}
          className="bg-white text-black/90 hover:bg-white/90 flex-1 cursor-pointer"
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
          className="border-white/30 text-red-500 hover:bg-white/90 hover:text-red-500 cursor-pointer"
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

  );
};

export default TaskManager;