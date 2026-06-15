"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "Prassana",
    role: "Founder, Prassana Brands",
    description:
      "Working with Slay the Strategy was seamless. Their process is structured, focused, and respectful of time, which made collaboration easy and effective.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg",
    rating: 5,
  },
  {
    name: "JZ Lake View",
    role: "Manager, JZ Lake View",
    description:
      "Slay the Strategy brought a level of clarity to our project that made the entire process feel smooth and well organised. Every stage was handled with care.",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    rating: 5,
  },
  {
    name: "Yogita Dalvi",
    role: "Director, KDBS",
    description:
      "From strategy to execution, everything was handled with precision and care. The final product feels refined and built to last.",
    img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg",
    rating: 5,
  },
  {
    name: "Brew Merchant Café",
    role: "Owner, Brew Merchant Café & Bar",
    description:
      "Vishishta just gets it — she brings clarity, creativity, and structure to every campaign. Everything feels intentional and aligned with our brand.",
    img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg",
    rating: 5,
  },
  {
    name: "Echo Bowl",
    role: "Founder, Echo Bowl",
    description:
      "The Social Moodboard team has helped us show up with consistency, edge, and style. Vishishta leads with insight and never delivers anything mediocre.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg",
    rating: 4,
  },
  {
    name: "Chill House Interiors",
    role: "Owner, Chill House Interiors",
    description:
      "We came for content support and stayed for the energy, professionalism, and genuine passion. Vishishta's strategies are sharp and rooted in what actually works.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt_911060-133057.jpg",
    rating: 5,
  },
  {
    name: "Chill House Interiors",
    role: "Owner, Chill House Interiors",
    description:
      "We came for content support and stayed for the energy, professionalism, and genuine passion. Vishishta's strategies are sharp and rooted in what actually works.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt_911060-133057.jpg",
    rating: 5,
  },
];

// ── Star rating component ──
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`text-lg ${i <= count ? "text-yellow-400" : "text-[#f7f2e6]/20"}`}
      >
        ★
      </span>
    ))}
  </div>
);

// ── Single card ──
const ReviewCard = ({ name, role, description, img, rating }: any) => (
  <figure className="w-80 h-80 flex-shrink-0 rounded-2xl bg-[#fdf8ee] border border-[#e8dfc8] p-8 flex flex-col justify-between shadow-2xl">
    <div>
      <Stars count={rating} />
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

import { motion, useScroll, useTransform } from "framer-motion";
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

// ── Main component ──
export default function Clients() {
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

  return (
    // Height determines how much scrolling is required to finish the animation
    <section ref={containerRef} className="bg-[#526855] relative h-[300vh]">
      {/* Sticky wrapper so the view stays pinned while scrolling down */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Header */}
        <div className="text-center px-4 z-50 absolute top-20 w-full">
          <div className="inline-flex mb-5">
            <span className="px-4 py-1.5 text-xs font-medium text-[#f7f2e6] border border-[#516856]/30 rounded-full font-['Gilda_Display'] bg-[#526855]/50 backdrop-blur-sm">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#f7f2e6] font-['Gilda_Display'] leading-tight max-w-xl mx-auto drop-shadow-md">
            Trusted by teams who <span className="italic">value quality.</span>
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="relative w-full h-[400px] flex items-center mt-10">
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

        {/* Bottom stat */}
        <div className="text-center absolute bottom-10 z-50 w-full px-6">
          <p className="text-sm text-[#f7f2e6]/65 font-['Gilda_Display']">
            <span className="text-[#f7f2e6] font-semibold">+200</span>{" "}
            projects delivered across growing companies.
          </p>
        </div>
      </div>
    </section>
  );
}