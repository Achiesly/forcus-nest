"use client";
import React, { useState } from 'react';
import { Check, Clock, Trash2, Edit3, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  pomodoros: number;
  estimatedPomodoros: number;
}

interface TaskItemProps {
  task: Task;
  onUpdate: (id: string, updates: Partial<Task>) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onUpdate, onDelete }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleToggleComplete = () => {
    onUpdate(task.id, { completed: !task.completed });
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      onUpdate(task.id, { text: editText.trim() });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  const incrementPomodoro = () => {
    onUpdate(task.id, { pomodoros: task.pomodoros + 1 });
  };

  return (
    <div className={`bg-white/10 rounded-lg p-4 transition-all duration-200 ${
      task.completed ? 'opacity-60' : ''
    }`}>
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggleComplete}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
            task.completed
              ? 'bg-green-500 border-green-500'
              : 'border-white/40 hover:border-white/60'
          }`}
        >
          {task.completed && <Check className="w-4 h-4 text-white" />}
        </button>

        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-2">
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-white/20 border-white/30 text-white"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSaveEdit();
                  if (e.key === 'Escape') handleCancelEdit();
                }}
                autoFocus
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleSaveEdit}
                  size="sm"
                  className="bg-white hover:bg-white/97 cursor-pointer text-black/95"
                >
                  Save
                </Button>
                <Button
                  onClick={handleCancelEdit}
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-red-500 hover:bg-white/97 hover:text-red-500 cursor-pointer"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className={`font-medium ${task.completed ? 'line-through' : ''}`}>
                {task.text}
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{task.pomodoros}/{task.estimatedPomodoros}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button
                    onClick={incrementPomodoro}
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-black/95 cursor-pointer hover:bg-white/20 px-2 py-1 h-8"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                  
                  <Button
                    onClick={() => setIsEditing(true)}
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-black/95 cursor-pointer hover:bg-white/20 px-2 py-1 h-8"
                  >
                    <Edit3 className="w-3 h-3" />
                  </Button>
                  
                  <Button
                    onClick={() => onDelete(task.id)}
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-black/95 hover:bg-white/20 cursor-pointer px-2 py-1 h-8"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;