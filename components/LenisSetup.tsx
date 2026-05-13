// @ts-nocheck
'use client';
import { useEffect } from 'react';

export default function LenisSetup() {
  useEffect(() => {
    // We dynamically load Lenis to ensure it runs on the client
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.5/dist/lenis.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Lenis) {
        const lenis = new window.Lenis({
          lerp: 0.1,
          wheelMultiplier: 0.7,
          infinite: false,
          gestureOrientation: "vertical",
          normalizeWheel: false,
          smoothTouch: false
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        if (window.ScrollTrigger) {
            lenis.on("scroll", window.ScrollTrigger.update);
            if (window.gsap) {
                window.gsap.ticker.add((time) => {
                    lenis.raf(time * 1000);
                });
                window.gsap.ticker.lagSmoothing(0);
            }
        }
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
