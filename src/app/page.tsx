import React from 'react';
import PomodoroTimer from '@/components/MainSection/ClientOnlyPomodoro';
import TaskManager from '@/components/MainSection/TaskManager';
import FirstSection from '@/components/MainSection/FirstSection';
import FAQSection from '@/components/MainSection/faq';


export default function Home() {
  title: "Stay Focused. Work Smarter. Beat Distractions.";
  discription: "FocusNest is your all-in-one productivity tool, combining a Pomodoro timer, task manager, and content section to help you stay focused and organized. Customize your settings and boost your productivity today!";
  return (
<main className="flex flex-col min-h-screen bg-black/85 text-white">

      <PomodoroTimer />
      <TaskManager />
      <FirstSection />
      <FAQSection />
    </main>
  );
}
