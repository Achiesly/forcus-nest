'use client';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdBanner() {
  const adRef = useRef<HTMLModElement>(null);
  const [adVisible, setAdVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // If the ins tag has no height after a while, it's probably empty
      const height = adRef.current?.offsetHeight || 0;
      if (height > 0) {
        setAdVisible(true);
      } else {
        setAdVisible(false);
      }
    }, 1500); // Give time for ads to load

    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('Ad error:', e);
    }

    return () => clearTimeout(timeout);
  }, []);

  if (!adVisible) return null;

  return (
    <div className="w-full flex justify-center">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4341873905679498"
        data-ad-slot="1733861798"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
