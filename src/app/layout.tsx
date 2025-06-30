//import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Footer from '@/components/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SettingsProvider } from '@/components/MainSection/SettingsContext';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

        <head>
        {/* Favicon and Manifest Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      
      <body className={inter.className}>
          {/* Navbar component */}
          
          {/* Main content goes here */}
        <SettingsProvider>
          {/* Main section with children components */}
          {children}
          {/* Analytics and Speed Insights components */}
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





