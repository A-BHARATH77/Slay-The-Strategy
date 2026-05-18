'use client';
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Project {
  id: number;
  title: string;
  category: string;
  director: string;
  company: string;
  platform: string;
  image: string;
  span?: number;
  portrait?: boolean;
  video?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hacks",
    category: "Narrative",
    director: "Lucia Aniello",
    company: "Universal TV",
    platform: "Max",
    image: "/Work1/painting_03.jpg",
    span: 6
  },
  {
    id: 2,
    title: "Chef's Table",
    category: "Documentary",
    director: "David Gelb",
    company: "Boardwalk Pictures",
    platform: "Netflix",
    image: "/Work1/painting_01.jpg",
    span: 6
  },
  {
    id: 3,
    title: "Sorry For Your Loss",
    category: "Narrative",
    director: "James Ponsoldt",
    company: "Big Beach",
    platform: "Facebook Watch",
    image: "/Work2/mahru_01.jpg",
    span: 3,
    portrait: true
  },
  {
    id: 4,
    title: "American Vandal",
    category: "Narrative",
    director: "Tony Yacenda",
    company: "CBS Studios",
    platform: "Netflix",
    image: "/Work2/mahru_02.jpg",
    span: 3,
    portrait: true
  },
  {
    id: 5,
    title: "Permission",
    category: "Narrative",
    director: "Brian Crano",
    company: "Ball & Chain",
    platform: "Tribeca",
    image: "/Work2/mahru_03.jpg",
    span: 3,
    portrait: true
  },
  {
    id: 13,
    title: "Alayah",
    category: "Narrative",
    director: "Aniqah",
    company: "Slay",
    platform: "Campaign",
    image: "/Work2/mahru_04.jpg",
    span: 3,
    portrait: true
  },
  {
    id: 6,
    title: "Starbucks",
    category: "Commercial",
    director: "Autumn de Wilde",
    company: "Anonymous Content",
    platform: "Broadcast",
    image: "/Work3/work_06.png",
    span: 4
  },
  {
    id: 7,
    title: "Buffalo Wild Wings",
    category: "Commercial",
    director: "Wayne McClammy",
    company: "O Positive",
    platform: "Broadcast",
    image: "/Work3/nails.jpg",
    span: 8
  },
  {
    id: 8,
    title: "Papa Johns",
    category: "Commercial",
    director: "DGA",
    company: "RadicalMedia",
    platform: "Web",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200",
    span: 3,
    video: "/Work4/reel_01.mp4",
    portrait: true
  },
  {
    id: 9,
    title: "Ruffles",
    category: "Commercial",
    director: "Harold Einstein",
    company: "Dummy",
    platform: "Broadcast",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800",
    span: 3,
    video: "/Work4/reel_02.mp4",
    portrait: true
  },
  {
    id: 10,
    title: "McDonald's",
    category: "Commercial",
    director: "M. Blash",
    company: "The Directors Bureau",
    platform: "Global",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
    span: 3,
    video: "/Work4/reel_03.mp4",
    portrait: true
  },
  {
    id: 14,
    title: "Nike",
    category: "Commercial",
    director: "Autumn de Wilde",
    company: "RadicalMedia",
    platform: "Web",
    image: "/Work4/reel_03.mp4",
    span: 3,
    video: "/Work4/reel_04.mp4",
    portrait: true
  },
  {
    id: 11,
    title: "Dog Food",
    category: "Narrative",
    director: "Brian Crano",
    company: "Sundance",
    platform: "Short",
    image: "Work5/carousel_01.jpg",
    span: 6
  },
  {
    id: 12,
    title: "Happily",
    category: "Narrative",
    director: "BenDavid Grabinski",
    company: "Saban Films",
    platform: "VOD",
    image: "Work5/first-copy.jpg",
    span: 6
  },
  {
    id: 15,
    title: "Campaign 01",
    category: "Commercial",
    director: "Slay",
    company: "Strategy",
    platform: "Reel",
    image: "",
    video: "/CampaignReels/campaign_01.mp4",
    span: 4,
    portrait: true
  },
  {
    id: 16,
    title: "Campaign 02",
    category: "Commercial",
    director: "Slay",
    company: "Strategy",
    platform: "Reel",
    image: "",
    video: "/CampaignReels/campaign_02.mp4",
    span: 4,
    portrait: true
  },
  {
    id: 17,
    title: "Campaign 03",
    category: "Commercial",
    director: "Slay",
    company: "Strategy",
    platform: "Reel",
    image: "",
    video: "/CampaignReels/campaign_03.mp4",
    span: 4,
    portrait: true
  }
];

export default function Work() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  const filteredProjects = filterCategory
    ? projects.filter(p => p.category === filterCategory)
    : projects;

  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.to('.work-reveal-word', {
      y: '0%',
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.1,
    });
    gsap.fromTo(".text", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  });

  useEffect(() => {
    // Re-run the fade-in for dynamic list/grid elements when state changes
    gsap.fromTo(".text", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [view, filterCategory]);

  return (
    <div className="work-root">
      <style dangerouslySetInnerHTML={{
        __html: `
        .work-root {
          background-color: #f7f2e6;
          color: #516856;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
          padding-bottom: 8rem;
          padding-top:88px;   
          margin-top:0;    
          user-select: none;
        }

        /* Hero Section */
        .work-hero {
          padding: 0 2.5rem 0;  /* REMOVED top padding to pull title up, kept bottom at 0 */
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .hero-title-container {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 0;
          padding-top:150px;
          margin-bottom: -27vw; /* Pulls subsequent elements up to close the visual gap */
        }

        .hero-title {
          font-size: 16vw;
          font-weight: 900;
          line-height: 0.6;      /* Adjusted from 0.4 to prevent clipping */
          letter-spacing: -0.04em;
          margin: 0;
          display: flex;
          align-items: flex-start;
        }

        .work-reveal-wrap {
          overflow: hidden;
          display: inline-block;
          padding-top: 0.2em;
          padding-bottom: 0.2em;
          margin-top: -0.2em;
          margin-bottom: -0.2em;
        }
        .work-reveal-word {
          display: inline-block;
          will-change: transform, opacity;
          transform: translateY(150%);
          opacity: 0;
        }

        .text {
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-sup {
          font-size: 2rem;
          font-weight: 400;
          margin-left: 1rem;
          vertical-align: super;
        }

        .view-toggle {
          position: absolute;
          right: 2.5rem;
          top: 1rem;
          display: flex;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .view-toggle span {
          opacity: 0.4;
          transition: opacity 0.2s;
        }

        .view-toggle span.active {
          opacity: 1;
        }

        .filter-row {
          position: absolute;
          right: 2.5rem;
          top: 2.5rem;
          display: flex;
          justify-content: flex-end;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .filter-btn {
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
          padding: 0;
          line-height: 1;
        }

        /* Filter Panel */
        .filter-panel {
          max-width: 1600px;
          margin: 0 auto 1rem;
          padding: 1rem 2.5rem;
          display: flex;
          gap: 1.5rem;
          border-bottom: 1px solid rgba(81, 104, 86, 0.2);
        }

        .filter-pill {
          padding: 0.4rem 1rem;
          border: 1px solid #516856;
          border-radius: 20px;
          font-size: 0.75rem;
          text-transform: uppercase;
          cursor: pointer;
          background: transparent;
          color: #516856;
          transition: all 0.2s;
        }

        .filter-pill.active {
          background: #516856;
          color: #f7f2e6;
        }

        /* Work Grid */
        .work-grid {
          width: 100%;
          margin: 0;
          margin-top: -5vw !important;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 0;
          border-top: 1px solid #516856;
          border-bottom: 1px solid #516856;
        }

        @media (max-width: 1024px) {
          .work-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .project-tile {
          display: flex;
          flex-direction: column;
          border-right: 1px solid #516856;
          border-bottom: 1px solid #516856;
        }

        .project-tile:nth-child(2),
        .project-tile:nth-child(6),
        .project-tile:nth-child(8),
        .project-tile:nth-child(12),
        .project-tile:nth-child(14) {
          border-right: none;
        }

        .project-tile.span-3 { grid-column: span 3; }
        .project-tile.span-4 { grid-column: span 4; }
        .project-tile.span-6 { grid-column: span 6; }
        .project-tile.span-8 { grid-column: span 8; }

        @media (max-width: 1024px) {
          .project-tile.span-3, .project-tile.span-4, .project-tile.span-6, .project-tile.span-8 {
            grid-column: span 1;
            border-right: none;
          }
        }

        .tile-image-container {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #e0e0e0;
          position: relative;
        }

        @keyframes smoothImageReveal {
          from { opacity: 0; transform: scale(1.05); filter: blur(5px); }
          to { opacity: 1; transform: scale(1); filter: blur(0px); }
        }

        .tile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          animation: smoothImageReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .project-tile:hover .tile-image {
          transform: scale(1.05);
        }

        .tile-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 1rem 1rem 0.2rem;
        }

        .tile-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .project-tile:hover .tile-title {
          text-decoration: underline;
        }

        .tile-category {
          font-size: 0.65rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        .tile-meta {
          font-size: 0.75rem;
          padding: 0 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          letter-spacing: 0.03em;
        }

        /* List View */
        .work-list {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2.5rem 6rem;
        }

        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .list-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .list-item:hover .list-title {
          text-decoration: underline;
        }

        .list-meta {
          display: flex;
          gap: 4rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Location Banner */
        .location-banner {
          max-width: 1600px;
          margin: 0 auto 8rem;
          padding: 4rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #516856;
          border-bottom: 1px solid #516856;
        }

        .location-banner-text {
          font-size: 10vw;
          font-weight: 200;
          letter-spacing: -0.03em;
          margin: 0 auto;
          line-height: 1;
        }

        .flank-plus {
          font-size: 2rem;
          font-weight: 300;
        }

        /* Archived Section */

        /* ── Mobile responsive ── */
        @media (max-width: 768px) {
          .work-root {
            padding-top: 70px;
            padding-bottom: 4rem;
          }

          .work-hero {
            padding: 0 1.2rem 0;
          }

          .hero-title-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            padding-top: 60px;
            margin-bottom: 0;       /* remove the large negative pull — not needed on mobile */
          }

          .hero-title {
            font-size: 22vw;        /* readable on small screens */
            line-height: 0.85;
          }

          .view-toggle {
            position: static;       /* remove absolute positioning so it doesn't overlap */
            margin-top: 0.5rem;
          }

          .filter-row {
            position: static;
            margin-top: 0.8rem;
            justify-content: flex-start;
          }

          .work-grid {
            margin-top: 2rem !important;   /* remove the negative-margin trick on mobile */
          }

          .filter-panel {
            flex-wrap: wrap;
            padding: 1rem 1.2rem;
          }

          .tile-title {
            font-size: 1.1rem;
          }

          .list-title {
            font-size: 1.4rem;
          }

          .list-meta {
            flex-direction: column;
            gap: 0.3rem;
            font-size: 0.75rem;
          }

          .list-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
          }

          .work-list {
            padding: 0 1.2rem 4rem;
          }

          .location-banner {
            flex-direction: column;
            gap: 1rem;
            padding: 2rem 1.2rem;
            margin-bottom: 4rem;
          }

          .location-banner-text {
            font-size: 15vw;
            text-align: center;
          }

          .flank-plus {
            display: none;
          }
        }

      `}} />

      {/* Hero Section */}
      <section className="work-hero" ref={heroRef}>
        <div className="hero-title-container">
          <h1 className="hero-title">
            <span className="work-reveal-wrap">
              <span className="work-reveal-word">Work</span>
            </span>
            <span className="hero-sup"></span>
          </h1>
          <div className="view-toggle text">
            Views <span className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')}>1</span>|
            <span className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}>2</span>
          </div>
        </div>
        <div className="filter-row text">
          <div className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
            Filters {showFilters ? '-' : '+'}
          </div>
        </div>
      </section>

      {/* Filter Panel */}
      {showFilters && (
        <div className="filter-panel text">
          <button className={`filter-pill ${filterCategory === null ? 'active' : ''}`} onClick={() => setFilterCategory(null)}>All</button>
          <button className={`filter-pill ${filterCategory === 'Narrative' ? 'active' : ''}`} onClick={() => setFilterCategory('Narrative')}>Narrative</button>
          <button className={`filter-pill ${filterCategory === 'Commercial' ? 'active' : ''}`} onClick={() => setFilterCategory('Commercial')}>Commercial</button>
          <button className={`filter-pill ${filterCategory === 'Documentary' ? 'active' : ''}`} onClick={() => setFilterCategory('Documentary')}>Documentary</button>
        </div>
      )}

      {/* Work Grid / List Content */}
      {view === 'grid' ? (
        <section className="work-grid">
          {filteredProjects.map((p) => (
            <div key={p.id} className={`project-tile span-${p.span}`}>
              <div className="tile-image-container" style={
                [15, 16, 17].includes(p.id)
                  ? { height: 'calc(100vh - 120px)', backgroundColor: 'transparent' }
                  : p.portrait || p.id === 7 || p.id === 6
                    ? { aspectRatio: p.id === 7 ? '16 / 10' : p.id === 6 ? '4 / 5' : '3 / 4', backgroundColor: 'transparent' }
                    : {}
              }>
                {p.video ? (
                  <video
                    muted
                    loop
                    webkit-playsinline="true"
                    playsInline
                    src={p.video}
                    autoPlay
                    className="tile-image"
                    style={p.portrait ? { objectFit: 'cover' } : { objectFit: 'cover' }}
                  />
                ) : (
                  <>
                    {p.id === 7 && (
                      <img
                        draggable="false"
                        src={p.image}
                        alt=""
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'blur(12px) brightness(0.8)',
                          transform: 'scale(1.1)',
                          opacity: 0.8
                        }}
                      />
                    )}
                    <img
                      draggable="false"
                      src={p.image}
                      alt={p.title}
                      className="tile-image"
                      loading="lazy"
                      style={p.portrait || p.id === 7 ? {
                        objectFit: 'contain',
                        padding: p.id === 7 ? '1.5rem' : undefined,
                        position: p.id === 7 ? 'relative' : undefined,
                        zIndex: p.id === 7 ? 2 : undefined
                      } : {}}
                    />
                  </>
                )}
              </div>
              <div className="tile-header text">
                <h3 className="tile-title">{p.title}</h3>
                <span className="tile-category">{p.category}</span>
              </div>
              <div className="tile-meta text">
                <span>Created by: {p.director}</span>
                <span>Streamer: {p.platform}</span>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="work-list">
          {filteredProjects.map((p) => (
            <div key={p.id} className="list-item">
              <h3 className="list-title text">{p.title}</h3>
              <div className="list-meta text">
                <span>{p.category}</span>
                <span>{p.director}</span>
                <span>{p.platform}</span>
              </div>
            </div>
          ))}
        </section>
      )}

    </div>
  );
}
