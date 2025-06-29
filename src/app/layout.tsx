import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Footer from '@/components/footer';
import { SettingsProvider } from '@/components/MainSection/SettingsContext';
import Navbar from '@/components/navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ForcusNest-Stay Focused. Work Smarter. Beat Distractions.",
  description: "FocusNest helps you stay productive using the science-backed Pomodoro technique. Boost your focus, avoid burnout, and get more done, one session at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SettingsProvider>
          {/* Navbar component */}
          <Navbar />
          {/* Main content goes here */}
          {children}
          <Analytics />
          <SpeedInsights />
          {/* Footer component */}
          {/* Footer is placed here to ensure it appears at the bottom of the page */}
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}





