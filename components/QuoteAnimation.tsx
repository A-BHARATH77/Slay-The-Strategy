"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteAnimation() {
  const [showQuote, setShowQuote] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Condition flags
  const minTimePassed   = useRef(false);
  const imagesReady     = useRef(false);
  const dismissCalled   = useRef(false);
  const progressRef     = useRef(0); // tracks real value without re-render lag

  // Timer / interval refs for cleanup
  const quoteTimerRef       = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayTimerRef     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRestoreRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollIntervalRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Restore scroll once overlay is fully gone
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

  // Called once both conditions (min time + images ready) are true
  const startDismiss = useCallback(() => {
    if (dismissCalled.current) return; // guard against double-call
    dismissCalled.current = true;

    // Stop the progress ticker and snap to 100 %
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setProgress(100);

    // Give the user ~400 ms to see the full bar, then start the exit sequence
    quoteTimerRef.current  = setTimeout(() => setShowQuote(false),                0 + 400);
    overlayTimerRef.current = setTimeout(() => setShowOverlay(false),             400 + 1500);
    scrollRestoreRef.current = setTimeout(() => restoreScroll(),                  400 + 1500 + 1100);
  }, [restoreScroll]);

  // Attempt dismiss — only fires if BOTH gates are open
  const tryDismiss = useCallback(() => {
    if (minTimePassed.current && imagesReady.current) {
      startDismiss();
    }
  }, [startDismiss]);

  useEffect(() => {
    // Lock scroll immediately while the overlay is showing
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';

    // ── Progress animation ─────────────────────────────────────────────────────
    // Phase 1 : 0 → 80 % in ~1 000 ms (mirrors the Gate-A minimum timer)
    //           80 / (1000ms / 16ms) ≈ 80 / 62.5 ≈ 1.28 units per tick → use 1.3
    // Phase 2 : 80 → 97 % slow crawl while Gate-B (image poll) catches up
    // Phase 3 : held at 97 % until startDismiss() snaps to 100 %
    const TICK_MS = 16; // ~60 fps
    progressRef.current = 0;

    progressIntervalRef.current = setInterval(() => {
      const curr = progressRef.current;
      let next: number;

      if (curr < 80) {
        next = Math.min(curr + 1.3, 80);
      } else if (curr < 97) {
        next = Math.min(curr + 0.07, 97);
      } else {
        next = 97; // hold — startDismiss() will snap to 100
      }

      progressRef.current = next;
      setProgress(parseFloat(next.toFixed(1)));
    }, TICK_MS);

    // ── Gate A: minimum quote display time (1 second) ─────────────────────────
    const minTimer = setTimeout(() => {
      minTimePassed.current = true;
      tryDismiss();
    }, 1000);

    // ── Gate B: poll DOM <img> elements until all are complete ────────────────
    const pollStartTimer = setTimeout(() => {
      pollIntervalRef.current = setInterval(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        const allDone = imgs.length > 0 && imgs.every(img => img.complete);
        if (allDone) {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          imagesReady.current = true;
          tryDismiss();
        }
      }, 300);
    }, 1000);

    // ── Safety fallback: force-dismiss after 12 s no matter what ──────────────
    const safetyTimer = setTimeout(() => {
      imagesReady.current = true;
      minTimePassed.current = true;
      tryDismiss();
    }, 12000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(pollStartTimer);
      clearTimeout(safetyTimer);
      if (pollIntervalRef.current)     clearInterval(pollIntervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (quoteTimerRef.current)       clearTimeout(quoteTimerRef.current);
      if (overlayTimerRef.current)     clearTimeout(overlayTimerRef.current);
      if (scrollRestoreRef.current)    clearTimeout(scrollRestoreRef.current);
      restoreScroll();
    };
  }, [restoreScroll, tryDismiss]); // eslint-disable-line react-hooks/exhaustive-deps

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
            padding: '2rem',
          }}
        >
          {/* Quote text */}
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
                  lineHeight: '1.4',
                }}
              >
                "Design is not just what it looks like and feels like. Design is how it works."
                <br />
                <span style={{ fontSize: '0.6em', marginTop: '1rem', display: 'block', fontStyle: 'italic' }}>
                  — Steve Jobs
                </span>

                {/* Centered progress bar below author name */}
                <div
                  style={{
                    width: '120px',
                    height: '4px',
                    backgroundColor: 'rgba(81, 104, 86, 0.15)',
                    margin: '2rem auto 0 auto',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      backgroundColor: '#516856',
                      transition: `width ${progress === 100 ? '0.3s' : '0.1s'} linear`,
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
