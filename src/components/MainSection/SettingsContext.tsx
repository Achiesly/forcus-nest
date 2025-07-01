'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export interface SettingsType {
  useDefaults?: boolean;
  durations: { pomodoro: number; shortBreak: number; longBreak: number };
  sound: boolean;
  soundVolume: number; // 👈 New
  notification: boolean;
  alarm: string; // e.g. "beep", "ding"
  theme: 'light' | 'dark' | 'system';
}

const defaultDurations = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

const defaultSettings: SettingsType = {
  durations: defaultDurations,
  sound: true,
  soundVolume: 1.0, // 👈 New default volume
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
          const parsed = JSON.parse(saved);

          // ✅ Merge saved settings with defaults safely
          return {
            ...defaultSettings,
            ...parsed,
            durations: {
              ...defaultDurations,
              ...(parsed.durations || {}),
            },
          };
        } catch (err) {
          console.error('Failed to parse settings from localStorage:', err);
        }
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('focusnest-settings', JSON.stringify(settings));
    }
  }, [settings]);

  const updateSettings = (updates: Partial<SettingsType>) => {
    setSettings((prev) => ({
      ...prev,
      ...updates,
      durations: {
        ...prev.durations,
        ...(updates.durations || {}),
      },
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
