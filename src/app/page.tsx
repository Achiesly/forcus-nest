import React from 'react';
import PomodoroTimer from '@/components/MainSection/ClientOnlyPomodoro';
import TaskManager from '@/components/MainSection/TaskManager';
import FirstSection from '@/components/MainSection/FirstSection';
import FAQSection from '@/components/MainSection/faq';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const tier = headersList.get('x-tier') || 'free';

  return (
    <main className="flex flex-col min-h-screen bg-black/85 text-white">
      <div className="p-4 text-sm text-gray-400"> {tier}</div>
      <PomodoroTimer tier={tier} />
      <TaskManager tier={tier} />
      <FirstSection />
      <FAQSection />
    </main>
  );
}
