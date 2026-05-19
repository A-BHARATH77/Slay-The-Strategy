// @ts-nocheck
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

        // function raf(time) {
        //   lenis.raf(time);
        //   requestAnimationFrame(raf);
        // }
        // requestAnimationFrame(raf);

        // Sync NPM GSAP
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Sync Global Webflow GSAP
        if (window.ScrollTrigger && window.ScrollTrigger !== ScrollTrigger) {
            lenis.on("scroll", window.ScrollTrigger.update);
            if (window.gsap && window.gsap !== gsap) {
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
