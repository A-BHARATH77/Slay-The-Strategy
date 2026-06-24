"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <footer
      className="relative w-full overflow-hidden flex flex-col"
      style={{ backgroundColor: "#526855", height: "100vh" }}
    >
      {/* ── Top section ── */}
      <div 
        className={
          isMobile
            ? "flex flex-col items-start px-6 pt-12 pb-4 flex-shrink-0 mx-4 mt-6 gap-12"
            : "flex items-start justify-between px-16 pt-24 pb-4 flex-shrink-0 mx-6 mt-6"
        }
      >
        {/* ── LEFT column ── */}
        <div className="flex flex-col gap-5 max-w-lg">
          {/* Main heading */}
          <h2
            className="text-[#e8e0c8] font-bold leading-tight whitespace-nowrap"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "sans-serif" }}
          >
            Build it once, Build it right.
          </h2>
          <p
            className="text-[#c8c0a8] text-sm leading-relaxed"
            style={{ fontFamily: "sans-serif", maxWidth: "320px" }}
          >
            If you are ready to show up online the way your brand actually deserves, let us talk.
          </p>

          {/* New Business email */}
          <div>
            <Link
              href="mailto:hello@slaystrategy.com"
              className="text-[#e8e0c8] text-sm font-medium hover:underline"
              style={{ fontFamily: "sans-serif" }}
            >
              hello@slaystrategy.com
            </Link>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-1">
            <Link
              href="/privacy-policy"
              className="text-[#c8c0a8] text-xs hover:text-[#e8e0c8] transition-colors"
              style={{ fontFamily: "sans-serif" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[#c8c0a8] text-xs hover:text-[#e8e0c8] transition-colors"
              style={{ fontFamily: "sans-serif" }}
            >
              Terms and Conditions
            </Link>
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8e0c8] text-[#526855] hover:bg-[#dcd4bd] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              style={{ fontFamily: "sans-serif" }}
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* ── RIGHT column ── */}
        <div 
          className={
            isMobile
              ? "flex flex-col gap-10 items-start w-full"
              : "flex gap-10 items-start"
          }
        >
          <div className="flex flex-col gap-6">
            {/* Quick Links */}
            <div>
              <p
                className="text-[#e8e0c8] text-xs font-semibold mb-3"
                style={{ fontFamily: "sans-serif" }}
              >
                Quick Links:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Work", href: "/works" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#c8c0a8] text-sm hover:text-[#e8e0c8] transition-colors"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone */}
            <div>
              <p
                className="text-[#e8e0c8] text-xs font-semibold mb-1"
                style={{ fontFamily: "sans-serif" }}
              >
                Phone:
              </p>
              <Link
                href="tel:+919036383777"
                className="text-[#e8e0c8] text-sm font-medium hover:underline"
                style={{ fontFamily: "sans-serif" }}
              >
                +91 90363 83777
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div 
            className={
              isMobile
                ? "flex flex-row gap-3 mt-2"
                : "flex flex-col gap-3 mt-6"
            }
          >
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/profile.php?id=61586631632667"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center rounded-lg transition-opacity hover:opacity-75"
              style={{ width: "36px", height: "36px", backgroundColor: "#435845" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#e8e0c8">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/slaythestrategy.agency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center rounded-lg transition-opacity hover:opacity-75"
              style={{ width: "36px", height: "36px", backgroundColor: "#435845" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8e0c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="#e8e0c8" stroke="none" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/slay-the-strategy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center rounded-lg transition-opacity hover:opacity-75"
              style={{ width: "36px", height: "36px", backgroundColor: "#435845" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#e8e0c8">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>



      {/* ── Giant scrolling marquee ── fills remaining space ── */}
      <div className="relative overflow-hidden flex-1 flex items-end">
        <div
          className="flex items-end whitespace-nowrap w-full"
          style={{ animation: "footerMarquee 18s linear infinite" }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(80px, 16vw, 200px)",
                fontWeight: 900,
                color: "#e8e0c8",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                paddingRight: "4rem",
                opacity: 0.92,
              }}
            >
              SLAY THE STRATEGY &nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Marquee keyframes */}
      <style jsx>{`
        @keyframes footerMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
}