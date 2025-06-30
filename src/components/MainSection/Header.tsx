'use client';

import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { useSettings } from '@/components/MainSection/SettingsContext';

export default function Header() {
  const [open, setOpen] = useState(false);

useEffect(() => {
  const handleOpen = () => setOpen(true);
  document.addEventListener('open-settings', handleOpen);
  return () => document.removeEventListener('open-settings', handleOpen);
}, []);

  const { settings, updateSettings } = useSettings();

  return (
    <>
{/* Header */}
<header className="flex items-center justify-end mt-4 px-4 sm:px-8 md:px-12 py-2">
  <button
    onClick={() => setOpen(true)}
    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 rounded-full p-3 cursor-pointer"
  >
    <Settings className="w-6 h-6 text-black/95" />
  </button>
</header>

{/* Settings Modal */}
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md space-y-4 text-black shadow-lg">
      
      {/* Durations */}
      <div className="space-y-3">
        {['pomodoro', 'shortBreak', 'longBreak'].map((key) => (
          <div key={key} className="flex justify-between items-center">
            <label className="capitalize">
              {key === 'pomodoro'
                ? 'Pomodoro'
                : key === 'shortBreak'
                ? 'Short Break'
                : 'Long Break'}
            </label>
            <input
              type="number"
              min={1}
              value={settings.durations[key as keyof typeof settings.durations]}
              onChange={(e) =>
                updateSettings({
                  durations: {
                    ...settings.durations,
                    [key]: parseInt(e.target.value),
                  },
                })
              }
              className="border px-2 py-1 rounded w-20 text-right"
            />
          </div>
        ))}
      </div>

      {/* Alarm Selection */}
      <div className="flex flex-col gap-2">
        <label>Alarm Sound</label>
        <select
          value={settings.alarm}
          onChange={(e) => updateSettings({ alarm: e.target.value })}
          className="border px-2 py-1 rounded"
        >
          <option value="beep">Beep</option>
          <option value="bell">Bell</option>
          <option value="ding">Ding</option>
        </select>
      </div>

      {/* Toggle Options */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>Notifications</span>
          <input
            type="checkbox"
            checked={settings.notification}
            onChange={(e) => updateSettings({ notification: e.target.checked })}
          />
        </div>
        <div className="flex justify-between items-center">
          <span>Sound</span>
          <input
            type="checkbox"
            checked={settings.sound}
            onChange={(e) => updateSettings({ sound: e.target.checked })}
          />
        </div>
      </div>

      {/* Theme Selection */}
      <div className="flex flex-col">
        <label>Theme</label>
        <select
          value={settings.theme}
          onChange={(e) =>
            updateSettings({
              theme: e.target.value as 'system' | 'light' | 'dark',
            })
          }
          className="border px-2 py-1 rounded"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end pt-4 gap-3">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setOpen(false)}
        >
          Save
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
}

