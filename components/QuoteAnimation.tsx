"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function QuoteAnimation() {
  const [showQuote, setShowQuote] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  // Condition flags
  const minTimePassed  = useRef(false);
  const imagesReady    = useRef(false);
  const dismissCalled  = useRef(false);

  // Timer / interval refs for cleanup
  const quoteTimerRef        = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayTimerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRestoreRef     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollIntervalRef      = useRef<ReturnType<typeof setInterval> | null>(null);

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
    // Quote text fades out immediately
    quoteTimerRef.current = setTimeout(() => setShowQuote(false), 0);
    // Overlay fades out 1.5s later
    overlayTimerRef.current = setTimeout(() => setShowOverlay(false), 1500);
    // Restore scroll after overlay exit animation (1.5s + 1s framer exit + buffer)
    scrollRestoreRef.current = setTimeout(() => restoreScroll(), 2700);
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

    // ── Gate A: minimum quote display time (3 seconds) ────────────────────────
    const minTimer = setTimeout(() => {
      minTimePassed.current = true;
      tryDismiss();
    }, 3000);

    // ── Gate B: poll DOM <img> elements until all are complete ────────────────
    // Start after 1s so React has time to render all page components and their
    // <img> tags into the DOM. next/image renders real <img> elements so
    // img.complete correctly reflects their load state.
    const pollStartTimer = setTimeout(() => {
      pollIntervalRef.current = setInterval(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        // Need at least some images to exist; every one must be decoded
        const allDone = imgs.length > 0 && imgs.every(img => img.complete);
        if (allDone) {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          imagesReady.current = true;
          tryDismiss();
        }
      }, 300);
    }, 1000);

    // ── Safety fallback: force-dismiss after 12s no matter what ───────────────
    const safetyTimer = setTimeout(() => {
      imagesReady.current = true;
      minTimePassed.current = true;
      tryDismiss();
    }, 12000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(pollStartTimer);
      clearTimeout(safetyTimer);
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
      if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
      if (overlayTimerRef.current) clearTimeout(overlayTimerRef.current);
      if (scrollRestoreRef.current) clearTimeout(scrollRestoreRef.current);
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