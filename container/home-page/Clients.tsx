"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "Bineet",
    role: "Founder, Mahru",
    description:
      "Dipani is hands-on and hardworking. I chose to work with her because of her clear vision and strong knowledge. Within just one month she understood the deliverables and went beyond the initial requirements by continuously improving on the ask. She is easy to work with, proactive, and brings a thoughtful approach to her work.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg",
    rating: 5,
  },
  {
    name: "Binod Kumar",
    role: "Manager, Orient Polyfilms",
    description:
      "Dipani supported us with social media planning and execution including content direction, posting, and performance tracking. Her approach was structured and thoughtful with a clear understanding of brand positioning and audience behaviour. Communication was smooth, timelines were respected, and the work consistently reflected what we were aiming to build.",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    rating: 5,
  },
  {
    name: "Ritu and Manav",
    role: "Maple Bear Canadian Preschool",
    description:
      "You handled our work with professionalism and clear understanding. The experience has been smooth and the results are excellent.",
    img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg",
    rating: 5,
  },
  {
    name: "Rohit",
    role: "Founder, Wallora",
    description:
      "The content was consistent, on brand, and actually got noticed. Working with the team felt seamless and the quality never dropped.",
    img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg",
    rating: 5,
  },
  {
    name: "Minakshi",
    role: "Founder, The Sacred Nook",
    description:
      "The team understood the soul of the brand before they created a single piece of content. Everything felt intentional and completely aligned with what we were building.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg",
    rating: 4,
  },
  {
    name: "Reena",
    role: "Owner, Claw Nails",
    description:
      "We went from inconsistent posting to a feed people actually stop and look at. The aesthetic is exactly what we wanted and the strategy behind it makes the whole thing work.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt_911060-133057.jpg",
    rating: 5,
  },
  {
    name: "Punitta Trikha",
    role: "Jewellery Designer and Craftswoman",
    description:
      "The reels capture the craft in a way I never thought content could. Every shoot feels considered, every edit feels right. The work speaks for the jewellery the way it deserves to be spoken for.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt_911060-133057.jpg",
    rating: 5,
  },
];


// ── Single card ──
const ReviewCard = ({ name, role, description, img, rating }: any) => (
  <figure className="w-80 h-[420px] flex-shrink-0 rounded-2xl bg-[#fdf8ee] border border-[#e8dfc8] p-8 flex flex-col justify-between shadow-2xl">
    <div>
      <blockquote className="text-[#526855]/85 text-sm leading-relaxed font-['Gilda_Display']">
        &ldquo;{description}&rdquo;
      </blockquote>
    </div>
    <div className="flex items-center gap-3 mt-6">
      <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 bg-[#516856]/10 border border-[#e8dfc8]">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e: any) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-[#526855] font-['Gilda_Display']">{name}</p>
        <p className="text-xs text-[#526855]/70 font-['Gilda_Display']">{role}</p>
      </div>
    </div>
  </figure>
);

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ── Animated Card (Row Element) ──
const RowCard = ({ item, index, total, progress, windowWidth }: any) => {
  const cardWidth = 352; // w-80 (320px) + gap-8 (32px)
  const paddingSide = windowWidth < 768 ? 32 : 64; // px-8 or md:px-16
  
  // Calculate when this specific card reaches the left edge of the screen
  const totalWidth = total * cardWidth + paddingSide * 2;
  const maxShift = Math.max(1, totalWidth - windowWidth);
  const startX = paddingSide + index * cardWidth;
  
  const crossPoint = startX / maxShift;
  const endPoint = crossPoint + 0.25; // Expanded duration: takes 25% of scroll to smoothly complete

  // Gentle, polished peel-away instead of aggressive shooting
  const x = useTransform(progress, [crossPoint, endPoint], [0, -200]);
  const opacity = useTransform(progress, [crossPoint, endPoint], [1, 0]); // Fades out smoothly over the entire exit
  const rotate = useTransform(progress, [crossPoint, endPoint], [0, -5]); // Very subtle tilt
  const scale = useTransform(progress, [crossPoint, endPoint], [1, 0.9]); // Gentle shrink

  return (
    <motion.div
      style={{ x, opacity, rotate, scale }}
      className="relative origin-bottom-left"
    >
      <ReviewCard {...item} />
    </motion.div>
  );
};

// ─── Main component ───
export default function Clients({ isServicesPage = false }: { isServicesPage?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const safeWindowWidth = windowWidth || 1200;

  // The container will move left by its own width MINUS the viewport width.
  // This smoothly reveals the cards and stops scrolling exactly when the 
  // last card reaches the right side of the screen.
  const containerX = useTransform(scrollYProgress, [0, 1], ["calc(0% - 0vw)", "calc(-100% + 100vw)"]);

  const isMobilePhone = safeWindowWidth < 768;

  const BrandCard = ({ children, isText = false, className }: any) => {
    const controls = useAnimation();
    
    useEffect(() => {
      if (isText) return; // Do not animate text components
      
      let isMounted = true;
      
      const startFlipping = async () => {
        // Initial random wait before first flip (0 to 3 seconds)
        const initialDelay = Math.random() * 3;
        await new Promise(res => setTimeout(res, initialDelay * 1000));
        
        while (isMounted) {
          // Perform the flip
          try {
            if (!isMounted) break;
            await controls.start({ 
              rotateY: [0, 360], 
              transition: { duration: 1.2, ease: "easeInOut" } 
            });
          } catch (error) {
            break;
          }
          
          // Wait before the next flip (2 to 6 seconds)
          const waitTime = Math.random() * 4 + 2;
          await new Promise(res => setTimeout(res, waitTime * 1000));
        }
      };
      
      startFlipping();
      
      return () => { isMounted = false; };
    }, [controls, isText]);

    if (isText) {
      return (
        <div className={cn("flex items-center p-4 md:p-6 h-40 md:h-48", className)}>
          {children}
        </div>
      );
    }
    return (
      <motion.div animate={controls} style={{ transformStyle: "preserve-3d" }} className={cn("flex items-center justify-center p-4 md:p-6 bg-[#fdfcf8] rounded-[2px] h-40 md:h-48", className)}>
        {children}
      </motion.div>
    );
  };

  const cards = [
    // Row 1
    <BrandCard key={0}>
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
          <path d="M12 2l8 5v10l-8 5-8-5V7z" />
          <path d="M12 22V12M12 12L4 7M12 12l8-5" />
        </svg>
        <span className="text-xl md:text-2xl font-medium tracking-tight text-black">acme</span>
      </div>
    </BrandCard>,
    <BrandCard key={1}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <rect x="2" y="6" width="20" height="12" rx="6" />
        <rect x="6" y="9" width="12" height="6" rx="3" />
      </svg>
    </BrandCard>,
    <BrandCard key={2}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M12 15a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3z" fill="currentColor" />
        <path d="M12 9V4M9 9V5M15 9V5M6 9V6M18 9V6" strokeLinecap="round" />
      </svg>
    </BrandCard>,
    <BrandCard key={3}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-black">
        <path d="M4 7h12l4-2M4 12h14l4-2M4 17h16l4-2" strokeLinecap="round" />
      </svg>
    </BrandCard>,
    
    // Row 2
    <BrandCard key={4}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-black">
        <path d="M8 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 3-2 4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4c-2.2 0-3-2-4-4s-1.8-4-4-4z" />
      </svg>
    </BrandCard>,
    <BrandCard key={5}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </BrandCard>,
    <BrandCard key={6}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <circle cx="12" cy="12" r="10" />
        <path d="M6 12c2-2 4 2 6 0s4-2 6 0M8 8c1.5-1.5 3 1.5 4.5 0s3-1.5 4.5 0M8 16c1.5-1.5 3 1.5 4.5 0s3-1.5 4.5 0" strokeLinecap="round" />
      </svg>
    </BrandCard>,
    <BrandCard key={7}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </BrandCard>,

    // Row 3
    <BrandCard key={8}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
        <path d="M12 2v20M2 8.5h20M2 15.5h20" />
      </svg>
    </BrandCard>,
    <BrandCard key={9}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    </BrandCard>,
    <BrandCard key={10}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 2v20M7 12h10" />
      </svg>
    </BrandCard>,
    <BrandCard key={11}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M12 2l10 10-10 10L2 12z" />
        <path d="M12 2v20M2 12h20" />
      </svg>
    </BrandCard>,

    // Row 4
    <BrandCard key={12}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
      </svg>
    </BrandCard>,
    <BrandCard key={13}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.76-1.91-3-4-3-2.6 0-4.6 2.05-4.6 4.6 0 .4.04.8.1 1.2A3.5 3.5 0 0 0 4 17.5c0 1.93 1.57 3.5 3.5 3.5h10z" />
      </svg>
    </BrandCard>,
    <BrandCard key={14}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </BrandCard>,
    <BrandCard key={15}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
      </svg>
    </BrandCard>,

    // Row 5
    <BrandCard key={16}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </BrandCard>,
    <BrandCard key={17}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    </BrandCard>,
    <BrandCard key={18}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" transform="rotate(90 12 12)" />
      </svg>
    </BrandCard>,
    <BrandCard key={19}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    </BrandCard>,

    // Row 6 (Centered box on Services Page)
    <BrandCard key={20} className="w-full">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    </BrandCard>,
  ];

  return (
    <>
      {/* Logo Grid Section */}
      <section className="bg-[#f7f2e6] pt-24 pb-12 px-4 md:px-10 lg:px-20">
        <div className="relative z-10 mb-12 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-['Gilda_Display'] text-[#526855]">
            Brands we have worked with
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className={`grid gap-1 md:gap-[6px] ${isMobilePhone ? "grid-cols-2" : "grid-cols-4"}`}>
            {cards.slice(0, isServicesPage ? 20 : 8)}
          </div>
          
          {isServicesPage && (
            <div className="flex justify-center w-full mt-1 md:mt-[6px]">
              <div className={isMobilePhone ? "w-1/2 pr-[2px]" : "w-1/4 pr-[4px]"}>
                {cards[20]}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Height determines how much scrolling is required to finish the animation */}
      <section ref={containerRef} className="bg-[#526855] relative h-[300vh]">
        {/* Sticky wrapper so the view stays pinned while scrolling down */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-10 md:gap-14 overflow-hidden">
        
        {/* Header */}
        <div className="text-center px-4 z-50 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-['Gilda_Display'] text-[#f7f2e6]">
            Straight from the chat
          </h2>
          <div className="mt-4 max-w-xl mx-auto px-6">
            <p className="text-[#f7f2e6]/85 text-center text-sm md:text-base">
              Real words. No edits. No five star theatre.
            </p>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative w-full h-[420px] flex items-center">
          <motion.div 
            style={{ x: containerX }}
            className="flex gap-8 px-8 md:px-16 w-max items-center"
          >
            {testimonials.map((t, index) => (
              <RowCard
                key={index}
                item={t}
                index={index}
                total={testimonials.length}
                progress={scrollYProgress}
                windowWidth={safeWindowWidth}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
}