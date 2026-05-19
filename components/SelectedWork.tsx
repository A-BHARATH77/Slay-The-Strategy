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
          <span className="sw-reveal-word" style={{ display: 'inline-block', willChange: 'transform' }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.sw-reveal-word', 
      { y: '120%' },
      {
        y: '0%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.section_selected-work',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="section_selected-work" style={{ backgroundColor: '#516856', color: '#f7f2e6' }}>
      <div className="section-padding-96px" style={{ paddingTop: '4em' }}>
        <div className="padding-global">
          <div className="container-col-12">
            <div className="sw_wrapper">
              <div className="container-col-10">
                <div className="max-width-col-06">
                  <div className="content-wrap">
                    <h2 className="heading-m" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#f7f2e6', margin: 0, lineHeight: '0.9', display: 'flex', flexDirection: 'column', gap: '0.2em' }}>
                      <RevealWords text="Recent" />
                      <RevealWords text="Works." />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="container-col-12">
                <div className="sw-collection w-dyn-list">
                  <div role="list" className="sw-list w-dyn-items">
                    <div role="listitem" className="sw-item w-dyn-item">
                      <div data-video-on-hover="not-active" className="sw-card w-inline-block">
                        <div className="sw-card_video">
                          <img draggable="false" alt="Recent Work" loading="eager" src="/RecentWorks/work_01.png" className="video-card_placeholder" />
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="sw-item w-dyn-item">
                      <div data-video-on-hover="not-active" className="sw-card w-inline-block">
                        <div className="sw-card_video">
                          <img draggable="false" alt="Recent Work" loading="eager" src="/RecentWorks/work_02.png" className="video-card_placeholder" />
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="sw-item w-dyn-item">
                      <div data-video-on-hover="not-active" className="sw-card w-inline-block">
                        <div className="sw-card_video">
                          <img draggable="false" alt="Recent Work" loading="eager" src="/RecentWorks/work_03.png" className="video-card_placeholder" />
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="sw-item w-dyn-item">
                      <div data-video-on-hover="not-active" className="sw-card w-inline-block">
                        <div className="sw-card_video">
                          <img draggable="false" alt="Recent Work" loading="eager" src="/RecentWorks/work_04.png" className="video-card_placeholder" />
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="sw-item w-dyn-item">
                      <div data-video-on-hover="not-active" className="sw-card w-inline-block">
                        <div className="sw-card_video">
                          <img draggable="false" alt="Recent Work" loading="eager" src="/RecentWorks/work_05.png" className="video-card_placeholder" />
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="sw-item w-dyn-item">
                      <div data-video-on-hover="not-active" className="sw-card w-inline-block">
                        <div className="sw-card_video">
                          <img draggable="false" alt="Recent Work" loading="eager" src="/RecentWorks/work_09.png" className="video-card_placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-css w-embed">
                <style dangerouslySetInnerHTML={{ __html: "\n                .sw-list {\n                    flex-wrap: wrap;\n                }\n\n                .sw-collection .sw-item:nth-child(1) .sw-card,\n                .sw-collection .sw-item:nth-child(1) .sw-card_content,\n                .sw-collection .sw-item:nth-child(4) .sw-card,\n                .sw-collection .sw-item:nth-child(4) .sw-card_content {\n                    background: var(--_colors---brand-colors--red);\n                }\n\n                .sw-collection .sw-item:nth-child(1) .sw-card_shape,\n                .sw-collection .sw-item:nth-child(4) .sw-card_shape {\n                    color: var(--_colors---brand-colors--red);\n                }\n\n                .sw-collection .sw-item:nth-child(1) .label,\n                .sw-collection .sw-item:nth-child(4) .label {\n                    background: var(--_colors---brand-colors--red-400);\n                }\n\n                .sw-collection .sw-item:nth-child(2) .sw-card,\n                .sw-collection .sw-item:nth-child(2) .sw-card_content,\n                .sw-collection .sw-item:nth-child(5) .sw-card,\n                .sw-collection .sw-item:nth-child(5) .sw-card_content {\n                    background: var(--_colors---brand-colors--blue);\n                }\n\n                .sw-collection .sw-item:nth-child(2) .sw-card_shape,\n                .sw-collection .sw-item:nth-child(5) .sw-card_shape {\n                    color: var(--_colors---brand-colors--blue);\n                }\n\n                .sw-collection .sw-item:nth-child(2) .label,\n                .sw-collection .sw-item:nth-child(5) .label {\n                    background: var(--_colors---brand-colors--blue-500);\n                }\n\n                .sw-collection .sw-item:nth-child(3) .sw-card,\n                .sw-collection .sw-item:nth-child(3) .sw-card_content,\n                .sw-collection .sw-item:nth-child(6) .sw-card,\n                .sw-collection .sw-item:nth-child(6) .sw-card_content {\n                    background: var(--_colors---brand-colors--green);\n                }\n\n                .sw-collection .sw-item:nth-child(3) .sw-card_shape,\n                .sw-collection .sw-item:nth-child(6) .sw-card_shape {\n                    color: var(--_colors---brand-colors--green);\n                }\n\n                .sw-collection .sw-item:nth-child(3) .label,\n                .sw-collection .sw-item:nth-child(6) .label {\n                    background: var(--_colors---brand-colors--green-300);\n                }\n\n                @media screen and (max-width: 479px) {\n                    .sw-collection .sw-item:nth-child(2) .sw-card,\n                    .sw-collection .sw-item:nth-child(5) .sw-card {\n                        transform: rotate(1deg);\n                    }\n                    .sw-collection .sw-item:nth-child(3) .sw-card,\n                    .sw-collection .sw-item:nth-child(6) .sw-card {\n                        transform: rotate(-1deg);\n                    }\n                }\n            " }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
