'use client';

import dynamic from 'next/dynamic';

const PomodoroTimer = dynamic(() => import('./PomodoroTimer'), {
  ssr: false,
});

export default PomodoroTimer;
