'use client';
// @ts-nocheck
import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999, backgroundColor: 'transparent' }}>
      <style dangerouslySetInnerHTML={{__html: `
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
        }

        .navbar_menu .button-color-swoosh_text {
          color: #000000 !important;
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
        <a aria-label="Home link" role="Link" href="/" aria-current="page" className="nav_logo w-inline-block w--current">
          <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 208 84" fill="none" style={{ height: '40px', width: 'auto' }}>
            <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#000000" />
            <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="#000000" />
            <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="#000000" />
            <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="#000000" />
            <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="#000000" />
            <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="#000000" />
            <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="#000000" />
            <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="#000000" />
            <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="#000000" />
            <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="#000000" />
          </svg>
        </a>
        <div className="navbar_menu">
          <a aria-label="Expertises link" role="Link" href="/expertises" className="button-color-swoosh is-menu w-inline-block">
            <span className="button-color-swoosh_bg">
              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
            </span>
            <span data-text="Expertises" className="button-color-swoosh_inner">
              <span className="button-color-swoosh_text">Expertises</span>
            </span>
          </a>
          <a aria-label="Work link" role="Link" href="/work" className="button-color-swoosh is-menu w-inline-block">
            <span className="button-color-swoosh_bg">
              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
            </span>
            <span data-text="Work" className="button-color-swoosh_inner">
              <span className="button-color-swoosh_text">Work</span>
            </span>
          </a>
          <a aria-label="About link" role="Link" href="/about" className="button-color-swoosh is-menu w-inline-block">
            <span className="button-color-swoosh_bg">
              <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
              <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
            </span>
            <span data-text="About" className="button-color-swoosh_inner">
              <span className="button-color-swoosh_text">About</span>
            </span>
          </a>
          <a aria-label="Contact link" role="Link" href="/contact" className="button-color-swoosh is-menu w-inline-block">
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
