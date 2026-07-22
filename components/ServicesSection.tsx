"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const serviceItems = [
  {
    num: "(001)",
    title: "Social Media Management",
    desc: "We run your social so you do not have to.",
    extendedDesc: "Your Instagram is not a nice to have anymore. It is your storefront, your first impression, and your most visited sales page. We handle it end to end so it actually reflects what your brand is worth.",
    included: [
      "Monthly content strategy and calendar",
      "Caption writing and copy",
      "Hashtag and SEO research",
      "Scheduling and posting",
      "Community management and DM handling",
      "Monthly performance report"
    ],
    bestFor: "Founders who are done figuring out what to post and want it handled by people who actually understand brand.",
    img: "/services/socialmedia.png",
  },
  {
    num: "(002)",
    title: "Performance Marketing",
    desc: "Ads that are built to convert. Not just run.",
    extendedDesc: "Anyone can boost a post. We build actual campaigns. Audience research, creative strategy, ad copy, testing, and optimisation based on what the data says. Every rupee tracked. Every result owned.",
    included: [
      "Meta Ads (Facebook and Instagram)",
      "Google Ads (Search and Display)",
      "Audience research and targeting",
      "Ad creative direction and copy",
      "A/B testing and optimisation",
      "Weekly and monthly reporting"
    ],
    bestFor:"Brands ready to put money behind content that is built to perform.",
    img: "/services/performance marketing .webp",
  },
  {
    num: "(003)",
    title: "UGC and Content Shoots",
    desc: "Content that makes people stop mid scroll.",
    extendedDesc: "We plan the shoot, direct the creative, and coordinate production from concept to final edit. Every piece of content is built around your brand aesthetic and what your specific audience actually responds to. Not what worked for someone else six months ago.",
    included: [
      "Shoot concept and creative direction",
      "Photography coordination",
      "Reel and short form video editing",
      "Product and lifestyle content",
      "Graphic design and static creatives"
    ],
    bestFor:"Brands that need a content library that looks intentional, aesthetic, and completely theirs.",
    video: "/services/IMG_5331.webm",
  },
  {
    num: "(004)",
    title: "AI Generated Videos",
    desc: "High quality video. Without the production timeline.",
    extendedDesc: "AI video is not the future. It is right now. We create AI based videos for brand storytelling, product showcases, and social first content. The quality is real. The turnaround is fast. The content performs.",
    included: [
      "AI video concept and scripting",
      "Brand aligned visual direction",
      "Social ready edits for Reels, Shorts, and Stories",
      "Product and campaign video content",
      "Multiple format outputs"
    ],
    bestFor:"Brands that want video content at scale without the time and cost of traditional production.",
    video: "/services/ai-gen.webm",
  },
  {
    num: "(005)",
    title: "Web Design and Development",
    desc: "Your website should work as hard as you do.",
    extendedDesc: "A beautiful brand with a slow, confusing website loses sales every single day. We design and build sites that are clean, fast, mobile first, and built to convert. Designed to reflect your brand and do the selling while you are off the clock.",
    included: [
      "UX planning and site architecture",
      "Website design",
      "Frontend development",
      "Mobile optimisation",
      "Post launch support"
    ],
    bestFor:" Founders who need a site that looks sharp, loads fast, and actually performs.",
    img: "/services/web design and development .webp",
  },
  {
    num: "(006)",
    title: "Brand Identity",
    desc: "Before you can show up consistently, you need to know exactly what you look like.",
    extendedDesc: "We build brand identities that are distinctive, purposeful, and built to last. Not a logo picked in an afternoon. A proper system that you and your team can use across every platform and every touchpoint.",
    included: [
      "Logo design and brand mark",
      "Colour palette and typography system",
      "Brand tone of voice guide",
      "Brand guidelines document",
      "Social media visual templates"
    ],
    bestFor: "New brands launching properly or existing brands ready for a real glow up.",
    img: "/services/brand identity .webp",
  },
  {
    num: "(007)",
    title: "Founder Led Marketing",
    desc: "You are not just the CEO. You are the brand.",
    extendedDesc: "The most underused marketing asset at any founder led company is the founder. Your story, your perspective, your presence on LinkedIn and Instagram builds trust faster than any ad campaign. We write, we post, we position. You grow.",
    included: [
      "Monthly LinkedIn content strategy",
      "Caption writing and post scheduling",
      "Instagram content support",
      "Personal positioning and narrative development",
      "Monthly performance review"
    ],
    bestFor:"Founders who want to be known and not just their company.",
    video: "/services/founder-led.webm",
  },
];

export const ServicesSection = ({ isHome = false }: { isHome?: boolean }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestIdx = 0;
      let minDistance = Infinity;
      const centerY = window.innerHeight / 2;

      rowRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - centerY);
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = index;
          }
        }
      });

      setActiveIdx((prevIdx) => (prevIdx !== closestIdx ? closestIdx : prevIdx));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger immediately on mount to set initial active item
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── PP Neue Montreal import ── */
        @import url("https://fonts.cdnfonts.com/css/pp-neue-montreal");

        /* ── Services section wrapper ── */
        .svc-section {
          background-color: #f7f2e6;
          color: #576E47;
          width: 100%;
          padding: 0 6% 160px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        /* ── Top bar: (Services) label + dot + CTA ── */
        .svc-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 80px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(87,110,71,0.2);
          gap: 1rem;
          flex-wrap: wrap;
        }
        .svc-top-label {
          font-family: "PP Neue Montreal", sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #576E47;
          opacity: 0.7;
          line-height: 1;
        }
        .svc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #576E47;
          flex-shrink: 0;
        }
        .svc-cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          padding: 0.5rem 1.5rem;
          border-radius: 999px;
          font-family: "PP Neue Montreal", sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #f7f2e6;
          background-color: #576E47;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .svc-cta-btn:hover {
          background-color: #3d5234;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(87,110,71,0.3);
        }

        /* ── Service Grid: left list + right sticky image ── */
        .svc-grid {
          display: flex;
          align-items: flex-start;
          gap: 0;
          margin-top: 0;
        }

        /* LEFT: list of service rows */
        .svc-list {
          flex: 1 1 0%;
          min-width: 0;
        }

        /* RIGHT: sticky image + description panel */
        .svc-media {
          width: 38%;
          flex-shrink: 0;
          position: sticky;
          top: 12vh;
          padding-top: var(--svc-pad-top, 2rem);
          padding-left: 6%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          transition: padding-top 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .svc-media-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
        }
        .svc-media-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.45s ease, transform 0.55s cubic-bezier(0.25,1,0.5,1);
          transform: scale(1.04);
        }
        .svc-media-img-wrap img.svc-img-in {
          opacity: 1;
          transform: scale(1);
        }
        .svc-media-img-wrap img.svc-img-out {
          opacity: 0;
          transform: scale(1.08);
        }
        .svc-media-desc {
          margin-top: 2.5rem;
          font-family: "PP Neue Montreal", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.55;
          color: #576E47;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        /* Each service row */
        .svc-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(87,110,71,0.2);
          cursor: pointer;
          position: relative;
          transition: padding 0.35s cubic-bezier(0.25,1,0.5,1);
        }
        .svc-row:first-child {
          border-top: 1px solid rgba(87,110,71,0.2);
        }
        .svc-row:hover,
        .svc-row.svc-row--active {
          padding: 2.5rem 0;
        }

        .svc-row-num {
          font-family: "PP Neue Montreal", sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #576E47;
          opacity: 0.55;
          width: 4.5rem;
          flex-shrink: 0;
          transition: opacity 0.25s ease;
        }
        .svc-row:hover .svc-row-num,
        .svc-row.svc-row--active .svc-row-num {
          opacity: 1;
        }

        .svc-row-title {
          flex: 1;
          font-family: "PP Neue Montreal", sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.8rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.05;
          color: #576E47;
          opacity: 0.45;
          transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.25,1,0.5,1);
        }
        .svc-row:hover .svc-row-title,
        .svc-row.svc-row--active .svc-row-title {
          opacity: 1;
          transform: translateX(0.5rem);
        }

        /* Mobile layout */
        @media (max-width: 768px) {
          .svc-section {
            padding-left: 5%;
            padding-right: 5%;
            padding-bottom: 80px;
          }
          .svc-grid {
            flex-direction: column;
          }
          .svc-media {
            display: none !important;
          }
          .svc-row-title {
            font-size: clamp(1.4rem, 6vw, 2rem);
          }
          .svc-top-bar {
            padding-top: 48px;
            padding-bottom: 40px;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      <div className="svc-section">
        {/* Top bar containing label, heading, and button in a single row */}
        <div className="svc-top-bar flex flex-row items-center justify-between w-full">
          <div className="flex-1"></div>
          
          <div className="flex flex-col items-center shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-['Gilda_Display'] text-[#526855]">Here is what we do</h2>
            <p className="text-[#526855]/85 text-center text-sm md:text-base mt-2">
              Sharp work. Real results. No filler.
            </p>
          </div>

          <div className="flex-1 flex justify-end">
          </div>
        </div>

        {/* Grid: list left, media right */}
        <div className="svc-grid">
          {/* LEFT — service rows */}
          <div className="svc-list">
            {serviceItems.map((item, idx) => {
              const isExpanded = expandedIdx === idx;
              return (
                <div
                  key={idx}
                  ref={(el) => { rowRefs.current[idx] = el; }}
                  className={`svc-row flex flex-col items-start ${activeIdx === idx ? "svc-row--active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center flex-1">
                      <span className="svc-row-num">{item.num}</span>
                      <span className="svc-row-title">{item.title}</span>
                    </div>
                    {/* Expand Button */}
                    {!isHome && (
                      <button
                        type="button"
                        className="relative z-30 ml-4 p-2 flex items-center justify-center rounded-full border border-[#576E47]/20 hover:border-[#576E47]/60 hover:bg-[#576E47]/5 transition-all duration-300 pointer-events-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIdx((prev) => (prev === idx ? null : idx));
                        }}
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                      >
                        <svg
                          className={`w-4 h-4 text-[#576E47] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && item.extendedDesc && (
                    <div className="mt-6 text-[#576E47] text-sm md:text-base leading-relaxed pl-[4.5rem] w-full font-sans font-normal animate-fadeIn">
                      <p className="mb-6 opacity-90 text-justify max-w-2xl">
                        {item.extendedDesc}
                      </p>
                      
                      {item.included && item.included.length > 0 && (
                        <>
                          <div className="mb-4 font-semibold text-xs tracking-wider uppercase opacity-75 font-['PP_Neue_Montreal']">
                            What is Included
                          </div>
                          
                          <ul className="space-y-3 font-light text-[#576E47]/90 max-w-2xl">
                            {item.included.map((inc, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="opacity-60">—</span>
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.bestFor && (
                        <div className="mt-6 p-4 bg-[#576E47]/5 border-l-2 border-[#576E47] rounded-r text-sm font-medium italic text-[#576E47]/90 max-w-2xl">
                          <span className="font-semibold not-italic">Best for:</span> {item.bestFor}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT — sticky image + desc */}
          <div 
            className="svc-media" 
            style={{ 
              display: "flex", 
              flexDirection: "column",
              "--svc-pad-top": `${activeIdx * 4.5 + 2}rem`
            } as React.CSSProperties}
          >
            <div className="svc-media-img-wrap" style={{ order: activeIdx === 0 ? 2 : 1 }}>
              {serviceItems.map((item, idx) => {
                const commonStyle: React.CSSProperties = {
                    position: idx === 0 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: idx === 0 ? "cover" : "contain",
                    transition: "opacity 0.45s ease, transform 0.55s cubic-bezier(0.25,1,0.5,1)",
                    opacity: activeIdx === idx ? 1 : 0,
                    transform: activeIdx === idx ? (idx === 0 ? "scale(1)" : (idx === 6 ? "scale(0.95)" : "scale(0.85)")) : "scale(1.08)",
                    paddingBottom: idx === 0 ? "1.5rem" : undefined,
                    paddingTop: (idx === 5) ? "2rem" : (idx === 6 ? "1rem" : undefined),
                };

                if (item.video) {
                  return (
                    <video
                      key={idx}
                      src={item.video}
                      className={activeIdx === idx ? "svc-img-in" : "svc-img-out"}
                      style={commonStyle}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  );
                }

                return (
                  <img
                    key={idx}
                    src={item.img}
                    alt={item.title}
                    className={activeIdx === idx ? "svc-img-in" : "svc-img-out"}
                    style={commonStyle}
                  />
                );
              })}
            </div>
            <p
              className="svc-media-desc"
              style={{
                order: activeIdx === 0 ? 1 : 2,
                marginTop: activeIdx === 0 ? 0 : "2.5rem",
                marginBottom: activeIdx === 0 ? "2.5rem" : 0
              }}
            >
              {serviceItems[activeIdx].desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
