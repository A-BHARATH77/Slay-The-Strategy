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

    imageUrl: "/i1.jpg"
  },
  {
    id: 2,
    title: "Interior Design Houses",

    imageUrl: "/i2.jpg"
  },
  {
    id: 3,
    title: "Events",

    imageUrl: "/i3.jpg"
  },
  {
    id: 4,
    title: "D2C",

    imageUrl: "/i4.jpg"
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
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'rock.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#f7f2e6',
  },
  {
    title: 'Anvi Jain / Law in Heels ',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes—so French photographer Clément.',
    src: 'tree.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#f7f2e6',
  },
  {
    title: 'Mahru',
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal.",
    src: 'water.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
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
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 mt-4">
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

export default function About() {
  // State for controlling which service popup is showing
  const [activePopup, setActivePopup] = useState<string | null>(null);
  return (
    <section className="w-full bg-[#f7f2e6] py-32 px-0 sm:px-12 lg:px-16 relative overflow-clip">

      {/* ScrollRevealParagraph Intro Header */}
      <ScrollRevealParagraph
        theme="light"
        text="Most brands show up online looking like everyone else. Same formats, same captions, same energy. We are the agency that fixes that. Slay the Strategy is a full service social media and digital marketing agency for founders and brands who want to be aesthetic, intentional, and impossible to scroll past. We do not do average. We do not do forgettable. We build things worth looking at"
        sectionLabel="/ Elevate Your Digital Presence"
        floatingImageSrc="/aboutImg.webp"
        floatingImageAlt="About Slay the Strategy"
        highlightWords={[]}
        chipAfter={{
          "energy.": "/sms.png",
          "fixes": "/vid.png",
          "forgettable.": "/opt.png"
        }}
      />

      {/*Services section here*/}
      <ServicesSection />


      {/* About the Founder Section Header */}
      <div className="relative z-10 bg-transparent pt-0 pb-0">
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl md:text-5xl lg:text-7xl mb-10 text-center font-['Gilda_Display'] text-[#526855] -mt-10">
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

      {/* Works Section — inline stacking cards (no ReactLenis root, uses window scroll) */}
      <WorksSection />
    </section>
  );
}