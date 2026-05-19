"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// All images used across the page — preloaded eagerly during the quote animation
// so they're in the browser cache before the overlay lifts.
const PAGE_IMAGES = [
  '/HomeCaroussel/first.jpg',
  '/HomeCaroussel/carousel_01.jpg',
  '/HomeCaroussel/painting_03.jpg',
  '/HomeCaroussel/painting_04.jpg',
  '/HomeCaroussel/painting_05.jpg',
  '/HomeCaroussel/painting_06.jpg',
  '/RecentWorks/work_01.png',
  '/RecentWorks/work_02.png',
  '/RecentWorks/work_03.png',
  '/RecentWorks/work_04.png',
  '/RecentWorks/work_05.png',
  '/RecentWorks/work_09.png',
  '/founder.png',
];

export default function QuoteAnimation() {
  const [showQuote, setShowQuote] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  // Tracks whether the minimum display time has passed
  const minTimePassed = useRef(false);
  // Tracks whether window has fully loaded (all resources)
  const windowLoaded = useRef(false);
  // Refs for timers so we can clear them
  const quoteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRestoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restore scroll once the overlay is fully gone
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

  // Dismiss the overlay — only called once both conditions are satisfied
  const startDismiss = useCallback(() => {
    // Quote text fades out 1.5s before the overlay
    quoteTimerRef.current = setTimeout(() => setShowQuote(false), 0);
    // Overlay itself fades out 1.5s later
    overlayTimerRef.current = setTimeout(() => setShowOverlay(false), 1500);
    // Restore scroll after overlay fade-out animation completes (1.5s + 1s exit)
    scrollRestoreTimerRef.current = setTimeout(() => restoreScroll(), 2700);
  }, [restoreScroll]);

  useEffect(() => {
    // Lock scroll while overlay is showing
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';

    // ── 1. Eagerly preload all page images right now ──────────────────────────
    PAGE_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    // ── 2. Condition A: minimum quote display time (3 seconds) ───────────────
    const minTimer = setTimeout(() => {
      minTimePassed.current = true;
      // If the window already loaded while we were waiting, dismiss now
      if (windowLoaded.current) {
        startDismiss();
      }
    }, 3000);

    // ── 3. Condition B: all resources finished loading ────────────────────────
    const onWindowLoad = () => {
      windowLoaded.current = true;
      // Only dismiss if the minimum display time has also passed
      if (minTimePassed.current) {
        startDismiss();
      }
    };

    if (document.readyState === 'complete') {
      // Already loaded (e.g. navigated back via cache)
      onWindowLoad();
    } else {
      window.addEventListener('load', onWindowLoad);
    }

    // ── 4. Safety fallback: dismiss after 10s no matter what ─────────────────
    const safetyTimer = setTimeout(() => {
      if (showOverlay) {
        startDismiss();
      }
    }, 10000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(safetyTimer);
      if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
      if (overlayTimerRef.current) clearTimeout(overlayTimerRef.current);
      if (scrollRestoreTimerRef.current) clearTimeout(scrollRestoreTimerRef.current);
      window.removeEventListener('load', onWindowLoad);
      restoreScroll();
    };
  }, [restoreScroll, startDismiss]); // eslint-disable-line react-hooks/exhaustive-deps

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