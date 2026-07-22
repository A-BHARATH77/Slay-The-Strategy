"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { Target, TrendingUp, Users, Zap, Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Curve } from "@/components";


import { cn } from "@/lib/utils";

// ─── WorksSection: inline stacking cards (no ReactLenis root) ───────────────
const worksProjects = [
  {
    title: 'Aavarna',
    description: `Pure scents. Intentional moments.
Incense designed for stillness, focus, and everyday rituals`,
    src: 'rock.jpg',
    link: '/Works/aavarna .png',
    color: '#f7f2e6',
  },
  {
    title: 'Anvi Jain / Law in Heels ',
    description: `More than a lawyer's journey.
It's about building a life where intelligence, elegance, and ambition coexist.
The era of a fashionable lawyer.
With sharp legal minds, elevated fashion, luxury living, and meaningful conversations. `,
    src: 'tree.jpg',
    link: '/Works/anvi.png',
    color: '#f7f2e6',
  },
  {
    title: 'Mahru',
    description: `From Lucknow, with Love
Premium Chikankari & Kamdani, Delicately crafted for you`,
    src: 'water.jpg',
    link: '/Works/mahri.jpeg',
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
            <p className='text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line'>{description}</p>
          </div>
          <div className='relative w-[60%] h-full rounded-lg overflow-hidden'>
            <motion.div className='w-full h-full' style={{ scale: imageScale }}>
              <Image fill src={url} alt='image' className='object-contain' />
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
      <div className="relative z-10 mb-0 pt-20 flex flex-col items-center w-full px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-['Gilda_Display'] text-[#526855]">
            A few things we have built
          </h2>
          <div className="mt-4 max-w-xl mx-auto px-6">
            <p className="text-[#526855]/85 text-center text-sm md:text-base">
              Real brands. Real results.
            </p>
          </div>
        </div>

        {/* Right aligned See All Work button */}
        <div className="mt-6 md:absolute md:right-[6%] md:top-1/2 md:-translate-y-1/2 md:mt-4 lg:absolute lg:right-[6%] lg:top-1/2 lg:-translate-y-1/2 lg:mt-4 xl:absolute xl:right-[6%] xl:top-1/2 xl:-translate-y-1/2 xl:mt-4">
          <Link
            href="/works"
            className="relative inline-flex items-center overflow-hidden px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wider uppercase text-[#f7f2e6] bg-[#576E47] hover:bg-[#3d5234] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(87,110,71,0.3)] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            See All Work
          </Link>
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



// ─── FounderRevealBlock: scroll-pinned B&W → wavy colour reveal ──────────────
interface FounderRevealBlockProps {
  imageColor: string;
  imageBW: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  children: React.ReactNode; // the text content block
}

const FounderRevealBlock = ({ imageColor, imageBW, imageAlt, imagePosition, children }: FounderRevealBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Wavy polygon: sine-wave bottom edge travels upward → water-splash reveal
  const clipPath = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0) return "polygon(0% 0%, 100% 0%, 100% 110%, 0% 110%)";
    if (p >= 1) return "polygon(0% 0%, 100% 0%, 100% -10%, 0% -10%)";
    const baseY = 105 - p * 130;
    const amp = 14 * Math.sin(p * Math.PI);
    const phase = p * Math.PI * 2.5;
    const numPoints = 20;
    const wavePoints = Array.from({ length: numPoints + 1 }, (_, i) => {
      const t = i / numPoints;
      const x = (1 - t) * 100;
      const waveY = Math.sin(t * Math.PI * 4 + phase) * amp;
      return `${x.toFixed(2)}% ${(baseY + waveY).toFixed(2)}%`;
    });
    return `polygon(0% 0%, 100% 0%, ${wavePoints.join(", ")})`;
  });

  const imageBlock = imagePosition === "left" ? (
    <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 xl:w-96 mx-auto md:mx-0 mb-8 md:mb-0 relative">
      <img src={imageColor} alt={imageAlt} className="w-full h-auto object-cover rounded-2xl shadow-xl" />
      <motion.img src={imageBW} alt={imageAlt} style={{ clipPath }}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl" />
    </div>
  ) : (
    <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 xl:w-96 mx-auto md:mx-0 mt-8 md:mt-0 relative">
      <img src={imageColor} alt={imageAlt} className="w-full h-auto object-cover rounded-2xl shadow-xl" />
      <motion.img src={imageBW} alt={imageAlt} style={{ clipPath }}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl" />
    </div>
  );

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center bg-[#f7f2e6]">
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row lg:flex-row xl:flex-row items-start justify-between md:gap-12 lg:gap-16 xl:gap-24">
          {imagePosition === "left" ? <>{imageBlock}{children}</> : <>{children}{imageBlock}</>}
        </div>
      </div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

// Main About Component
export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const safeWindowWidth = windowWidth || 1200;
  const isMobilePhone = safeWindowWidth < 768;

  const nicheData = [
    { id: 1, title: "Fashion and Lifestyle", imageUrl: "/niches/fashion .jpg", subline: "Aesthetic first content that sells the feeling before the product." },
    { id: 2, title: "Wellness and D2C", imageUrl: "/niches/d2c.jpg", subline: "Full funnel strategy for brands selling direct. Awareness to repeat purchase." },
    { id: 3, title: "Education", imageUrl: "/niches/educaion .jpg", subline: "Trust building content for schools and ed brands that need credibility before conversion." },
    { id: 4, title: "Events and Culture", imageUrl: "/niches/event .jpg", subline: "Pre event energy, real time coverage, post event momentum." },
    { id: 5, title: "Legal and Professional", imageUrl: "/niches/legal and business.jpg", subline: "Making expertise feel human, interesting, and worth following." },
    { id: 6, title: "Luxury and Automotive", imageUrl: "/niches/automobile .jpg", subline: "We understand what premium looks and sounds like." },
    { id: 7, title: "Corporate and B2B", imageUrl: "/niches/corporate .jpg", subline: "LinkedIn strategy and personal branding for leaders who want to be known." },
    { id: 8, title: "Media and Entertainment", imageUrl: "/niches/influencer.jpg", subline: "Podcast brands, creator accounts, and content ecosystems built to grow communities." },
    { id: 9, title: "Food and Beverage", imageUrl: "/niches/f&b.jpg", subline: "Content that makes people hungry and keeps them loyal." },
    { id: 10, title: "Technology", imageUrl: "/niches/technology .jpg", subline: "Clear, compelling content for complex products." },
    { id: 11, title: "Jewellery and Luxury Lifestyle", imageUrl: "/niches/jewelleyr .jpg", subline: "Visual storytelling for brands where craft is the whole point." },
    { id: 12, title: "Nightlife and Events", imageUrl: "/niches/event .jpg", subline: "Content that makes people feel like they are missing out if they are not there." }
  ];


  return (
    <Curve backgroundColor={"#f7f2e6"}>
      <div className="bg-[#f7f2e6]">
        <div className="w-full">
          <div className="w-full">
            <div className="relative z-10 bg-[#f7f2e6] lg:py-32 overflow-x-clip">


              <div className="container mx-auto px-6 relative">
                {/* About the Founder Section Header */}
                <div className="relative z-10 bg-transparent pt-28 pb-0">
                  <div className="container mx-auto px-6 relative flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl mb-4 text-center font-['Gilda_Display'] text-[#526855]">
                      The people behind the strategy
                    </h2>
                    <p className="text-[#526855]/85 text-center text-sm md:text-base max-w-xl mx-auto mb-10">
                      We were tired of marketing that looked fine and did nothing.
                      <br />
                      So we built something that actually works.
                    </p>
                  </div>
                </div>

                {/* Founder Section — image left, text right */}
                <FounderRevealBlock
                  imageColor="/Founder/founder.webp"
                  imageBW="/Founder/founder2.webp"
                  imageAlt="Dipani Tibrewala"
                  imagePosition="left"
                >
                  {/* Right — text content */}
                  <div className="flex flex-col gap-6 max-w-xl items-center text-center md:items-start md:text-left lg:items-start lg:text-left xl:items-start xl:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-['Gilda_Display'] text-[#526855] leading-tight">
                      Dipani Tibrewala
                    </h2>

                    <p className="text-[#526855]/90 text-base md:text-lg leading-[1.8] font-sans font-normal text-justify">
                      Hi, I am Dipani. Before Slay the Strategy, I spent 7.5 years in corporate marketing working with Plan.Net TechNest India, Accenture, and Edelman. I have worked on campaigns for Jaguar, BMW, Microsoft, HPE, and Infosys. I know what brand building looks like at scale, and I know exactly what goes wrong when strategy turns into safe, recycled, forgettable content. That is what I left behind in 2024.
                    </p>

                    <p className="text-[#526855]/90 text-base md:text-lg leading-[1.8] font-sans font-normal text-justify">
                      Slay the Strategy is built for founders and brands who are done blending in. We work with D2C brands, creators, luxury names, professional service businesses, schools, and everyone in between who wants a presence that actually reflects how good what they have built really is.
                    </p>

                    <p className="text-[#526855]/90 text-base md:text-lg leading-[1.8] font-sans font-normal text-justify">
                      I oversee strategy personally on every account. We move fast, communicate like real people, and do not deliver work we are not proud to put our name on. If you are here, you already know you want more than what you have been getting. Let us talk.
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
                </FounderRevealBlock>

                {/* Co-Founder Section — text left, image right */}
                <FounderRevealBlock
                  imageColor="/Founder/co founder2.webp"
                  imageBW="/Founder/co-founder1.webp"
                  imageAlt="Srivats Tibrewala"
                  imagePosition="right"
                >
                  {/* Left — text content */}
                  <div className="flex flex-col gap-6 max-w-xl items-center text-center md:items-start md:text-left lg:items-start lg:text-left xl:items-start xl:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-['Gilda_Display'] text-[#526855] leading-tight">
                      Srivats Tibrewala
                    </h2>

                    <p className="text-[#526855]/90 text-base md:text-lg leading-[1.8] font-sans font-normal text-justify">
                      Every great creative operation needs someone who makes sure the whole thing actually runs. That is Srivats.
                    </p>

                    <p className="text-[#526855]/90 text-base md:text-lg leading-[1.8] font-sans font-normal text-justify">
                      Srivats Tibrewala is the Co-Founder of Slay the Strategy and the person responsible for keeping the agency financially sharp and operationally tight. While strategy and creative work happens at the front, Srivats makes sure everything behind it the numbers, the processes, the structure is solid enough to scale.
                    </p>

                    <p className="text-[#526855]/90 text-base md:text-lg leading-[1.8] font-sans font-normal text-justify">
                      He is the reason we move fast without things falling apart. The backbone of everything we build here.
                    </p>

                    {/* Social links */}
                    <div className="flex flex-wrap gap-6 pt-2 justify-center md:justify-start lg:justify-start xl:justify-start">
                      {socialLinks.map((item) => (
                        <a
                          key={`dup-${item.id}`}
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
                </FounderRevealBlock>
              </div>
            </div>

            {/* Works Section — outside any overflow-hidden so sticky stacking works */}
            <WorksSection />

            {/* Niches Section */}
            <div className="bg-[#f7f2e6] px-6 pb-20">
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 mb-20 pt-10">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-['Gilda_Display'] text-[#526855]">
                    Industries we have built in
                  </h2>
                  <div className="mt-4 max-w-xl mx-auto px-6">
                    <p className="text-[#526855]/85 text-center text-sm md:text-base">
                      Real growth requires understanding the specific nuances of your market.
                    </p>
                  </div>
                </div>

                {/* Improved Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
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

                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#f7f2e6] font-['Gilda_Display'] group-hover:text-[#f7f2e6]/90 transition-colors duration-300">
                          {niche.title}
                        </h3>
                        <p className="text-[#f7f2e6]/70 text-sm mt-2 font-sans font-light">
                          {niche.subline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Horizontal Stats Section with Custom Background */}
            <section data-scroll-section className="pt-16 lg:pt-28 pb-24 lg:pb-24 bg-[#f7f2e6] text-[#526855] flex flex-col justify-start">
              <div className={`w-full flex ${isMobilePhone ? "justify-start" : "justify-end"}`}>
                {/* Stats half */}
                <div className={`${isMobilePhone ? "w-full" : "w-1/2 min-w-[320px]"} px-6 md:pr-12 md:pl-4`}>
                  {/* Label */}
                  <p className="text-2xl font-bold text-[#526855] mb-4 lg:mb-8 tracking-wide font-sans">Stats</p>

                  <div className="flex flex-col gap-12 lg:gap-40">
                    {/* Stat Row 1 */}
                    <div className="flex flex-row items-center gap-12 md:gap-20">
                      <div className="w-48 md:w-72 flex-shrink-0">
                        <span className="text-[6rem] md:text-[9rem] lg:text-[10rem] font-bold leading-none tracking-tighter text-[#526855] font-sans" style={{ lineHeight: '0.85' }}>
                          20+
                        </span>
                      </div>
                      <div className="flex items-start pt-2 sm:pt-4">
                        <p className="text-[15px] font-medium leading-relaxed text-[#526855] max-w-[280px] font-sans">
                          Brands worked with across social media, content, performance marketing, and brand identity since 2024
                        </p>
                      </div>
                    </div>

                    {/* Stat Row 2 */}
                    <div className="flex flex-row items-center gap-12 md:gap-20">
                      <div className="w-48 md:w-72 flex-shrink-0">
                        <span className="text-[6rem] md:text-[9rem] lg:text-[10rem] font-bold leading-none tracking-tighter text-[#526855] font-sans" style={{ lineHeight: '0.85' }}>
                          7.5
                        </span>
                      </div>
                      <div className="flex items-start pt-2 sm:pt-4">
                        <p className="text-[15px] font-medium leading-relaxed text-[#526855] max-w-[280px] font-sans">
                          Years of marketing experience across agency and corporate backgrounds before building this
                        </p>
                      </div>
                    </div>

                    {/* Stat Row 3 */}
                    <div className="flex flex-row items-center gap-12 md:gap-20">
                      <div className="w-48 md:w-72 flex-shrink-0">
                        <span className="text-[6rem] md:text-[9rem] lg:text-[10rem] font-bold leading-none tracking-tighter text-[#526855] font-sans" style={{ lineHeight: '0.85' }}>
                          NCR
                        </span>
                      </div>
                      <div className="flex items-start pt-2 sm:pt-4">
                        <p className="text-[15px] font-medium leading-relaxed text-[#526855] max-w-[280px] font-sans">
                          Delhi NCR based. Working with clients across India. Time zones have not stopped us yet.
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
  );
}