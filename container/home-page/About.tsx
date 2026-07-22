"use client";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction, useState, useEffect, useRef } from "react";
import { Instagram, Linkedin, Facebook, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Expertise from "@/components/Expertise";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";


const socialLinks = [
  { id: 1, title: "Instagram", href: " https://www.instagram.com/slaythestrategy.agency/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "  https://www.linkedin.com/in/dipani-handa-a7460066/", icon: <Linkedin size={20} /> },
  { id: 3, title: "Facebook", href: "https://www.facebook.com/profile.php?id=61586631632667", icon: <Facebook size={20} /> },

];

const services = [
  {
    id: 1,
    title: "Social Media Suite",
    description:
      "Comprehensive management and content creation for all your social platforms. We craft engaging narratives that connect with your audience through carefully curated visuals and purposeful messaging.",
    color: "#ff2d20", // Red-600 color
    src: "/sms.png",
    bulletins: [
      "Social Media Management (SMM)",
      "Content Creation (Text, Images, Reels)",
      "Calendar Planning & Scheduling",
      "Community Engagement & DM Handling",
      "Hashtag & Trend Research",
      "Analytics & Reporting",
    ],
  },
  {
    id: 2,
    title: "Visual Identity",
    description:
      "Crafting distinctive brand aesthetics that resonate with your target audience. Our design philosophy embraces elegance, intention, and the subtle art of visual storytelling that captivates and endures.",
    color: "#ff2d20",
    src: "/vid.png",
    bulletins: [
      "Logo Design & Brand Marks",
      "Typography & Color Palette Selection",
      "Brand Guidelines Documentation",
      "Business Card & Stationery Design",
      "Social Media Branding Templates",
      "Moodboards & Visual Style Guides",
    ],
  },
  {
    id: 3,
    title: "Optimization Hub",
    description:
      "Data-driven strategies to maximize engagement and conversion rates. We leverage analytical insights to refine your digital presence, ensuring your content performs optimally across all touchpoints.",
    color: "#ff2d20",
    src: "/opt.png",
    bulletins: [
      "Engagement & Conversion Analysis",
      "SEO & Hashtag Optimization",
      "A/B Testing of Content & Ads",
      "Growth Tracking & KPI Reports",
      "Funnel Optimization Strategy",
      "Social Media Algorithm Insights",
    ],
  },
  {
    id: 4,
    title: "Website Development",
    description:
      "Forward-thinking approaches to position your brand for long-term success. We develop comprehensive roadmaps that align with your business objectives while maintaining flexibility for emerging trends.",
    color: "#ff2d20",
    src: "/web.png",
    bulletins: [
      "Responsive Website Design",
      "Bespoke & Creative Websites",
      "Frontend & Backend Development",
      "E-Commerce (Shopify)",
      "SEO Optimization",
      "Performance & Speed Optimization",
      "UI/UX Best Practices Implementation",
    ],
  },
  {
    id: 5,
    title: "Digital Strategy & Beyond",
    description:
      "Forward-thinking approaches to position your brand for long-term success. We develop comprehensive roadmaps that align with your business objectives while maintaining flexibility for emerging trends.",
    color: "#ff2d20",
    src: "/ds.png",
    bulletins: [
      "Full Digital Marketing Roadmap",
      "Competitive & Market Analysis",
      "Paid Campaign Strategy (Google, Meta)",
      "Influencer & Affiliate Strategy",
      "Future Trend Adaptability Planning",
      "Cross-Platform Integration Blueprint",
    ],
  },
];

const nicheData = [
  {
    id: 1,
    title: "Automation",
    imageUrl: "/Four/IMG_6769.webp"
  },
  {
    id: 2,
    title: "Interior Design Houses",
    imageUrl: "/Four/IMG_6773.webp"
  },
  {
    id: 3,
    title: "Events",
    imageUrl: "/Four/IMG_6775.webp"
  },
  {
    id: 4,
    title: "D2C",
    imageUrl: "/Four/_DSC6551.webp"
  },
  {
    id: 5,
    title: "Food & Beverage Brands",

    imageUrl: "/i5.jpg"
  },
  {
    id: 6,
    title: "Education",

    imageUrl: "/ch.png"
  },
  {
    id: 7,
    title: "Fashion",

    imageUrl: "/i1.jpg"
  },
  {
    id: 8,
    title: "Technology",

    imageUrl: "/i2.jpg"
  },
  {
    id: 9,
    title: "Corporate",

    imageUrl: "/i3.jpg"
  },
  {
    id: 10,
    title: "Influencer",

    imageUrl: "/i4.jpg"
  }
];

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

// ─── ServicesSection: ported from services.html ──────────────────────────────
import { ServicesSection } from "@/components/ServicesSection";
// ─────────────────────────────────────────────────────────────────────────────

import ScrollRevealParagraph from "@/components/Intro";

// ServicePopup component for showing bulletins
const ServicePopup = ({ service, isOpen, onClose }: { service: any, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-red-600/30 rounded-xl w-full max-w-md relative overflow-hidden animate-fadeIn">
        {/* Header with gradient */}
        <div className="bg-black p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#f7f2e6] hover:text-[#f7f2e6] transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="font-['Gilda_Display'] text-3xl text-[#f7f2e6]">{service.title}</h3>
        </div>

        {/* Bulletins section */}
        <div className="p-8">
          <h4 className="text-[#f7f2e6] mb-4 font-['Gilda_Display'] text-xl">Services Include:</h4>
          <ul className="space-y-4">
            {service.bulletins.map((item: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 h-4 w-4 rounded-full bg-red-500 flex-shrink-0"></div>
                <p className="text-[#f7f2e6] font-['Montserrat'] text-lg">{item}</p>
              </li>
            ))}
          </ul>

          {/* Action button */}
          <div className="mt-8 flex justify-center">

          </div>
        </div>
      </div>
    </div>
  );
};

// ─── FounderRevealSection: scroll-pinned B&W → colour reveal ─────────────────
interface FounderRevealProps {
  imageColor: string;
  imageBW: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  label: string;
  name: string;
  bio: string;
}

const FounderRevealSection = ({
  imageColor,
  imageBW,
  imageAlt,
  imagePosition,
  label,
  name,
  bio,
}: FounderRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // scrollYProgress: 0→1 as the 200vh container scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Wavy polygon clip: sine-wave bottom edge travels upward → water-splash reveal
  const clipPath = useTransform(scrollYProgress, (p: number) => {
    if (p <= 0) return "polygon(0% 0%, 100% 0%, 100% 110%, 0% 110%)";
    if (p >= 1) return "polygon(0% 0%, 100% 0%, 100% -10%, 0% -10%)";

    // baseY: wave front travels from 105% (below image) to -25% (above image)
    const baseY = 105 - p * 130;
    // Amplitude peaks in the middle of the animation (splash feel)
    const amp = 14 * Math.sin(p * Math.PI);
    // Phase shifts as scroll progresses — makes the wave appear to ripple/move
    const phase = p * Math.PI * 2.5;
    const numPoints = 20;

    // Build right-to-left wavy bottom edge
    const wavePoints = Array.from({ length: numPoints + 1 }, (_, i) => {
      const t = i / numPoints; // 0 → 1, right to left
      const x = (1 - t) * 100;
      const waveY = Math.sin(t * Math.PI * 4 + phase) * amp;
      return `${x.toFixed(2)}% ${(baseY + waveY).toFixed(2)}%`;
    });

    // Polygon: full top edge + wavy bottom edge
    return `polygon(0% 0%, 100% 0%, ${wavePoints.join(", ")})`;
  });

  const imageBlock = imagePosition === "left" ? (
    <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 xl:w-96 mx-auto md:mx-0 mb-8 md:mb-0 relative">
      {/* Colour image — base layer */}
      <img src={imageColor} alt={imageAlt} className="w-full h-auto object-cover rounded-2xl shadow-xl" />
      {/* B&W overlay — clips away upward on scroll */}
      <motion.img
        src={imageBW}
        alt={imageAlt}
        style={{ clipPath }}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>
  ) : (
    <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 xl:w-96 mx-auto md:mx-0 mt-8 md:mt-0 relative">
      <img src={imageColor} alt={imageAlt} className="w-full h-auto object-cover rounded-2xl shadow-xl" />
      <motion.img
        src={imageBW}
        alt={imageAlt}
        style={{ clipPath }}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col gap-4 max-w-xl items-center text-center md:items-start md:text-left lg:items-start lg:text-left xl:items-start xl:text-left">
      <span className="text-[#BCA374] text-xs font-semibold uppercase tracking-[0.2em] font-sans">{label}</span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-['Gilda_Display'] text-[#526855] leading-tight">{name}</h2>
      <p className="text-[#526855]/90 text-base md:text-lg leading-[1.8] font-sans font-normal text-justify">{bio}</p>
    </div>
  );

  return (
    // 200vh tall container — gives scroll room to drive the reveal animation
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky panel — pins to viewport top while reveal plays, then releases */}
      <div className="sticky top-0 h-screen flex items-center bg-[#f7f2e6]">
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row lg:flex-row xl:flex-row items-start justify-between md:gap-12 lg:gap-16 xl:gap-24">
          {imagePosition === "left" ? (
            <>{imageBlock}{textBlock}</>
          ) : (
            <>{textBlock}{imageBlock}</>
          )}
        </div>
      </div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  // State for controlling which service popup is showing
  const [activePopup, setActivePopup] = useState<string | null>(null);
  return (
    <section className="w-full bg-[#f7f2e6] py-32 px-0 sm:px-12 lg:px-16 relative overflow-x-clip">

      {/* ScrollRevealParagraph Intro Header */}
      <ScrollRevealParagraph
        theme="light"
        text="Stop posting. Start positioning. Your audience doesn't need more content. They need a reason to remember your brand. We work with ambitious brands that want more than likes. From brand strategy and content creation to Meta Ads and consulting, we build marketing systems that attract attention and drive revenue. Because real growth starts long before you hit &quot;Post.&quot;"
        sectionLabel="/ Elevate Your Digital Presence"
      />

      {/*Services section here*/}
      <ServicesSection />


      {/* About the Founder Section Header */}
      <div className="relative z-10 bg-transparent pb-0 flex flex-col items-center w-full px-0 sm:px-12 lg:px-16">
        <div className="container mx-auto px-4 sm:px-6 relative flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl mb-4 text-center font-['Gilda_Display'] text-[#526855]">
            The people behind the strategy
          </h2>
          <p className="text-[#526855]/85 text-center text-sm md:text-base max-w-xl mx-auto mb-10">
            We were tired of marketing that looked fine and did nothing.
            <br />
            So we built something that actually works.
          </p>
        </div>

        {/* Right aligned About Us button */}
        <div className="mt-6 md:absolute md:right-[6%] md:top-1/2 md:-translate-y-1/2 md:mt-4 lg:absolute lg:right-[6%] lg:top-1/2 lg:-translate-y-1/2 lg:mt-4 xl:absolute xl:right-[6%] xl:top-1/2 xl:-translate-y-1/2 xl:mt-4">
          <Link
            href="/about"
            className="relative inline-flex items-center overflow-hidden px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wider uppercase text-[#f7f2e6] bg-[#576E47] hover:bg-[#3d5234] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(87,110,71,0.3)] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Founder Section — scroll-pinned B&W → colour reveal */}
      <FounderRevealSection
        imageColor="/Founder/founder.webp"
        imageBW="/Founder/founder2.webp"
        imageAlt="Dipani Tibrewala"
        imagePosition="left"
        label="Founder and CEO"
        name="Dipani Tibrewala"
        bio="7.5 years in corporate marketing across Plan.Net TechNest India, Accenture, and Edelman. Campaigns for Jaguar, BMW, Microsoft, HPE, and Infosys. Left all of that to build the agency she always wished existed. Oversees strategy and creative on every single account personally."
      />

      {/* Co-Founder Section — scroll-pinned B&W → colour reveal */}
      <FounderRevealSection
        imageColor="/Founder/co founder2.webp"
        imageBW="/Founder/co-founder1.webp"
        imageAlt="Srivats Tibrewala"
        imagePosition="right"
        label="Co-Founder"
        name="Srivats Tibrewala"
        bio="The backbone of Slay the Strategy. Handles finance, operations, and everything that keeps the agency running sharp. The reason we can move fast without things falling apart."
      />

      {/* Works Section — inline stacking cards (no ReactLenis root, uses window scroll) */}
      <WorksSection />
    </section>
  );
}