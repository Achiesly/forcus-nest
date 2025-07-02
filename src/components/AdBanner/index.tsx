import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    try {
      // @ts-expect-error: adsbygoogle is injected by Adsense script and not typed
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
     data-ad-client="ca-pub-4341873905679498"
     data-ad-slot="1733861798"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
}
