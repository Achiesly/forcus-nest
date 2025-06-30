// app/page.tsx

import React from 'react';
import PomodoroTimer from '@/components/MainSection/ClientOnlyPomodoro';
import TaskManager from '@/components/MainSection/TaskManager';
import FirstSection from '@/components/MainSection/FirstSection';
import FAQSection from '@/components/MainSection/faq';
import Navbar from '@/components/navbar';
import Header from '@/components/MainSection/Header';

export const metadata = {
  title: 'FocusNest-Free Pomodoro Timer for Deep Work & Study',
  description:
    'Improve your focus with FocusNest, a minimalist Pomodoro timer designed for deep work, studying, and productivity. Stay on track with customizable sessions, breaks, and a sleek interface.',
  openGraph: {
    title: 'FocusNest',
    description:
      'FocusNest helps you stay productive using the science-backed Pomodoro technique. Boost your focus, avoid burnout, and get more done, one session at a time.',
    url: 'https://www.focusnest.online',
    type: 'website',
    images: [
      {
        url: 'https://www.focusnest.online/og-image.png', // optional, replace with your OG image
        width: 1200,
        height: 630,
        alt: 'FocusNest-Pomodoro Timer',
      },
    ],
  },
    twitter: {
    card: 'summary_large_image',
    title: 'FocusNest-Free Pomodoro Timer',
    description: 'Boost your focus and productivity using the Pomodoro technique. No login required!',
    creator: '@yourhandle', // Optional: Add your Twitter handle
    images: ['https://www.focusnest.online/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.focusnest.online',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "FocusNest",
            url: "https://www.focusnest.online",
            description:
              "A modern Pomodoro and productivity timer web app",
            applicationCategory: "ProductivityApplication",
          }),
        }}
      />

      <Navbar />
      <Header />
      <PomodoroTimer />
      <TaskManager />
      <FirstSection />
      <FAQSection />
    </main>
  );
}
