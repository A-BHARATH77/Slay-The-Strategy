"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// All critical images that must be loaded before the overlay dismisses
const CRITICAL_IMAGES = [
  '/RecentWorks/work_01.png',
  '/RecentWorks/work_02.png',
  '/RecentWorks/work_03.png',
  '/RecentWorks/work_04.png',
  '/RecentWorks/work_05.png',
  '/RecentWorks/work_09.png',
  '/HomeCaroussel/carousel_01.jpg',
  '/HomeCaroussel/first.jpg',
  '/HomeCaroussel/painting_03.jpg',
  '/HomeCaroussel/painting_04.jpg',
  '/HomeCaroussel/painting_05.jpg',
  '/HomeCaroussel/painting_06.jpg',
];

function preloadImages(srcs: string[]): Promise<void> {
  const promises = srcs.map(
    (src) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // resolve even on error — don't block forever
        img.src = src;
      })
  );
  return Promise.all(promises).then(() => undefined);
}

export default function QuoteAnimation() {
  const [showQuote, setShowQuote] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const restoreScroll = useCallback(() => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.documentElement.style.overscrollBehavior = '';
    document.body.style.overscrollBehavior = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('resize'));
    }
  }, []);

  useEffect(() => {
    // Lock scroll immediately
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';

    // Quote fades out after 3 seconds (fixed, always)
    const quoteTimer = setTimeout(() => setShowQuote(false), 3000);

    // Overlay dismisses only when BOTH conditions are true:
    // 1. Minimum 4.5 seconds have passed
    // 2. All critical images are loaded
    const minDelayPromise = new Promise<void>((resolve) =>
      setTimeout(resolve, 4500)
    );
    const imagesLoadedPromise = preloadImages(CRITICAL_IMAGES);

    let cancelled = false;
    Promise.all([minDelayPromise, imagesLoadedPromise]).then(() => {
      if (!cancelled) setShowOverlay(false);
    });

    return () => {
      cancelled = true;
      clearTimeout(quoteTimer);
      restoreScroll();
    };
  }, [restoreScroll]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none' as const }}
          transition={{ duration: 1 }}
          onAnimationComplete={(definition: any) => {
            if (definition === 'exit' || (definition && definition.opacity === 0)) {
              restoreScroll();
            }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#f7f2e6',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <AnimatePresence>
            {showQuote && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  color: '#516856',
                  textAlign: 'center',
                  maxWidth: '800px',
                  lineHeight: '1.4'
                }}
              >
                "Design is not just what it looks like and feels like. Design is how it works."
                <br />
                <span style={{ fontSize: '0.6em', marginTop: '1rem', display: 'block', fontStyle: 'italic' }}>— Steve Jobs</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}