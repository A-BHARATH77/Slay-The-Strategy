"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteAnimation() {
  const [showQuote, setShowQuote] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Quote fades out after 3 seconds
    const quoteTimer = setTimeout(() => setShowQuote(false), 3000);
    // Overlay fades out after 4.5 seconds
    const overlayTimer = setTimeout(() => setShowOverlay(false), 4500);

    return () => {
      clearTimeout(quoteTimer);
      clearTimeout(overlayTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#f7f2e6', // matching hero background
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
                  color: '#516856', // matching hero text color
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
