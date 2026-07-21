'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

const col1Images = [
  'vertical marquee/Heading (16).png',
  'vertical marquee/Mahru Stories-18.png'
];

const col2Images = [
  '23.png',
  '3.png',
  'img1.jpg'
];

const col3Images = [
  'vertical marquee/aavarna (2).png',
  'vertical marquee/hos (4).png',
  'vertical marquee/jsk (2).png'
];

const col4Images = [
  'vertical marquee/firstvideo.webm',
  'vertical marquee/secondvideo.webm'
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
        <Column images={col1Images} y={y} />
        <Column images={col2Images} y={y2} />
        <Column images={col3Images} y={y3} />
        <Column images={col4Images} y={y4} />
      </div>
    </main>
  );
}

const Column = ({ images, y }) => (
  <motion.div className={styles.column} style={{ y }}>
    {images.map((src) => {
      const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm');
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