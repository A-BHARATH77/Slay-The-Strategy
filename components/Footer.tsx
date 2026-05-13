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
          padding-top: 6rem;
          padding-bottom: 3rem;
          overflow: hidden;
          position: relative;
        }
        .footer-marquee-container {
          display: flex;
          width: 200%;
          animation: marqueeRightToLeft 20s linear infinite;
          white-space: nowrap;
          font-size: 15vw;
          font-family: 'Times New Roman', Times, serif;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8rem;
          user-select: none;
        }
        @media (max-width: 768px) {
          .footer-marquee-container {
            font-size: 20vw;
            margin-bottom: 5rem;
          }
        }
        .footer-marquee-item {
          padding-right: 5vw;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
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
          font-family: 'Times New Roman', Times, serif;
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
          margin-bottom: 4rem;
          transition: opacity 0.2s ease;
        }
        @media (max-width: 680px) {
          .footer-col-left .phone-link {
            margin-bottom: 2rem;
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
          margin-bottom: 0.75rem;
        }
        .footer-col-meta .meta-val {
          font-size: 1.1rem;
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
          font-size: 1.1rem;
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
          margin: 8rem auto 0;
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
            margin-top: 5rem;
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
          width: 24px;
          height: 24px;
          background-color: #e4e1d6;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .back-to-top-dot:hover {
          transform: scale(1.2);
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
            <h2>Let&apos;s build an empire.</h2>
            <a href="tel:+916364281117" className="phone-link">+91 63642 81117 &rarr;</a>
            <div className="based-in">BASED IN INDIA</div>
          </div>

          <div className="footer-col-meta">
            <div className="meta-label">EMAIL</div>
            <a href="mailto:dipani@slaywithstrategy.com" className="meta-val">dipani@slaywithstrategy.com</a>

            <div className="meta-label">SOCIALS</div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="meta-val">Instagram &nearr;</a>
          </div>

          <div className="footer-col-links">
            <div className="meta-label">QUICK LINKS</div>
            <a href="/expertises" className="quick-link">Services</a>
            <a href="/work" className="quick-link">Studio</a>
            <a href="/about" className="quick-link">Insights</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 Slay The Strategy&trade; All rights reserved. <a href="#">Website by Raghav &nearr;</a></div>
          <div
            className="back-to-top-dot"
            title="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
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
        <div className="medias"><img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg" loading="lazy" alt="Get Hyped logo blauw" /><img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg" loading="lazy" alt="Get Hyped logo roze" /><img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg" loading="lazy" alt="Get Hyped logo groen" /><img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg" loading="lazy" alt="Get Hyped logo rood" /></div>
      </section>
    </div>
  );
}
