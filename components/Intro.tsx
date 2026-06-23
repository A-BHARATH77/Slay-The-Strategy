'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealParagraphProps {
  text?: string;
  theme?: 'dark' | 'light';
  highlightWords?: string[];
  chipAfter?: Record<string, string>;
  sectionLabel?: string;
  floatingImageSrc?: string;
  floatingImageAlt?: string;
  disablePin?: boolean;
}

const DEFAULT_TEXT = "Most brands show up online looking like everyone else. Same formats, same captions, same energy. We are the agency that fixes that. Slay the Strategy is a full service social media and digital marketing agency for founders and brands who want to be aesthetic, intentional, and impossible to scroll past. We do not do average. We do not do forgettable. We build things worth looking at";

const HIGHLIGHT_WORDS = [
  "aesthetic,", "intentional,", "impossible", "scroll", "past.",
  "average.", "forgettable.", "worth", "looking"
];

// Chips inserted AFTER these specific words
const CHIP_AFTER: Record<string, string> = {
  "energy.": "/about_section1.png",
  "fixes":  "/about_section2.png",
  "forgettable.":       "/about_section3.png",
};

function InlineChip({ src }: { src: string }) {
  return (
    <span className="sr-chipWrap chip-wrapper-reveal">
      <span className="sr-chipCard chip-img-reveal" style={{ position: 'relative' }}>
        <Image src={src} alt="" fill sizes="120px" className="sr-chipInnerImg" style={{ objectFit: 'cover' }} />
      </span>
    </span>
  );
}

export default function ScrollRevealParagraph({ 
  text = DEFAULT_TEXT, 
  theme = 'dark',
  highlightWords = HIGHLIGHT_WORDS,
  chipAfter = CHIP_AFTER,
  sectionLabel = "/ About Cassian Films",
  floatingImageSrc = "/cassian_films_about_section.png",
  floatingImageAlt = "About Cassian Films",
  disablePin = false
}: ScrollRevealParagraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imgWrapperRef.current || !imgRef.current || !textRef.current || !containerRef.current) return;

    const chipWrappers = gsap.utils.toArray('.chip-wrapper-reveal', textRef.current);
    const chipImgs = gsap.utils.toArray('.chip-img-reveal', textRef.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapperRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(imgWrapperRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out' }
    )
    .fromTo(imgRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 1.1, ease: 'power3.out' },
      '<'
    );

    if (chipImgs.length > 0) {
      tl.fromTo(chipImgs,
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.85, 
          rotationX: 20, 
          rotationY: -20, 
          rotationZ: -10, 
          transformPerspective: 500 
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationX: 6, 
          rotationY: -8, 
          rotationZ: -2, 
          duration: 1.4, 
          ease: 'power3.out', 
          stagger: 0.15,
          clearProps: 'transform' 
        },
        '<'
      );
    }

    tl.fromTo(gsap.utils.toArray('.reveal-word', textRef.current),
      { yPercent: 110 },
      { yPercent: 0, duration: 1.0, ease: 'power3.out', stagger: 0.008 },
      '<0.1'
    );

    if (disablePin) {
      const words = gsap.utils.toArray('.reveal-word', textRef.current);
      gsap.to(words, {
        opacity: 1,
        stagger: 0.015,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    } else {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const words = gsap.utils.toArray('.reveal-word', textRef.current);
        gsap.to(words, {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=250%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          }
        });
      });

      mm.add("(max-width: 768px)", () => {
        const words = gsap.utils.toArray('.reveal-word', textRef.current);
        gsap.to(words, {
          opacity: 1,
          stagger: 0.02,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        });
      });
    }

  }, { scope: containerRef });

  const wordsArray = text.split(' ');
  const bgColor = theme === 'dark' ? '#141414' : 'var(--warm-white)';
  const textColor = theme === 'dark' ? '#ffffff' : '#526855';

  return (
    <div className="gsap-pin-safe-wrapper sr-wrapper">
      <div
        ref={containerRef}
        className="sr-container"
        style={{ backgroundColor: bgColor }}
      >
        <div className="sr-contentWrapper">
          <div className="sr-sectionLabel" style={{ color: textColor }}>
            {sectionLabel}
          </div>
          <div ref={textRef} className="sr-paragraph" style={{ color: textColor }}>
            <div ref={imgWrapperRef} className="sr-floatingImageWrapper" style={{ position: 'relative' }}>
              <Image
                ref={imgRef}
                src={floatingImageSrc}
                alt={floatingImageAlt}
                className="sr-innerImg"
                fill
                sizes="(max-width: 768px) 80px, 170px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            {wordsArray.map((word, i) => {
              const isHighlighted = highlightWords.includes(word);
              const chipSrc = chipAfter[word];
              return (
                <React.Fragment key={i}>
                  <span className="sr-wordWrap">
                    <span
                      className={`reveal-word sr-word ${isHighlighted ? 'sr-highlightWord' : ''}`}
                      style={{ opacity: 0.12 }}
                    >
                      {word}
                    </span>
                  </span>
                  {chipSrc && <InlineChip src={chipSrc} />}
                  {' '}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sr-container {
          position: relative;
          background-color: transparent;
          color: #111;
          padding: 4rem 5%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sr-contentWrapper {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .sr-sectionLabel {
          font-family: var(--font-barlow), sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: left;
          display: block;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          opacity: 0.6;
        }

        .sr-floatingImageWrapper {
          float: left;
          width: 170px;
          height: 220px;
          margin: 1rem 2rem 1rem 0;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 22px 45px rgba(0, 0, 0, 0.4),
            0  8px 16px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s ease;
          cursor: pointer;
        }

        .sr-floatingImageWrapper:hover {
          transform: scale(1.02);
          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.5),
            0 12px 20px rgba(0, 0, 0, 0.3);
        }

        .sr-innerImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .sr-paragraph {
          font-family: var(--font-gilda), "Gilda Display", serif;
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          line-height: 1.25;
          font-weight: 400;
          display: block;
        }

        .sr-wordWrap {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
        }

        .sr-word {
          display: inline-block;
          will-change: opacity;
        }

        .sr-highlightWord {
          color: #243326;
          font-style: italic;
        }

        .sr-chipWrap {
          display: inline-block;
          vertical-align: middle;
          margin: 0 0.45em;
          line-height: 0;
          position: relative;
          top: -0.05em;
        }

        .sr-chipCard {
          display: block;
          width: 120px;
          height: 80px;
          border-radius: 12px;
          background: rgba(17, 17, 17, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.6);
          padding: 4px;
          transform: perspective(500px) rotateX(6deg) rotateY(-8deg) rotateZ(-2deg);
          box-shadow:
            0 18px 38px rgba(0, 0, 0, 0.4),
            0  5px 12px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s ease;
          cursor: pointer;
        }

        .sr-chipCard:hover {
          transform: perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.1);
          box-shadow:
            0 22px 45px rgba(0, 0, 0, 0.5),
            0  8px 15px rgba(0, 0, 0, 0.3);
        }

        .sr-chipInnerImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          display: block;
        }

        @media (max-width: 768px) {
          .sr-container {
            padding: 3rem 1.2rem 0rem 1.2rem;
            min-height: auto;
          }
          .sr-floatingImageWrapper {
            width: 80px;
            height: 100px;
            margin: 0 1rem 0.5rem 0;
          }
          .sr-paragraph {
            font-size: clamp(1.5rem, 5vw, 1.8rem);
            line-height: 1.25;
          }
          .sr-chipCard {
            width: 80px;
            height: 54px;
            padding: 2px;
            border-radius: 8px;
          }
          .sr-chipInnerImg {
            border-radius: 6px;
          }
          .sr-chipWrap {
            margin: 0 0.25em;
          }
        }
      `}} />
    </div>
  );
}