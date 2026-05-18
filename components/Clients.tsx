"use client";
// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CLIENT_LOGOS = [
  { name: 'Avarna', img: '/Clients/avarna.png' },
  { name: 'Acyuta', img: '/Clients/acyuta.png' },
  { name: 'Cellexa', img: '/Clients/cellexa.png' },
  { name: 'Ginni Parmar', img: '/Clients/ginni_parmar.png' },
  { name: 'Infamous Talents', img: '/Clients/infamous_talents.png' },
  { name: 'Maple', img: '/Clients/maple.png' },
  { name: 'Mahru Stories', img: '/Clients/mahru_stories.png' },
  { name: 'Perspective Studio', img: '/Clients/perspective_studio.png' },
  { name: 'Claw Nails', img: '/Clients/claw_nails.png' },
  { name: 'Kapoma', img: '/Clients/kapoma.jpg' },
  { name: 'Luxx Spas', img: '/Clients/luxx_spas.png' },
  { name: 'Orange', img: '/Clients/orange.png' },
  { name: 'Orient', img: '/Clients/orient.png' },
  { name: 'Blue Modern', img: '/Clients/blue_modern.png' },
  { name: 'Wallora', img: '/Clients/wallora.png' }
];

function RevealWords({ text }: { text: string }) {
  return (
    <span style={{ display: 'inline-flex', flexWrap: 'wrap', rowGap: '0.2em', columnGap: '0.25em' }}>
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
          <span className="clients-reveal-word" style={{ display: 'inline-block', willChange: 'transform' }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

function LogoCell({ client }: { client: typeof CLIENT_LOGOS[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'clamp(280px, 35vw, 450px)',
        height: 'clamp(150px, 18vw, 250px)',
        padding: '0 2rem'
      }}
    >
      <img
        src={client.img}
        alt={client.name}
        style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transition: 'all 500ms ease-out',
          cursor: 'pointer',
          transform: 'scale(1.2)',
          mixBlendMode: 'multiply'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
      />
    </div>
  );
}

function LogoMarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const copies = Array.from({ length: 6 }, (_, ci) =>
    CLIENT_LOGOS.map((cl, li) => ({ ...cl, key: `${ci}-${li}` }))
  ).flat();

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const BASE = 0.6;
    const MAX_BOOST = BASE * 10;
    const BOOST_SCALE = 0.055;
    const IDLE_MS = 95;
    const RAMP_SPEED = 10.5;
    const KICK_EPS = 0.02;
    const KICK_LERP = 0.65;
    const dir = reverse ? 1 : -1;

    let x = 0;
    let currentBoost = BASE;
    let targetBoost = BASE;
    let lastChangeAt = performance.now();
    let lastTickAt = performance.now();
    let rafId: number;

    const power3Out = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTickAt) / 1000, 0.05);
      lastTickAt = now;

      if (now - lastChangeAt > IDLE_MS) targetBoost = BASE;

      const t = Math.min(1, dt * RAMP_SPEED);
      const eased = power3Out(t);
      currentBoost += (targetBoost - currentBoost) * eased;
      currentBoost = Math.max(BASE, Math.min(MAX_BOOST, currentBoost));

      x += dir * currentBoost;
      const half = row.scrollWidth / 2;
      if (Math.abs(x) >= half) x = reverse ? -half + 1 : 0;
      row.style.transform = `translateX(${x}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      const rawDelta = Math.abs(e.deltaY) || Math.abs(e.deltaX);
      const delta = Math.min(rawDelta, 120);
      const desired = Math.min(BASE + delta * BOOST_SCALE, MAX_BOOST);
      targetBoost = desired;
      lastChangeAt = now;
      if (Math.abs(currentBoost - BASE) < KICK_EPS) {
        currentBoost = BASE + (desired - BASE) * KICK_LERP;
      }
      lastTickAt = now;
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', onWheel);
    };
  }, [reverse]);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div 
        ref={rowRef} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: 'max-content', 
          willChange: 'transform',
          gap: '0' 
        }}
      >
        {copies.map((cl) => (
          <LogoCell key={cl.key} client={cl} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.clients-reveal-word', {
      y: '120%',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.015,
      scrollTrigger: {
        trigger: '.section_clients',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="section_clients" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#FDF8EC', overflow: 'hidden' }}>
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-col-12 w-container">
          <div className="padding-bottom padding-72px" style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', gap: '6rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 1 auto', minWidth: '300px', paddingLeft: '4rem' }}>
              <h2 className="heading-m" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#516856', margin: 0, lineHeight: '0.9', display: 'flex', flexDirection: 'column', gap: '0.2em' }}>
                <RevealWords text="These brands" />
                <RevealWords text="got slayed." />
              </h2>
            </div>
            <div style={{ flex: '1 1 auto', minWidth: '300px', maxWidth: '55ch' }}>
              <p style={{ fontSize: '1rem', color: '#516856', opacity: 0.7, lineHeight: '1.6', margin: 0 }}>
                <RevealWords text="Over the years we have built lasting relationships with clients across fashion, technology, culture, and commerce. We don't just deliver work — we deliver work that performs, persists, and gets remembered." />
              </p>
            </div>
          </div>
          
          <div className="clients-marquee-wrapper" style={{ width: '100%', overflow: 'hidden' }}>
            <LogoMarqueeRow />
          </div>
        </div>
      </div>
    </section>
  );
}
