//import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Footer from '@/components/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
          {/* Navbar component */}
          
          {/* Main content goes here */}
        
          {children}
        
          {/* Analytics and Speed Insights components */}
          <Analytics />
          <SpeedInsights />
          {/* Footer component */}
          {/* Footer is placed here to ensure it appears at the bottom of the page */}
          <Footer />
      </body>
    </html>
  );
}





