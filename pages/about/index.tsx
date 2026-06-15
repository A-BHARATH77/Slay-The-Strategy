"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { Target, TrendingUp, Users, Zap, Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Curve } from "@/components";
import { ReactLenis } from 'lenis/react';

import { cn } from "@/lib/utils";

// ─── WorksSection: inline stacking cards (no ReactLenis root) ───────────────
const worksProjects = [
  {
    title: 'Matthias Leidinger',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'rock.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#f7f2e6',
  },
  {
    title: 'Clément Chapillon',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes—so French photographer Clément.',
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#f7f2e6',
  },
  {
    title: 'Zissou',
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal.",
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#f7f2e6',
  },
  {
    title: 'Mathias Svold and Ulrik Hasemann',
    description:
      'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#f7f2e6',
  },
  {
    title: 'Mark Rammers',
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, 'all over again'—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    src: 'cactus.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#f7f2e6',
  },
];

interface WorksCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const WorksCard: React.FC<WorksCardProps> = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className='flex flex-col relative -top-[25%] h-[600px] w-[95%] max-w-[1400px] rounded-md lg:p-10 sm:p-4 p-2 origin-top'
      >
        <h2 className='text-2xl text-left font-semibold text-[#526855] pt-6'>{title}</h2>
        <div className='flex h-full mt-5 gap-10'>
          <div className='w-[40%] relative top-[10%] text-[#526855]'>
            <p className='text-lg md:text-xl font-medium leading-relaxed'>{description}</p>
            <span className='flex items-center gap-2 pt-6'>
              <a href={'#'} target='_blank' className='underline cursor-pointer text-lg'>See more</a>
              <svg width='22' height='12' viewBox='0 0 22 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z' fill='black' />
              </svg>
            </span>
          </div>
          <div className='relative w-[60%] h-full rounded-lg overflow-hidden'>
            <motion.div className='w-full h-full' style={{ scale: imageScale }}>
              <Image fill src={url} alt='image' className='object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WorksSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div className='bg-[#f7f2e6]' ref={container}>
      <div className="relative z-10 mb-0 pt-20">
        <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-['Gilda_Display'] text-[#526855]">
          Works
        </h2>
        <div className="mt-4 max-w-xl mx-auto px-6">
          <p className="text-[#526855]/85 text-center text-sm md:text-base">
            Real work, real impact—discover how we help brands stand out and grow.
          </p>
        </div>
      </div>
      <section className='w-full'>
        {worksProjects.map((project, i) => {
          const targetScale = 1 - (worksProjects.length - i) * 0.05;
          return (
            <WorksCard
              key={`p_${i}`}
              i={i}
              url={project.link}
              src={project.src}
              title={project.title}
              color={project.color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

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


  return (
    <ReactLenis root>
      <Curve backgroundColor={"#f7f2e6"}>
        <div className="bg-[#f7f2e6]">
          <div className="w-full">
            <div className="w-full">
              <div className="relative z-10 bg-[#f7f2e6] lg:py-32 overflow-clip">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-red-600 blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-800 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative">
                  {/* About the Founder Section Header */}
                  <div className="relative z-10 bg-transparent pt-40 pb-0">
                    <div className="container mx-auto px-6 relative">
                      <h2 className="text-4xl md:text-5xl lg:text-7xl mb-10 text-center font-['Gilda_Display'] text-[#526855]">
                        Behind <span className="text-[#526855] relative italic">
                          Slay the Strategy
                        </span>
                      </h2>
                    </div>
                  </div>

                  {/* Founder Section — text left, image right */}
                  <div className="relative z-10 py-10">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row lg:flex-row xl:flex-row items-start justify-between md:gap-32 lg:gap-48 xl:gap-64">

                      {/* Left — text content */}
                      <div className="flex flex-col gap-6 max-w-xl items-center text-center md:items-start md:text-left lg:items-start lg:text-left xl:items-start xl:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-['Gilda_Display'] text-[#526855] leading-tight">
                          I am Dipani, a<br /><span className="italic">brand strategist</span>
                        </h2>

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

                      {/* Right — image */}
                      <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 xl:w-96">
                        <img
                          src="/founder.webp"
                          alt="Dipani"
                          className="w-full h-auto object-cover rounded-2xl shadow-xl"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Works Section — outside any overflow-hidden so sticky stacking works */}
              <WorksSection />

              {/* Niches Section */}
              <div className="bg-[#f7f2e6] px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 mb-20 pt-10">
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
              <section data-scroll-section className="min-h-screen py-16 bg-[#f7f2e6] text-[#526855] flex flex-col justify-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2">
                  {/* Left half — intentionally empty */}
                  <div className="hidden md:block"></div>
                  {/* Right half — stats */}
                  <div className="px-6 md:pr-12 md:pl-4">
                    {/* Label */}
                    <p className="text-2xl font-bold text-[#526855] mb-8 md:mb-12 tracking-wide font-sans">Stats</p>

                    <div className="flex flex-col gap-12 md:gap-12">
                      {/* Stat Row 1 */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-12">
                        <div className="w-auto sm:w-40 flex-shrink-0">
                          <span className="text-7xl md:text-[7.5rem] font-bold leading-none tracking-tighter text-[#526855] font-sans" style={{ lineHeight: '0.85' }}>
                            30
                          </span>
                        </div>
                        <div className="flex items-start pt-2 sm:pt-4">
                          <p className="text-[15px] font-medium leading-relaxed text-[#526855] max-w-[280px] font-sans">
                            A multidisciplinary team of designers, strategists, and developers dedicated to crafting exceptional digital experiences.
                          </p>
                        </div>
                      </div>

                      {/* Stat Row 2 */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-12">
                        <div className="w-auto sm:w-40 flex-shrink-0">
                          <span className="text-7xl md:text-[7.5rem] font-bold leading-none tracking-tighter text-[#526855] font-sans" style={{ lineHeight: '0.85' }}>
                            80
                          </span>
                        </div>
                        <div className="flex items-start pt-2 sm:pt-4">
                          <p className="text-[15px] font-medium leading-relaxed text-[#526855] max-w-[280px] font-sans">
                            From startups to established brands, we've delivered transformative projects across industries and markets worldwide.
                          </p>
                        </div>
                      </div>

                      {/* Stat Row 3 */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-12">
                        <div className="w-auto sm:w-40 flex-shrink-0">
                          <span className="text-7xl md:text-[7.5rem] font-bold leading-none tracking-tighter text-[#526855] font-sans" style={{ lineHeight: '0.85' }}>
                            +7
                          </span>
                        </div>
                        <div className="flex items-start pt-2 sm:pt-4">
                          <p className="text-[15px] font-medium leading-relaxed text-[#526855] max-w-[280px] font-sans">
                            Industry recognition for creativity, innovation, and performance-driven design that pushes boundaries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Curve>
    </ReactLenis>
  );
}