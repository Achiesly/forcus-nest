// src/globals.d.ts

export {}; // This ensures it's treated as a module

declare global {
  interface Window {
    currentAlarmAudio?: HTMLAudioElement;
  }
}
