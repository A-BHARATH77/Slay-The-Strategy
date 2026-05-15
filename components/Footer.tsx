'use client';
// @ts-nocheck
import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marqueeRightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .custom-footer {
          background-color: #516856;
          color: #e4e1d6;
          font-family: inherit;
          padding-top: 4rem;
          padding-bottom: 2rem;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .footer-marquee-container {
          display: flex;
          width: 200%;
          animation: marqueeRightToLeft 20s linear infinite;
          white-space: nowrap;
          font-size: 16vw;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8rem;
          user-select: none;
        }
        @media (max-width: 768px) {
          .footer-marquee-container {
            font-size: 18vw;
            margin-bottom: 3rem;
          }
        }
        .footer-marquee-item {
          padding-right: 5vw;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto auto;
          justify-content: space-between;
          gap: 6rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
          flex-grow: 1;
          align-items: start;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 680px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 0 1.5rem;
          }
        }
        .footer-col-left h2 {
          font-size: 3.5rem;
          font-family: 'Montserrat', sans-serif;
          margin-top: 0;
          margin-bottom: 1rem;
          font-weight: normal;
          line-height: 1.1;
        }
        @media (max-width: 680px) {
          .footer-col-left h2 {
            font-size: 2.5rem;
          }
        }
        .footer-col-left .phone-link {
          font-size: 1.25rem;
          text-decoration: none;
          color: #e4e1d6;
          display: inline-block;
          margin-bottom: 2rem;
          transition: opacity 0.2s ease;
        }
        @media (max-width: 680px) {
          .footer-col-left .phone-link {
            margin-bottom: 1.5rem;
          }
        }
        .footer-col-left .phone-link:hover {
          opacity: 0.8;
        }
        .footer-col-left .based-in {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          opacity: 0.7;
        }
        .footer-col-meta .meta-label {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-top: 0;
          margin-bottom: 0.75rem;
        }
        .footer-col-meta .meta-val {
          font-size: 1.25rem;
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 2.5rem;
          text-decoration: none;
          color: #e4e1d6;
          display: inline-block;
          transition: opacity 0.2s ease;
        }
        .footer-col-meta .meta-val:hover {
          opacity: 0.8;
        }
        .footer-col-links .quick-link {
          font-size: 1.25rem;
          font-family: 'Times New Roman', Times, serif;
          margin-bottom: 1.25rem;
          text-decoration: none;
          color: #e4e1d6;
          display: block;
          transition: opacity 0.2s ease;
        }
        .footer-col-links .quick-link:hover {
          opacity: 0.8;
        }
        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 2.5rem 3rem 0;
          border-top: 1px solid rgba(228, 225, 214, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .footer-bottom {
            margin-top: 3rem;
            padding: 2rem 1.5rem 0;
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
        }
        .footer-bottom a {
          color: #e4e1d6;
          text-decoration: none;
          margin-left: 1.5rem;
          transition: opacity 0.2s ease;
        }
        @media (max-width: 768px) {
          .footer-bottom a {
            margin: 0 0.75rem;
          }
        }
        .footer-bottom a:hover {
          opacity: 0.8;
        }
        .back-to-top-dot {
          width: 32px;
          height: 32px;
          background-color: #111;
          color: #e4e1d6;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }
        .back-to-top-dot:hover {
          transform: scale(1.1);
        }
      `}} />

      <section className="custom-footer">
        <div className="footer-marquee-container">
          <div className="footer-marquee-item">slay the strategy</div>
          <div className="footer-marquee-item">slay the strategy</div>
          <div className="footer-marquee-item">slay the strategy</div>
          <div className="footer-marquee-item">slay the strategy</div>
        </div>

        <div className="footer-grid">
          <div className="footer-col-left">
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ color: '#e4e1d6' }}>Lets build an empire</h2>
              <a href="tel:+916364281117" className="phone-link" style={{ marginBottom: 0 }}>+91 63642 81117 &rarr;</a>
            </div>
            <div className="based-in">BASED IN INDIA</div>
          </div>

          <div className="footer-col-meta" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <div className="meta-label">EMAIL</div>
              <a href="mailto:dipani@slaywithstrategy.com" className="meta-val" style={{ marginBottom: 0 }}>dipani@slaywithstrategy.com</a>
            </div>
            <div>
              <div className="meta-label">SOCIALS</div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="meta-val" style={{ marginBottom: 0 }}>Instagram &nearr;</a>
            </div>
          </div>

          <div className="footer-col-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="meta-label" style={{ marginBottom: '0.5rem' }}>QUICK LINKS</div>
            <a href="/expertises" className="quick-link" style={{ marginBottom: 0 }}>Services</a>
            <a href="/work" className="quick-link" style={{ marginBottom: 0 }}>Studio</a>
            <a href="/about" className="quick-link" style={{ marginBottom: 0 }}>Insights</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div>&copy; 2026 Slay The Strategy&trade; All rights reserved.</div>
          </div>
          <div>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </section>

      <section className="mwg_effect020">
        <div className="mwg_effect020-css w-embed">
          <style dangerouslySetInnerHTML={{ __html: "\n                .mwg_effect020 img {\n                    width: 15vw;\n                    position: absolute;\n                    object-fit: cover;\n                    z-index: 5;\n                    pointer-events: none;\n                }\n\n                .mwg_effect020 .medias img {\n                    width: 1px;\n                    height: 1px;\n                    top: 0;\n                    left: 0;\n                    position: absolute;\n                    visibility: hidden;\n                    pointer-events: none;\n                }\n            " }} />
        </div>
        <div className="medias">
          <img draggable="false" src="/logo.jpeg" loading="lazy" alt="SWS logo" style={{ height: '80px', width: 'auto' }} />
          <img draggable="false" src="/logo.jpeg" loading="lazy" alt="SWS logo" style={{ height: '80px', width: 'auto' }} />
          <img draggable="false" src="/logo.jpeg" loading="lazy" alt="SWS logo" style={{ height: '80px', width: 'auto' }} />
          <img draggable="false" src="/logo.jpeg" loading="lazy" alt="SWS logo" style={{ height: '80px', width: 'auto' }} />
        </div>
      </section>
    </div>
  );
}
