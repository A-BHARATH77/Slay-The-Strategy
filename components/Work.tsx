'use client';
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  director: string;
  company: string;
  platform: string;
  image: string;
  span?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hacks",
    category: "Narrative",
    director: "Lucia Aniello",
    company: "Universal TV",
    platform: "Max",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200",
    span: 6
  },
  {
    id: 2,
    title: "Chef's Table",
    category: "Documentary",
    director: "David Gelb",
    company: "Boardwalk Pictures",
    platform: "Netflix",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    span: 6
  },
  {
    id: 3,
    title: "Sorry For Your Loss",
    category: "Narrative",
    director: "James Ponsoldt",
    company: "Big Beach",
    platform: "Facebook Watch",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    span: 4
  },
  {
    id: 4,
    title: "American Vandal",
    category: "Narrative",
    director: "Tony Yacenda",
    company: "CBS Studios",
    platform: "Netflix",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=1200",
    span: 4
  },
  {
    id: 5,
    title: "Permission",
    category: "Narrative",
    director: "Brian Crano",
    company: "Ball & Chain",
    platform: "Tribeca",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    span: 4
  },
  {
    id: 6,
    title: "Starbucks",
    category: "Commercial",
    director: "Autumn de Wilde",
    company: "Anonymous Content",
    platform: "Broadcast",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    span: 4
  },
  {
    id: 7,
    title: "Buffalo Wild Wings",
    category: "Commercial",
    director: "Wayne McClammy",
    company: "O Positive",
    platform: "Broadcast",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800",
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
    span: 4
  },
  {
    id: 9,
    title: "Ruffles",
    category: "Commercial",
    director: "Harold Einstein",
    company: "Dummy",
    platform: "Broadcast",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800",
    span: 4
  },
  {
    id: 10,
    title: "McDonald's",
    category: "Commercial",
    director: "M. Blash",
    company: "The Directors Bureau",
    platform: "Global",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
    span: 4
  },
  {
    id: 11,
    title: "Dog Food",
    category: "Narrative",
    director: "Brian Crano",
    company: "Sundance",
    platform: "Short",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200",
    span: 6
  },
  {
    id: 12,
    title: "Happily",
    category: "Narrative",
    director: "BenDavid Grabinski",
    company: "Saban Films",
    platform: "VOD",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    span: 6
  }
];

const archivedProjects = [
  { id: 101, title: "Nike Air", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400" },
  { id: 102, title: "Audi Motion", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400" },
  { id: 103, title: "Apple Beats", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400" },
  { id: 104, title: "Vogue Cover", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" },
  { id: 105, title: "Sony Vision", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400" }
];

export default function Work() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  const filteredProjects = filterCategory
    ? projects.filter(p => p.category === filterCategory)
    : projects;

  return (
    <div className="work-root">
      <style dangerouslySetInnerHTML={{
        __html: `
        .work-root {
          background-color: #f7f2e6;
          color: #516856;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
          line-height: 0.4;      /* FURTHER TIGHTENED: to pull the baseline down and remove extra bottom space */
          letter-spacing: -0.04em;
          margin: 0;
          display: flex;
          align-items: flex-start;
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
          cursor: pointer;
          border-right: 1px solid #516856;
          border-bottom: 1px solid #516856;
        }

        .project-tile:nth-child(2),
        .project-tile:nth-child(5),
        .project-tile:nth-child(7),
        .project-tile:nth-child(10),
        .project-tile:nth-child(12) {
          border-right: none;
        }

        .project-tile.span-4 { grid-column: span 4; }
        .project-tile.span-6 { grid-column: span 6; }
        .project-tile.span-8 { grid-column: span 8; }

        @media (max-width: 1024px) {
          .project-tile.span-4, .project-tile.span-6, .project-tile.span-8 {
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

        .tile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
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
          cursor: pointer;
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
        .archived-section {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .archived-header {
          display: flex;
          justify-content: space-between;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .archived-strip {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .archived-tile {
          flex: 0 0 280px;
          cursor: pointer;
        }

        .archived-img {
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          margin-bottom: 0.5rem;
          transition: opacity 0.3s;
        }

        .archived-tile:hover .archived-img {
          opacity: 0.8;
        }

        .archived-title {
          font-size: 0.9rem;
          font-weight: 600;
        }
      `}} />

      {/* Hero Section */}
      <section className="work-hero">
        <div className="hero-title-container">
          <h1 className="hero-title">Work <span className="hero-sup"></span></h1>
          <div className="view-toggle">
            Views <span className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')}>1</span>|
            <span className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}>2</span>
          </div>
        </div>
        <div className="filter-row">
          <div className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
            Filters {showFilters ? '-' : '+'}
          </div>
        </div>
      </section>

      {/* Filter Panel */}
      {showFilters && (
        <div className="filter-panel">
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
              <div className="tile-image-container">
                <img draggable="false" src={p.image} alt={p.title} className="tile-image" loading="lazy" />
              </div>
              <div className="tile-header">
                <h3 className="tile-title">{p.title}</h3>
                <span className="tile-category">{p.category}</span>
              </div>
              <div className="tile-meta">
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
              <h3 className="list-title">{p.title}</h3>
              <div className="list-meta">
                <span>{p.category}</span>
                <span>{p.director}</span>
                <span>{p.platform}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Location Banner */}
      <section className="location-banner">
        <div className="flank-plus">+</div>
        <h2 className="location-banner-text">Slay the Strategy</h2>
        <div className="flank-plus">+</div>
      </section>

      {/* Archived Section */}
      <section className="archived-section">
        <div className="archived-header">
          <div>Archived</div>
          <div>Works</div>
        </div>
        <div className="archived-strip">
          {archivedProjects.map((ap) => (
            <div key={ap.id} className="archived-tile">
              <img draggable="false" src={ap.image} alt={ap.title} className="archived-img" loading="lazy" />
              <div className="archived-title">{ap.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
