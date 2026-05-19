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
          <span className="expertise-reveal-word" style={{ display: 'inline-block', willChange: 'transform' }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Expertises() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.expertises-item');
    items.forEach((item: Element) => {
      const words = item.querySelectorAll('.expertise-reveal-word');
      gsap.from(words, {
        y: '120%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.015,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="expertises" ref={containerRef} className="section_expertises">
      <div className="padding-global">
        <div className="container-col-12">
          <div className="mwg_effect031">
            <div className="expertises-collection w-dyn-list">
              <div role="list" className="expertises-list w-dyn-items">
                
                {/* SLIDE 1 */}
                <div role="listitem" className="expertises-item w-dyn-item">
                  <div className="expertise-slide">
                    <div className="expertise-wrap">
                      <div className="expertise-content theme-white" style={{ backgroundColor: '#516856', color: '#e4e1d6' }}>
                        <div className="expertise-content_top">
                          <div className="label" style={{ background: 'none', padding: 0 }}>
                            <div className="paragraph-m" style={{ color: '#e4e1d6' }}>Expertise</div>
                          </div>
                          <h2 className="expertise-content_heading" style={{ color: '#e4e1d6' }}>
                            <RevealWords text="Brand strategy" />
                          </h2>
                          <div className="expertise-content_number" style={{ color: '#e4e1d6' }}>
                            <div className="expertise-content_heading" style={{ color: '#e4e1d6' }}>0</div>
                            <div className="expertise-content_heading" style={{ color: '#e4e1d6' }}>1</div>
                          </div>
                        </div>
                        <div className="expertise-content_img">
                          <div className="medium-image">
                            <img draggable="false" src="/Enterprise/strategy.png" loading="eager" alt="Brand strategy" className="video" />
                          </div>
                        </div>
                        <div className="expertise-content_bottom" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', gap: '2rem', width: '100%' }}>
                          <div style={{ width: '85%', flex: '0 0 85%' }}>
                            <p className="paragraph-m" style={{ color: '#e4e1d6', margin: 0 }}>
                              <RevealWords text="Your brand is not your logo — it is your reputation. We dig into positioning, voice, and values to build a foundation that every piece of content stands on." />
                            </p>
                          </div>
                          <div style={{ width: '55%', flex: '0 0 55%' }}>
                            <div className="paragraph-m" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#e4e1d6' }}>
                              <div><RevealWords text="Brand Positioning" /></div>
                              <div><RevealWords text="Tone of Voice" /></div>
                              <div><RevealWords text="Competitor Analysis" /></div>
                              <div><RevealWords text="Brand Architecture" /></div>
                              <div><RevealWords text="Messaging Framework" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SLIDE 2 */}
                <div role="listitem" className="expertises-item w-dyn-item">
                  <div className="expertise-slide">
                    <div className="expertise-wrap">
                      <div className="expertise-content theme-pink" style={{ backgroundColor: '#e4e1d6', color: '#516856' }}>
                        <div className="expertise-content_top">
                          <div className="label" style={{ background: 'none', padding: 0 }}>
                            <div className="paragraph-m" style={{ color: '#516856' }}>Expertise</div>
                          </div>
                          <h2 className="expertise-content_heading">
                            <RevealWords text="Content Systems" />
                          </h2>
                          <div className="expertise-content_number" style={{ color: '#516856' }}>
                            <div className="expertise-content_heading">0</div>
                            <div className="expertise-content_heading">2</div>
                          </div>
                        </div>
                        <div className="expertise-content_img">
                          <div className="medium-image">
                            <img draggable="false" src="/Enterprise/second.jpg" loading="eager" alt="Content Systems" className="video" />
                          </div>
                        </div>
                        <div className="expertise-content_bottom" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', gap: '2rem', width: '100%' }}>
                          <div style={{ width: '85%', flex: '0 0 85%' }}>
                            <p className="paragraph-m" style={{ color: '#516856', margin: 0 }}>
                              <RevealWords text="Consistency is the real algorithm. We build content pillars, calendars, and creative frameworks that make showing up every day effortless and on-brand." />
                            </p>
                          </div>
                          <div style={{ width: '55%', flex: '0 0 55%' }}>
                            <div className="paragraph-m" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#516856' }}>
                              <div><RevealWords text="Content Strategy" /></div>
                              <div><RevealWords text="Visual Identity" /></div>
                              <div><RevealWords text="Social Templates" /></div>
                              <div><RevealWords text="Copywriting Guidelines" /></div>
                              <div><RevealWords text="Asset Production" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SLIDE 3 */}
                <div role="listitem" className="expertises-item w-dyn-item">
                  <div className="expertise-slide">
                    <div className="expertise-wrap">
                      <div className="expertise-content theme-green" style={{ backgroundColor: '#516856', color: '#e4e1d6' }}>
                        <div className="expertise-content_top">
                          <div className="label" style={{ background: 'none', padding: 0 }}>
                            <div className="paragraph-m" style={{ color: '#e4e1d6' }}>Expertise</div>
                          </div>
                          <h2 className="expertise-content_heading" style={{ color: '#e4e1d6' }}>
                            <RevealWords text="Social Management" />
                          </h2>
                          <div className="expertise-content_number" style={{ color: '#e4e1d6' }}>
                            <div className="expertise-content_heading" style={{ color: '#e4e1d6' }}>0</div>
                            <div className="expertise-content_heading" style={{ color: '#e4e1d6' }}>3</div>
                          </div>
                        </div>
                        <div className="expertise-content_img">
                          <div className="medium-image">
                            <img draggable="false" src="/Enterprise/social.jpg" loading="eager" alt="Social Management" className="video" />
                          </div>
                        </div>
                        <div className="expertise-content_bottom" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', gap: '2rem', width: '100%' }}>
                          <div style={{ width: '85%', flex: '0 0 85%' }}>
                            <p className="paragraph-m" style={{ color: '#e4e1d6', margin: 0 }}>
                              <RevealWords text="We handle the posting, the captions, the DMs, and the analytics — so you can stay focused on building the business your audience is watching." />
                            </p>
                          </div>
                          <div style={{ width: '65%', flex: '0 0 65%' }}>
                            <div className="paragraph-m" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#e4e1d6' }}>
                              <div><RevealWords text="Community Management" /></div>
                              <div><RevealWords text="Content Scheduling" /></div>
                              <div><RevealWords text="Analytics & Reporting" /></div>
                              <div><RevealWords text="Influencer Outreach" /></div>
                              <div><RevealWords text="Trend Monitoring" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SLIDE 4 */}
                <div role="listitem" className="expertises-item w-dyn-item">
                  <div className="expertise-slide">
                    <div className="expertise-wrap">
                      <div className="expertise-content theme-blue" style={{ backgroundColor: '#e4e1d6', color: '#516856' }}>
                        <div className="expertise-content_top">
                          <div className="label" style={{ background: 'none', padding: 0 }}>
                            <div className="paragraph-m" style={{ color: '#516856' }}>Expertise</div>
                          </div>
                          <h2 className="expertise-content_heading">
                            <RevealWords text="Paid & Growth" />
                          </h2>
                          <div className="expertise-content_number" style={{ color: '#516856' }}>
                            <div className="expertise-content_heading">0</div>
                            <div className="expertise-content_heading">4</div>
                          </div>
                        </div>
                        <div className="expertise-content_img">
                          <div className="medium-image">
                            <img draggable="false" src="/Enterprise/growth.png" loading="eager" alt="Paid & Growth" className="video" />
                          </div>
                        </div>
                        <div className="expertise-content_bottom" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', gap: '2rem', width: '100%' }}>
                          <div style={{ width: '85%', flex: '0 0 85%' }}>
                            <p className="paragraph-m" style={{ color: '#516856', margin: 0 }}>
                              <RevealWords text="Organic builds trust. Paid scales it. Our performance layer amplifies what is already working so your brand compounds — not just grows." />
                            </p>
                          </div>
                          <div style={{ width: '65%', flex: '0 0 65%' }}>
                            <div className="paragraph-m" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#516856' }}>
                              <div><RevealWords text="Meta & TikTok Ads" /></div>
                              <div><RevealWords text="Campaign Strategy" /></div>
                              <div><RevealWords text="A/B Testing" /></div>
                              <div><RevealWords text="Conversion Optimization" /></div>
                              <div><RevealWords text="Performance Analytics" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
