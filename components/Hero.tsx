import React from 'react';
import TextReveal from './TextReveal';

export default function Hero() {
  return (
    <header id="section_hero" className="section_hero hero-layout-container" style={{
      backgroundColor: '#f7f2e6',
      overflow: 'clip',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-layout-container {
          padding: 7rem 3rem 0;
        }
        @media (max-width: 768px) {
          .hero-layout-container {
            padding: 4rem 1.5rem 0;
          }
        }
        `
      }} />
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', textAlign: 'left', paddingBottom: '3rem' }}>
        <TextReveal
          tagName="h1"
          text="Slay The Strategy"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: '1.1',
            color: '#516856',
            margin: '0 0 1rem 0',
            fontWeight: 'normal',
            maxWidth: '800px'
          }}
        />
        <TextReveal
          tagName="p"
          text="Where Aesthetic Obession Meets Ruthless Strategy"
          delay={0.5}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#516856',
            margin: 0
          }}
        />
      </div>

      {/* Marquee Section */}
      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative', overflow: 'hidden', height: '50vh', minHeight: '350px' }}>
        <style dangerouslySetInnerHTML={{
          __html: `
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
            height: 50vh;
            min-height: 350px;
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
              {[
                '/HomeCaroussel/first.jpg',
                '/HomeCaroussel/carousel_01.jpg',
                '/HomeCaroussel/painting_03.jpg',
                '/HomeCaroussel/painting_04.jpg',
                '/HomeCaroussel/painting_05.jpg',
                '/HomeCaroussel/painting_06.jpg'
              ].map((src, idx) => (
                <div className="marquee-item" key={`${group}-${idx}`}>
                  <img draggable="false" src={src} alt={`Home ${idx + 1}`} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
