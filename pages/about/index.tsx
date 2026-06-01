"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Target, TrendingUp, Users, Zap, Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Curve } from "@/components";

import { cn } from "@/lib/utils";

const socialLinks = [
  { id: 1, title: "Instagram", href: " https://www.instagram.com/slaythestrategy.agency/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: " https://www.linkedin.com/in/dipani-handa-a7460066/", icon: <Linkedin size={20} /> },
  { id: 3, title: "Facebook", href: "https://www.facebook.com/profile.php?id=61586631632667", icon: <Facebook size={20} /> },
];

// NumberTicker Component
const NumberTicker = ({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.round(latest)
        );
      }
    });
  }, [springValue]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums tracking-wider text-[#f7f2e6]",
        className
      )}
      ref={ref}
    />
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <div className="mx-auto mt-14 pt-10 pb-12 grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {/* Reach Stat */}
      <div className="relative bg-[#526855] rounded-xl text-[#f7f2e6] p-6 border border-gray-200 shadow-lg">
        <div className="absolute top-0 right-0 p-3">
          <Users className="size-10 text-gray-300" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#f7f2e6]">
              <NumberTicker value={10} />M+
            </span>
          </div>
          <div className="mt-3 text-[#f7f2e6] font-medium text-lg">
            Combined Reach
          </div>
          <p className="mt-1 text-sm text-[#f7f2e6]">
            Across all digital campaigns and platforms
          </p>
          <div className="group mt-4 flex cursor-pointer items-center gap-2 text-sm text-[#f7f2e6] hover:text-[#f7f2e6]">
          </div>
        </div>
      </div>
      {/* Brands Stat */}
      <div className="relative bg-[#526855] rounded-xl p-6 border border-gray-200 shadow-lg">
        <div className="absolute top-0 right-0 p-3">
          <TrendingUp className="size-10 text-gray-200" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#f7f2e6]">
              <NumberTicker value={20} />+
            </span>
          </div>
          <div className="mt-3 text-[#f7f2e6] font-medium text-lg">
            Elevated Brands
          </div>
          <p className="mt-1 text-sm text-[#f7f2e6]">
            With powerful content series and campaigns
          </p>
          <div className="group mt-4 flex cursor-pointer items-center gap-2 text-sm text-[#f7f2e6] hover:text-[#f7f2e6]">
          </div>
        </div>
      </div>
      {/* Content Quality Stat */}
      <div className="relative bg-[#526855] rounded-xl p-6 border text-[#f7f2e6] border-white shadow-lg">
        <div className="absolute top-0 right-0 p-3">
          <Target className="size-10 text-gray-300" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#f7f2e6]">
              <NumberTicker value={100} />%
            </span>
          </div>
          <div className="mt-3 text-[#f7f2e6] font-medium text-lg">
            Strategy Driven
          </div>
          <p className="mt-1 text-sm text-[#f7f2e6]">
            Purposeful content that delivers results, no fluff
          </p>
          <div className="group mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400 hover:text-[#f7f2e6]">
          </div>
        </div>
      </div>
    </div>
  );
};

// Main About Component
export default function About() {
  const nicheData = [
    { id: 1, title: "Automation", imageUrl: "/i1.jpg" },
    { id: 2, title: "Interior Design Houses", imageUrl: "/i2.jpg" },
    { id: 3, title: "Events", imageUrl: "/i3.jpg" },
    { id: 4, title: "D2C", imageUrl: "/i4.jpg" },
    { id: 5, title: "Food & Beverage Brands", imageUrl: "/i5.jpg" },
    { id: 6, title: "Education", imageUrl: "/ch.png" },
    { id: 7, title: "Fashion", imageUrl: "/i1.jpg" },
    { id: 8, title: "Technology", imageUrl: "/i2.jpg" },
    { id: 9, title: "Corporate", imageUrl: "/i3.jpg" },
    { id: 10, title: "Influencer", imageUrl: "/i4.jpg" }
  ];

  // Reference for the iframe
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Effect to handle iframe loading and communication
  useEffect(() => {
    const handleIframeLoad = () => {
      // Ensure iframe exists
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          const iframeWindow = iframeRef.current.contentWindow;
          iframeWindow.postMessage({ action: 'disableScroll' }, '*');
          iframeRef.current.classList.add('iframe-loaded');
        } catch (e) {
          console.error("Error setting up iframe:", e);
        }
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <>
      <Curve backgroundColor={"#f7f2e6"}>
        <div className="bg-[#f7f2e6]">
          <div className="w-full">
            {/* Fullscreen Iframe - with improved handling */}
            <section className="w-full h-screen flex flex-col">
              <div className="relative w-full h-full">
                <iframe
                  ref={iframeRef}
                  src="/about-bg.html"
                  title="About Page"
                  className="w-full h-full border-none"
                  scrolling="no"
                  style={{
                    overflow: 'hidden',
                    pointerEvents: 'auto'
                  }}
                />
              </div>
            </section>

            {/* Main scrollable content with Locomotive Scroll */}
            <div data-scroll-container className="w-full">
              <div className="relative z-10 bg-[#f7f2e6] lg:py-32 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-red-600 blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-800 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative">
                  {/* About the Founder Section Header */}
                  <div className="relative z-10 bg-transparent pb-0 overflow-hidden mt-24">
                    <div className="container mx-auto px-6 relative">
                      <h2 className="text-4xl md:text-5xl lg:text-7xl mb-6 text-center font-['Gilda_Display'] text-[#526855]">
                        Behind <span className="text-[#526855] relative italic">
                          Slay the Strategy
                        </span>
                      </h2>
                    </div>
                  </div>

                  {/* Founder Section — image left, text right */}
                  <div className="relative z-10 py-20">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-28 xl:gap-28">

                      {/* Left — image */}
                      <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 xl:w-96">
                        <img
                          src="/founder.webp"
                          alt="Dipani"
                          className="w-full h-auto object-cover rounded-2xl shadow-xl"
                        />
                      </div>

                      {/* Right — text content */}
                      <div className="flex flex-col gap-6 max-w-xl items-center text-center md:items-start md:text-left lg:items-start lg:text-left xl:items-start xl:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-['Gilda_Display'] text-[#526855] leading-tight">
                          I am Dipani, a<br /><span className="italic">brand strategist</span>
                        </h2>

                        {/* Quote block with left border */}
                        <div className="border-l-0 md:border-l-4 lg:border-l-4 xl:border-l-4 border-[#526855] pl-0 md:pl-5 lg:pl-5 xl:pl-5">
                          <p className="text-[#526855] text-lg font-semibold font-['Gilda_Display'] leading-snug">
                            I build compelling social media presences that convert attention into unbreakable loyalty.
                          </p>
                        </div>

                        {/* Bio paragraph */}
                        <p className="text-[#526855]/75 text-base font-light font-['Gilda_Display'] leading-relaxed">
                          I started Slay the Strategy to help ambitious brands cut through the noise. We combine data-backed marketing strategies with scroll-stopping creative content to build digital footprints that actually matter.
                        </p>

                        {/* Social links */}
                        <div className="flex flex-wrap gap-6 pt-2 justify-center md:justify-start lg:justify-start xl:justify-start">
                          {socialLinks.map((item) => (
                            <a
                              key={item.id}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-[#526855]/60 hover:text-[#526855] font-light transition-all duration-300 gap-2 font-['Gilda_Display']"
                            >
                              {item.icon}
                              <span>{item.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Niches Section */}
                  <div className="relative z-10 mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-['Gilda_Display'] text-[#526855]">
                      Niches<span className="relative inline-block">
                        <span className="text-[#526855] italic">Worked In</span>
                      </span>
                    </h2>
                    <div className="mt-4 max-w-xl mx-auto">
                      <p className="text-[#526855]/85 text-center text-sm md:text-base">
                        Specialized expertise across multiple industries with proven results
                      </p>
                    </div>
                  </div>

                  {/* Improved Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {nicheData.map((niche) => (
                      <div
                        key={niche.id}
                        className="group bg-[#526855] rounded-xl overflow-hidden shadow-lg border border-[#526855]/50 hover:border-[#f7f2e6]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={niche.imageUrl}
                            alt={`${niche.title} niche`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                          {/* Hover indicator */}
                          <div className="absolute top-4 right-4 bg-[#f7f2e6] rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <svg className="w-4 h-4 text-[#526855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-[#f7f2e6] font-['Gilda_Display'] group-hover:text-[#f7f2e6]/90 transition-colors duration-300">
                            {niche.title}
                          </h3>

                          <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <span className="text-xs text-[#f7f2e6]/70">Results-driven approach</span>
                            </div>
                            <div className="inline-flex items-center justify-center size-8 rounded-full bg-[#f7f2e6] text-[#526855] shadow-lg shadow-[#f7f2e6]/20">
                              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Horizontal Stats Section with Custom Background */}
              <section data-scroll-section className="py-16 bg-[#f7f2e6] text-[#526855]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl mb-16 text-center font-['Gilda_Display'] text-[#526855]">
                    Our Strategies <span className="text-[#526855] relative">
                      turnt brand into powerhouses
                    </span>
                  </h2>
                  <p className="mt-4 text-center text-base text-[#526855]/75 md:text-xl max-w-2xl">
                    Delivering measurable results through data-driven campaigns and strategic content solutions.
                  </p>
                </div>

                {/* Stats Cards */}
                <StatsSection />
              </section>
            </div>
          </div>
        </div>
      </Curve>
    </>
  );
}