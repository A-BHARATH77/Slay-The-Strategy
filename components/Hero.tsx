// @ts-nocheck
import React from 'react';

export default function Hero() {
  return (
    <header id="section_hero" className="section_hero" style={{ backgroundColor: '#516856', padding: '8rem 2rem 6rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'left', paddingBottom: '5rem' }}>
        <h1 style={{ 
          fontFamily: 'Georgia, "Times New Roman", serif', 
          fontSize: '4.5rem', 
          lineHeight: '1.1', 
          color: '#f7f2e6', 
          margin: '0 0 1rem 0',
          fontWeight: 'normal',
          maxWidth: '800px'
        }}>
          A members-only<br />home sharing community
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#f7f2e6', 
          margin: 0 
        }}>
          Stay in curated homes for a fraction of the cost.
        </p>
      </div>

      {/* Marquee Section */}
      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative', overflow: 'hidden', height: '400px' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marqueeLeftToRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .marquee-container {
            display: flex;
            width: 200%;
            animation: marqueeLeftToRight 25s linear infinite;
            gap: 20px;
            padding-left: 20px;
          }
          .marquee-item {
            flex: 0 0 auto;
            width: 300px;
            height: 400px;
            border-radius: 12px;
            overflow: hidden;
            background-color: #e0e0e0;
          }
          .marquee-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        `}} />
        <div className="marquee-container">
          {[1, 2].map((group) => (
            <React.Fragment key={group}>
              <div className="marquee-item">
                <img draggable="false" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=600" alt="Home 1" />
              </div>
              <div className="marquee-item">
                <img draggable="false" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400&h=600" alt="Home 2" />
              </div>
              <div className="marquee-item">
                <img draggable="false" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=600" alt="Home 3" />
              </div>
              <div className="marquee-item">
                <img draggable="false" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=600" alt="Home 4" />
              </div>
              <div className="marquee-item">
                <img draggable="false" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400&h=600" alt="Home 5" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
