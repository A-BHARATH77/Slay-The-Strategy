"use client";
import React, { useState, useEffect, useRef } from "react";

const serviceItems = [
  {
    num: "(001)",
    title: "Web Design",
    desc: "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    img: "https://cdn.prod.website-files.com/699b6466d5f19893993a4bf2/699b6466d5f19893993a4fa1_Scene%20%239.webp",
  },
  {
    num: "(002)",
    title: "Social Media",
    desc: "We create scroll-stopping social content designed to build brand presence and drive engagement.",
    img: "https://cdn.prod.website-files.com/699b6466d5f19893993a4bf2/699b6466d5f19893993a4f9b_Scene%20%235.webp",
  },
  {
    num: "(003)",
    title: "Development",
    desc: "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    img: "https://cdn.prod.website-files.com/699b6466d5f19893993a4bf2/699b6466d5f19893993a4f99_Scene%20%2310%20(Light).webp",
  },
  {
    num: "(004)",
    title: "Brand Identity",
    desc: "We craft cohesive brand identities that communicate purpose, personality, and credibility.",
    img: "https://cdn.prod.website-files.com/699b6466d5f19893993a4bf2/699b6466d5f19893993a4fbf_Scene%20%238.webp",
  },
  {
    num: "(005)",
    title: "Marketing",
    desc: "We develop strategic marketing assets that amplify brand reach and support growth.",
    img: "https://cdn.prod.website-files.com/699b6466d5f19893993a4bf2/699b6466d5f19893993a4f9a_Scene%2018.webp",
  },
];

export const ServicesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
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
          padding: 0.7rem 2rem;
          border-radius: 999px;
          font-family: "PP Neue Montreal", sans-serif;
          font-size: 0.85rem;
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
          padding-top: 10rem;
          padding-left: 6%;
          box-sizing: border-box;
        }
        .svc-media-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 1rem;
          overflow: hidden;
          background: rgba(87,110,71,0.08);
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
          align-items: center;
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
            width: 100%;
            position: relative;
            top: auto;
            padding-left: 0;
            padding-top: 2rem;
            order: -1;
          }
          .svc-row-title {
            font-size: clamp(1.4rem, 6vw, 2rem);
          }
          .svc-top-bar {
            padding-top: 48px;
            padding-bottom: 40px;
          }
        }
      `}</style>

      <div className="svc-section">
        {/* Top bar */}
        <div className="svc-top-bar">
          <p className="svc-top-label">(Services)</p>
          <div className="svc-dot" />
          <a href="/contact" className="relative inline-flex items-center gap-2 px-10 py-4 bg-[#526855] text-[#f7f2e6] font-light rounded-full !shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:!shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:!-translate-y-2 hover:scale-[1.02] transform transition-all duration-500 ease-out group font-['Gilda_Display']">
            Get started
          </a>
        </div>

        {/* Grid: list left, media right */}
        <div className="svc-grid">
          {/* LEFT — service rows */}
          <div className="svc-list">
            {serviceItems.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => { rowRefs.current[idx] = el; }}
                className={`svc-row${activeIdx === idx ? " svc-row--active" : ""}`}
              >
                <span className="svc-row-num">{item.num}</span>
                <span className="svc-row-title">{item.title}</span>

              </div>
            ))}
          </div>

          {/* RIGHT — sticky image + desc */}
          <div className="svc-media" style={{ display: "flex", flexDirection: "column" }}>
            <div className="svc-media-img-wrap" style={{ order: activeIdx === 0 ? 2 : 1 }}>
              {serviceItems.map((item, idx) => (
                <img
                  key={idx}
                  src={item.img}
                  alt={item.title}
                  className={activeIdx === idx ? "svc-img-in" : "svc-img-out"}
                  style={{
                    position: idx === 0 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: idx === 0 ? "cover" : "contain",
                    transition: "opacity 0.45s ease, transform 0.55s cubic-bezier(0.25,1,0.5,1)",
                    opacity: activeIdx === idx ? 1 : 0,
                    transform: activeIdx === idx ? (idx === 0 ? "scale(1)" : "scale(0.85)") : "scale(1.08)",
                  }}
                />
              ))}
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
