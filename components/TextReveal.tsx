'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  tagName?: React.ElementType;
}

export default function TextReveal({ 
  text, 
  className = '', 
  style = {}, 
  delay = 0,
  tagName: Tag = 'div'
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  useGSAP(() => {
    if (!containerRef.current) return;

    const wordEls = containerRef.current.querySelectorAll('.reveal-word');
    gsap.from(wordEls, {
      y: '120%',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
      delay: delay,
    });
  }, { scope: containerRef });

  return (
    <Tag 
      ref={containerRef as any} 
      className={`reveal-container ${className}`} 
      style={{ ...style, display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
    >
      {words.map((word, i) => (
        <span 
          key={i} 
          className="reveal-word-wrapper" 
          style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.1em', marginBottom: '-0.1em', marginRight: '0.25em' }}
        >
          <span className="reveal-word" style={{ display: 'inline-block', willChange: 'transform' }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
