'use client';
// @ts-nocheck
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="nav" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999, backgroundColor: 'transparent' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Override Webflow's scroll animation and background */
        .nav {
          transform: none !important;
          transition: none !important;
          background-color: transparent !important;
          pointer-events: none; /* Let clicks pass through empty areas */
        }
        
        .navbar {
          transform: none !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          background-color: transparent !important;
          position: relative !important;
          width: 100% !important;
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          pointer-events: auto; /* Re-enable clicks for navbar content */
        }
        
        .nav_logo {
          transform: none !important;
          position: relative;
          z-index: 10;
        }

        /* Center the 4 options perfectly */
        .navbar_menu {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          position: absolute !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          background-color: transparent !important;
          width: auto !important;
          height: auto !important;
        }
        
        .navbar_menu .button-color-swoosh.is-menu {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
          font-size: 1.1rem;
          margin: 0 !important;
          background-color: transparent !important;
        }

        .navbar_menu .button-color-swoosh_text {
          color: var(--foreground, #000000) !important;
        }

        /* Hide mobile triggers and backgrounds */
        .navbar_menu-bg, 
        .navbar_menu-bg-back, 
        .navbar_menu-trigger {
          display: none !important;
        }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .navbar_menu {
            position: static !important;
            transform: none !important;
            flex-wrap: wrap;
            justify-content: flex-end !important;
          }
          .navbar_menu .button-color-swoosh.is-menu {
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1rem;
          }
        }
      `}} />
      <div className="navbar">
        <a aria-label="Home link" role="Link" href="/" aria-current="page" className={`nav_logo w-inline-block ${pathname === '/' ? 'w--current' : ''}`}>
          <img draggable="false" src="/logo.png" alt="SWS Logo" style={{ height: '50px', width: 'auto' }} />
        </a>
        <div className="navbar_menu">
          <a aria-label="Expertises link" role="Link" href="/" className={`button-color-swoosh is-menu w-inline-block ${pathname === '/' ? 'w--current' : ''}`}>
            <span className="button-color-swoosh_bg">
              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
            </span>
            <span data-text="Home" className="button-color-swoosh_inner">
              <span className="button-color-swoosh_text">Home</span>
            </span>
          </a>
          <a aria-label="Work link" role="Link" href="/work" className={`button-color-swoosh is-menu w-inline-block ${pathname === '/work' ? 'w--current' : ''}`}>
            <span className="button-color-swoosh_bg">
              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
            </span>
            <span data-text="Work" className="button-color-swoosh_inner">
              <span className="button-color-swoosh_text">Work</span>
            </span>
          </a>
          <a aria-label="Studio link" role="Link" href="/studio" className={`button-color-swoosh is-menu w-inline-block ${pathname === '/studio' ? 'w--current' : ''}`}>
            <span className="button-color-swoosh_bg">
              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
            </span>
            <span data-text="Studio" className="button-color-swoosh_inner">
              <span className="button-color-swoosh_text">Studio</span>
            </span>
          </a>
          <a aria-label="Contact link" role="Link" href="/contact" className={`button-color-swoosh is-menu w-inline-block ${pathname === '/contact' ? 'w--current' : ''}`}>
            <span className="button-color-swoosh_bg">
              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
            </span>
            <span data-text="Contact" className="button-color-swoosh_inner">
              <span className="button-color-swoosh_text">Contact</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
