"use client";

import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Bineet",
    role: "Founder, Mahru",
    description:
      "Dipani is hands-on and hardworking. I chose to work with her because of her clear vision and strong knowledge. Within just one month she understood the deliverables and went beyond the initial requirements by continuously improving on the ask. She is easy to work with, proactive, and brings a thoughtful approach to her work.",
    img: "/Testimonial%20Logos/Mahru%20Stories%20(2).png",
    rating: 5,
  },
  {
    name: "Binod Kumar",
    role: "Manager, Orient Polyfilms",
    description:
      "Dipani supported us with social media planning and execution including content direction, posting, and performance tracking. Her approach was structured and thoughtful with a clear understanding of brand positioning and audience behaviour. Communication was smooth, timelines were respected, and the work consistently reflected what we were aiming to build.",
    img: "/Testimonial%20Logos/orient%20.png",
    rating: 5,
  },
  {
    name: "Ritu and Manav",
    role: "Maple Bear Canadian Preschool",
    description:
      "You handled our work with professionalism and clear understanding. The experience has been smooth and the results are excellent.",
    img: "/Testimonial%20Logos/MAPLE%20LOGO.png",
    rating: 5,
  },
  {
    name: "Rohit",
    role: "Founder, Wallora",
    description:
      "The content was consistent, on brand, and actually got noticed. Working with the team felt seamless and the quality never dropped.",
    img: "/Testimonial%20Logos/Add%20a%20little%20bit%20of%20body%20text%20(11).png",
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
    img: "/Testimonial%20Logos/claw%20nails%20.png",
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
      <img src="/Clients/AVARNA%20(3).png" alt="AVARNA" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={1}>
      <img src="/Clients/Acyuta%20Logo.png" alt="Acyuta Logo" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={2}>
      <img src="/Clients/Add%20a%20little%20bit%20of%20body%20text%20(11).png" alt="Body text" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={3}>
      <img src="/Clients/Blue%20Modern%20Health%20Care%20Center%20Retractable%20Banner.png" alt="Modern Health Care Center" className="w-full h-full object-contain" />
    </BrandCard>,
    
    // Row 2
    <BrandCard key={4}>
      <img src="/Clients/Cellexa%20(2).png" alt="Cellexa" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={5}>
      <img src="/Clients/GINNI PARMAR .png" alt="Ginni Parmar Tailor" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={6}>
      <img src="/Clients/Infamous%20Talents%20Black.png" alt="Infamous Talents" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={7}>
      <img src="/Clients/MAPLE%20LOGO.png" alt="Maple Logo" className="w-full h-full object-contain" />
    </BrandCard>,

    // Row 3
    <BrandCard key={8}>
      <img src="/Clients/Mahru%20Stories%20(2).png" alt="Mahru Stories" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={9}>
      <img src="/Clients/Perspective%20Studio%20Posts!%20(1).png" alt="Perspective Studio" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={10}>
      <img src="/Clients/claw%20nails%20.png" alt="Claw Nails" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={11}>
      <img src="/Clients/kapoma.jpeg" alt="Kapoma" className="w-full h-full object-contain" />
    </BrandCard>,

    // Row 4
    <BrandCard key={12}>
      <img src="/Clients/luxx-spas-langley-logo%20(1).png" alt="Luxx Spas" className="w-full h-full object-contain" />
    </BrandCard>,
    <BrandCard key={13}>
      <img src="/Clients/orange%20(2).png" alt="Orange" className="w-full h-full object-contain" />
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