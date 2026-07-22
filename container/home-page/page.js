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
  '23.png',
  '3.png',
  'img1.jpg'
];
const col3 = [
  'vertical%20marquee/hos%20(4).webp',
  'vertical%20marquee/jsk%20(2).webp'
];
const col4 = [
  'vertical%20marquee/firstvideo.webm',
  'vertical%20marquee/secondvideo.webm'
];

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  
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
      <div ref={gallery} className={styles.gallery}>
        <Column images={col1} y={y} />
        <Column images={col2} y={y2} />
        <Column images={col3} y={y3} />
        <Column images={col4} y={y4} />
      </div>
    </main>
  );
}

const Column = ({ images, y }) => (
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
              sizes="(max-width: 767px) 25vw, 25vw"
              style={{ objectFit: "cover" }}
              priority
            />
          )}
        </div>
      );
    })}
  </motion.div>
);