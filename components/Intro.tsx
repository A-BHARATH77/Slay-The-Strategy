'use client';
// @ts-nocheck
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function RevealWords({ text }: { text: string }) {
  return (
    <span style={{ display: 'inline-flex', flexWrap: 'wrap', rowGap: '0.2em', columnGap: '0.25em' }}>
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
          <span className="intro-reveal-word" style={{ display: 'inline-block', willChange: 'transform' }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Intro() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.intro-reveal-word', {
      y: '120%',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.02,
      scrollTrigger: {
        trigger: '#intro-home',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="intro-home" ref={containerRef} className="section_intro">
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 992px) {
          .intro-heading-container { grid-row: 1; }
          .intro-image-container { grid-column: 1 / 7; grid-row: 1 / 3; width: 22rem; }
          .intro-content-container { grid-row: 2; border-left: 1px solid #516856; padding-left: 3rem; }
        }
        @media (max-width: 991px) {
          .intro-image-container { width: 100%; max-width: 22rem; margin: 2rem auto 0; }
          .intro-content-container { border-left: none; padding-left: 0; }
        }
      ` }} />
      <div className="section-padding-96px">
        <div className="padding-global">
          <div className="container-col-12">
            <div className="grid-col-12">
              <div id="w-node-faa2305a-1600-624b-3553-a5629475cb11-23544b6d" className="margin-bottom margin-40px intro-heading-container" style={{ marginTop: 0, paddingTop: 0 }}>
                <h2 className="heading-m" style={{ marginTop: 0, paddingTop: 0, display: 'flex', flexDirection: 'column', gap: '0.2em' }}>
                  <RevealWords text="I am Dipani, a" />
                  <RevealWords text="brand strategist" />
                </h2>
              </div>
              <div data-video="playpause" id="w-node-faa2305a-1600-624b-3553-a5629475cb14-23544b6d" className="small-image intro-image-container" style={{ height: 'auto', justifySelf: 'center', alignSelf: 'start', marginTop: 0, paddingTop: 0 }}>
                <div className="show-mobile">
                  <img draggable="false" src="/founder.png" alt="Dipani" loading="lazy" className="image" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="hide-mobile">
                  <img draggable="false" src="/founder.png" alt="Dipani" loading="lazy" className="image" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="show-mobile">
                <div className="padding-bottom padding-96px" />
              </div>
              <div id="w-node-faa2305a-1600-624b-3553-a5629475cb19-23544b6d" className="content-wrap intro-content-container" style={{ marginTop: '2rem' }}>
                <p className="paragraph-l">
                  <RevealWords text="I build compelling social media presences that convert attention into unbreakable loyalty." />
                </p>
                <p className="paragraph-m" style={{ opacity: 0.6 }}>
                  <RevealWords text="I started Slay With Strategy to help ambitious brands cut through the noise. We combine data-backed marketing strategies with scroll-stopping creative content to build digital footprints that actually matter." />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
