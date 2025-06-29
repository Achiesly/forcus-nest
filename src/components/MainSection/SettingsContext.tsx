'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export interface SettingsType {
  useDefaults?: boolean; // Optional to allow custom durations
  durations: { pomodoro: number; shortBreak: number; longBreak: number };
  sound: boolean;
  notification: boolean;
  alarm: string;
  theme: 'light' | 'dark' | 'system';
}

const defaultSettings: SettingsType = {
  durations: { pomodoro: 25, shortBreak: 5, longBreak: 15 },
  sound: true,
  notification: true,
  alarm: 'beep',
  theme: 'system',
};

const SettingsContext = createContext<{
  settings: SettingsType;
  updateSettings: (updates: Partial<SettingsType>) => void;
}>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<SettingsType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('focusnest-settings');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (err) {
          console.error('Failed to parse settings from localStorage:', err);
        }
      }
    }
    return defaultSettings;
  });

  // ✅ Save to localStorage whenever settings change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('focusnest-settings', JSON.stringify(settings));
    }
  }, [settings]);

  const updateSettings = (updates: Partial<SettingsType>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);