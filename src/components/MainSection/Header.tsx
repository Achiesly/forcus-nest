'use client';

import React, { useState, useEffect } from 'react';
import { useSettings } from '@/components/MainSection/SettingsContext';


export default function Header() {
  const [open, setOpen] = useState(false);

  // Listen for custom event to open settings modal
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    document.addEventListener('open-settings', handleOpen);
    return () => document.removeEventListener('open-settings', handleOpen);
  }, []);

  const { settings, updateSettings } = useSettings();

  return (
    <>
      {/* Header */}
      <header className="hidden" />

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

            {/* Alarm Sound */}
            <div className="flex flex-col gap-2">
              <label>Alarm Sound</label>
              <select
                value={settings.alarm}
                onChange={(e) => {
                  const selected = e.target.value;
                  updateSettings({ alarm: selected });

                  // Stop previous sound if playing
                  if (window.currentAlarmAudio && typeof window.currentAlarmAudio.pause === 'function') {
                    window.currentAlarmAudio.pause();
                    window.currentAlarmAudio.currentTime = 0;
                  }

                  // Create and store new audio object
                  const audio = new Audio(`/sounds/${selected}.mp3`);
                  audio.volume = settings.soundVolume ?? 1.0;
                  window.currentAlarmAudio = audio; // Store globally to stop next time
                  audio.play().catch(() => {
                    console.warn('Failed to play alarm sound');
                  });
                }}
                className="border px-2 py-1 rounded"
              >
                <option value="beep">Beep</option>
                <option value="bell">Bell</option>
                <option value="ding">Ding</option>
                <option value="wood">Wood</option>
              </select>
            </div>

            <input
              type="range"
              id="volume"
              min={0}
              max={1}
              step={0.01}
              value={settings.soundVolume ?? 1.0}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                updateSettings({ soundVolume: newVolume });

                // Live update the currently playing audio
                if (window.currentAlarmAudio) {
                  window.currentAlarmAudio.volume = newVolume;
                }
              }}
              className="w-full cursor-pointer"
            />


            {/* Toggle Options */}
            <div className="space-y-2">
              <div className="flex justify-between items-center cursor-pointer">
                <span>Notifications</span>
                <input
                  type="checkbox"
                  checked={settings.notification}
                  onChange={(e) => updateSettings({ notification: e.target.checked })}
                />
              </div>
              <div className="flex justify-between items-center cursor-pointer">
                <span>Sound</span>
                <input
                  type="checkbox"
                  checked={settings.sound}
                  onChange={(e) => updateSettings({ sound: e.target.checked })}
                />
              </div>
            </div>

            {/* Theme Selection (disabled for now) */}
            {/* 
            <div className="flex flex-col">
              <label>Theme</label>
              <select
              value={settings.theme}
              onChange={(e) =>
                updateSettings({
                theme: e.target.value as ThemeOption,
                })
              }
              className="border px-2 py-1 rounded"
              disabled
              >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
              <option value="dracula">Dracula</option>
              <option value="nord">Nord</option>
              <option value="sunset">Sunset</option>
              <option value="cupcake">Cupcake</option>
              </select>
            </div>
            */}

            {/* Action Buttons */}
            <div className="flex justify-end pt-4 gap-3">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
                onClick={() => {
                  // Stop any currently playing alarm
                  if (window.currentAlarmAudio && !window.currentAlarmAudio.paused) {
                    window.currentAlarmAudio.pause();
                    window.currentAlarmAudio.currentTime = 0;
                  }
                  setOpen(false);
                }}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition cursor-pointer"
                onClick={() => {
                  // Stop any currently playing alarm
                  if (window.currentAlarmAudio && !window.currentAlarmAudio.paused) {
                    window.currentAlarmAudio.pause();
                    window.currentAlarmAudio.currentTime = 0;
                  }
                  setOpen(false);
                }}
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
