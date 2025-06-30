import React from 'react';
import PomodoroTimer from '@/components/MainSection/ClientOnlyPomodoro';
import TaskManager from '@/components/MainSection/TaskManager';
import FirstSection from '@/components/MainSection/FirstSection';
import FAQSection from '@/components/MainSection/faq';
import Navbar from '@/components/navbar';
//import { headers } from 'next/headers';

export default async function Home() {
  //const headersList = await headers();
  //const tier = headersList.get('x-tier');

  return (
    <main className="flex flex-col min-h-screen text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navbar />
      
      <PomodoroTimer />
      <TaskManager />
      <FirstSection />
      <FAQSection />
    </main>
  );
}
