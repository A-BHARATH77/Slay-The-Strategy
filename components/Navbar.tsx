'use client';
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show navbar if scrolling up or at the top
      if (currentScrollY < lastScrollY.current || currentScrollY <= 50) {
        setIsVisible(true);
      } 
      // Hide navbar if scrolling down and passed a threshold
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isVisible ? '' : 'nav--hidden'}`} style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999, backgroundColor: 'transparent' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Override Webflow's scroll animation and background */
        .nav {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
          background-color: transparent !important;
          pointer-events: none; /* Let clicks pass through empty areas */
        }
        
        .nav.nav--hidden {
          transform: translateY(-100%) !important;
        }
        
        .navbar {
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
          padding: 0rem 2rem;
          pointer-events: auto; /* Re-enable clicks for navbar content */
        }
        
        .nav_logo {
          transform: none !important;
          position: relative;
          z-index: 10;
        }

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
          gap: 3rem;
        }
        
        .nav_link {
          font-size: 1.1rem;
          color: var(--foreground, #516856) !important;
          text-decoration: none;
          transition: opacity 0.3s ease;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav_link:hover {
          opacity: 0.7;
        }

        .nav_link.w--current {
          opacity: 1 !important;
          text-decoration: underline !important;
          text-underline-offset: 8px !important;
          text-decoration-thickness: 1px !important;
          pointer-events: none;
        }

        /* Hide mobile triggers and backgrounds */
        .navbar_menu-bg, 
        .navbar_menu-bg-back, 
        .navbar_menu-trigger {
          display: none !important;
        }

        .navbar_right-text {
          text-align: right;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--foreground, #516856);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.8rem;
          color: var(--foreground, #516856);
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .navbar {
            flex-direction: row;
            justify-content: space-between !important;
            padding: 1rem 1.5rem;
          }
          .navbar_menu {
            display: none !important; /* Hide by default on mobile */
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background-color: #f7f2e6 !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 3rem !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            transform: none !important;
            z-index: -1 !important; /* Stays behind logo and button */
          }
          .navbar.menu-open .navbar_menu {
            display: flex !important; /* Show when open */
          }
          .mobile-menu-btn {
            display: block;
            position: relative;
            z-index: 10;
          }
          .nav_logo {
            position: relative !important;
            z-index: 10 !important;
          }
          .navbar_right-text {
            display: none !important;
          }
          .nav_link {
            font-size: 2rem;
          }
        }
      `}} />
      <div className={`navbar ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <a aria-label="Home link" role="Link" href="/" aria-current="page" className={`nav_logo w-inline-block ${pathname === '/' ? 'w--current' : ''}`}>
          <img draggable="false" src="/logo.webp" alt="SWS Logo" style={{ height: '50px', width: 'auto' }} />
        </a>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className="navbar_menu">
          <a aria-label="Home link" href="/" className={`nav_link ${pathname === '/' ? 'w--current' : ''}`}>
            Home
          </a>
          <a aria-label="Work link" href="/work" className={`nav_link ${pathname === '/work' ? 'w--current' : ''}`}>
            Work
          </a>
          <a aria-label="Studio link" href="/studio" className={`nav_link ${pathname === '/studio' ? 'w--current' : ''}`}>
            Studio
          </a>
          <a aria-label="Contact link" href="/contact" className={`nav_link ${pathname === '/contact' ? 'w--current' : ''}`}>
            Contact
          </a>
        </div>
        <div className="navbar_right-text">
          <div>Slay</div>
          <div style={{ fontSize: '0.85em', opacity: 0.8 }}>the Strategy</div>
        </div>
      </div>
    </nav>
  );
}
