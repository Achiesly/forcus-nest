'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { setCookie } from 'cookies-next';


export type ThemeOption =
  | 'light'
  | 'dark'
  | 'system'
  | 'cupcake'
  | 'dracula'
  | 'nord'
  | 'sunset';

export interface SettingsType {
  useDefaults?: boolean;
  durations: { pomodoro: number; shortBreak: number; longBreak: number };
  sound: boolean;
  soundVolume: number;
  notification: boolean;
  alarm: string;
  theme: ThemeOption; // 👈 Use expanded ThemeOption type
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
  alarm: 'bell',
  theme: 'cupcake', // 👈 Default theme
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

    // ✅ Save theme to cookie (7-day expiry)
    if (updates.theme) {
      setCookie('theme', updates.theme, { maxAge: 60 * 60 * 24 * 7 }); // 7 days
    }
  };

useEffect(() => {
  const root = document.documentElement;

  if (settings.theme === 'system') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  } else {
    root.setAttribute('data-theme', settings.theme);
  }
}, [settings.theme]);



  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
