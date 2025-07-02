//import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Footer from '@/components/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SettingsProvider } from '@/components/MainSection/SettingsContext';
import Script from 'next/script';


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


        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4341873905679498"
          crossOrigin="anonymous"
        />

        </head>
      
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <SettingsProvider>
          {/* Main content that expands to push footer down */}
          <div className="flex-grow">
            {children}
          </div>

          {/* Footer always sticks at the bottom if page is short */}
          <Footer />

          {/* Analytics and Performance Tools */}
          <Analytics />
          <SpeedInsights />
        </SettingsProvider>
      </body>

    </html>
  );
}





