'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

const col1 = [
  'vertical%20marquee/Heading%20(16).webp',
  'vertical%20marquee/Mahru%20Stories-18.webp',
  'vertical%20marquee/aavarna%20(2).webp'
];
const col2 = [
  'vertical%20marquee/BTS%20reel.webm',
  'vertical%20marquee/claw%20july%2014%201.webm',
  'vertical%20marquee/Reel%201.webm'
];
const col3 = [
  'vertical%20marquee/hos%20(4).webp',
  'vertical%20marquee/jsk%20(2).webp'
];
const col4 = [
  'vertical%20marquee/firstvideo.webm',
  'vertical%20marquee/secondvideo.webm'
];

const mobileCol2 = [
  'vertical%20marquee/hos%20(4).webp',
  'vertical%20marquee/jsk%20(2).webp',
  'vertical%20marquee/Heading%20(16).webp'
];

// All unique image paths that appear on mobile (no videos)
const mobilePreloadImages = [...new Set([
  ...col1,
  ...mobileCol2,
])].filter(src => !src.endsWith('.webm') && !src.endsWith('.mp4'));

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });
  
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    const resize = () => {
      requestAnimationFrame(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
        setIsMobile(window.innerWidth <= 768);
      });
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <main className={styles.main}>
      {/* Mobile-only image preloader: forces browser to fetch & cache all gallery
          images immediately, before the offset columns scroll them into view.
          Hidden from users and screen readers. */}
      {isMobile && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            opacity: 0,
            pointerEvents: 'none',
            top: 0,
            left: 0,
          }}
        >
          {mobilePreloadImages.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={`/${src}`}
              alt=""
              loading="eager"
              fetchPriority="high"
              style={{ width: 1, height: 1 }}
            />
          ))}
        </div>
      )}
      <div ref={gallery} className={styles.gallery}>
        <Column images={col1} y={y} isMobile={isMobile} />
        <Column images={isMobile ? mobileCol2 : col2} y={y2} isMobile={isMobile} />
        <Column images={col3} y={y3} isMobile={isMobile} />
        <Column images={col4} y={y4} isMobile={isMobile} />
      </div>
    </main>
  );
}

const Column = ({ images, y, isMobile }) => (
  <motion.div className={styles.column} style={{ y }}>
    {images.map((src) => {
      const isVideo = src.endsWith('.webm') || src.endsWith('.mp4');
      return (
        <div key={src} className={styles.imageContainer}>
          {isVideo ? (
            <video
              src={`/${src}`}
              autoPlay
              loop
              muted
              playsInline
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : (
            <Image
              src={`/${src}`}
              alt={src}
              fill
              // More accurate sizes for mobile (2 cols = ~50vw each)
              sizes={isMobile ? '50vw' : '25vw'}
              style={{ objectFit: "cover" }}
              // priority=true disables lazy-loading so Next.js fetches immediately
              priority
            />
          )}
        </div>
      );
    })}
  </motion.div>
);