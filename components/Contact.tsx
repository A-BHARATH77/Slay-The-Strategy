'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Contact() {
  const contactRef = useRef(null);

  useGSAP(() => {
    gsap.to('.contact-reveal-word', {
      y: '0%',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
    });
    gsap.to(".text", {
      opacity: 1, y: 0,
      duration: 1, ease: "power2.out"
    });
  }, { scope: contactRef });

  return (
    <section ref={contactRef} className="bg-[#f7f2e6] min-h-screen px-10 md:px-32 flex flex-col items-start text-[#516856] w-full overflow-hidden relative" style={{ paddingTop: '100px', paddingLeft: '60px' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-reveal-word {
          transform: translateY(100%);
        }
        .text {
          opacity: 0;
          transform: translateY(30px);
          transition: none !important;
        }
        .text:hover {
          transition: opacity 0.2s ease !important;
        }
      ` }} />

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '4rem', width: '100%', minHeight: '100%', position: 'relative', zIndex: 10 }}>

        {/* LEFT HALF */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem', fontFamily: "'Montserrat', sans-serif" }}>

          <h1 style={{ fontSize: '9rem', fontWeight: 'bold', lineHeight: '0.85', letterSpacing: '-0.05em', margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.2em' }}>
            <span style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.1em', marginBottom: '-0.1em' ,paddingRight:'1rem'}}>
              <span className="contact-reveal-word" style={{ display: 'inline-block', willChange: 'transform' }}>Let's</span>
            </span>
            <span style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
              <span className="contact-reveal-word" style={{ display: 'inline-block', willChange: 'transform' }}>talk.</span>
            </span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a className="text" href="mailto:hello@slaywithstrategy.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', fontWeight: 500, textDecoration: 'none', width: 'max-content', alignSelf: 'flex-start' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>hello@slaywithstrategy.com</span>
            </a>
            <a className="text" href="https://instagram.com/slaywithstrategy" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', fontWeight: 500, textDecoration: 'none', width: 'max-content', alignSelf: 'flex-start' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l9 9-9 9-9-9 9-9z" />
              </svg>
              <span>@slaywithstrategy</span>
            </a>
            <p className="text" style={{ fontSize: '1rem', opacity: 0.5, margin: 0 }}>
              Usually replies within 24 hours.
            </p>
          </div>

        </div>
        {/* RIGHT HALF */}
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column', position: 'relative', minHeight: '100vh' }}>
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '900vh',
              backgroundColor: '#516856',
            }}
          />
          {/* Form Header / Top Line */}
          <div style={{ width: '100%', height: '1px', backgroundColor: '#516856', marginBottom: '3rem' }} />

          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>

            {/* Name Field */}
            <div style={{ borderBottom: '1px solid #516856', paddingBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Name"
                className="text"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '2.2rem',
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#516856',
                  padding: '12px',
                  paddingLeft:'20px'
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ borderBottom: '1px solid #516856', paddingBottom: '1rem' }}>
              <input
                type="email"
                placeholder="Email Address"
                className="text"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '2.2rem',
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#516856',
                  padding: '12px',
                  paddingLeft:'20px'
                }}
              />
            </div>

            {/* Message Field */}
            <div style={{ borderBottom: '1px solid #516856', paddingBottom: '1rem' }}>
              <textarea
                placeholder="Tell us about your project"
                rows={2}
                className="text"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '2.2rem',
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#516856',
                  resize: 'none',
                  paddingLeft:'22px',
                  paddingTop:'25px',
                  overflowY: 'auto'
                }}
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' , padding:'5px' , paddingLeft:'12px'}}>
              <style>{`
                input[type="checkbox"].custom-checkbox {
                  appearance: none;
                  -webkit-appearance: none;
                  width: 24px;
                  height: 24px;
                  border: 2px solid #516856;
                  border-radius: 50%;
                  cursor: pointer;
                  position: relative;
                  display: grid;
                  place-content: center;
                }
                input[type="checkbox"].custom-checkbox:checked::before {
                  content: "";
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  background-color: #516856;
                }
              `}</style>
              <input 
                type="checkbox" 
                id="privacy" 
                required
                className="custom-checkbox"
              />
              <label 
                htmlFor="privacy" 
                className="text"
                style={{ 
                  fontSize: '1rem', 
                  color: '#516856', 
                  cursor: 'pointer',
                  opacity: 0.8
                }}
              >
                I have read and accept the privacy policy
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text"
              style={{
                alignSelf: 'center',
                backgroundColor: '#516856',
                color: '#f7f2e6',
                border: 'none',
                padding: '1.2rem 4rem',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '1rem',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

    </section>
  );
}

