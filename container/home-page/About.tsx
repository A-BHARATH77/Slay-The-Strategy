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
      <h1 className='text-center text-6xl md:text-8xl font-bold pt-20 pb-10 text-[#526855]'>Works</h1>
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


  // Function to open popup for a specific service
  const openPopup = (serviceId: number) => {
    setActivePopup(serviceId.toString());
  };

  // Function to close popup
  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <section className="w-full bg-[#f7f2e6] py-32 px-8 sm:px-12 lg:px-16 relative overflow-visible">
      {/* Visible Ambient Background Bubbles */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#526855]/20 rounded-full blur-[80px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[#526855]/25 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      <div className="absolute top-[40%] right-[5%] w-72 h-72 bg-[#4a5d4d]/20 rounded-full blur-[90px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-[5%] left-[10%] w-96 h-96 bg-[#526855]/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      {/* Random Static Green Bubbles (Spaced out to prevent overlap) */}
      <div className="absolute top-[30%] left-[5%] w-32 h-32 bg-[#526855]/40 rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[45%] right-[10%] w-20 h-20 bg-[#526855]/50 rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[60%] left-[15%] w-12 h-12 bg-[#526855]/60 rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[75%] right-[20%] w-40 h-40 bg-[#526855]/30 rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[85%] left-[30%] w-16 h-16 bg-[#526855]/50 rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-[5%] right-[40%] w-14 h-14 bg-[#526855]/40 rounded-full z-0 pointer-events-none"></div>

      {/* Header Section - Reduced vertical spacing */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-12">
        {/* Header-Specific Random Bubbles (Strictly non-overlapping) */}
        <div className="absolute -top-24 -left-32 w-48 h-48 bg-[#526855]/30 rounded-full z-[-1] pointer-events-none"></div>
        <div className="absolute -top-12 -right-24 w-20 h-20 bg-[#526855]/40 rounded-full z-[-1] pointer-events-none"></div>
        <div className="absolute top-1/2 -left-48 w-20 h-20 bg-[#526855]/50 rounded-full z-[-1] pointer-events-none"></div>
        <div className="absolute top-1/3 -right-48 w-24 h-24 bg-[#526855]/45 rounded-full z-[-1] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-16 w-28 h-28 bg-[#526855]/35 rounded-full z-[-1] pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-32 w-56 h-56 bg-[#526855]/25 rounded-full z-[-1] pointer-events-none"></div>

        {/*<div className="mb-12">
          <span className="px-6 py-2 bg-[#f7f2e6] tracking-tight font-bold rounded-full text-sm text-[#526855] opacity-100 border border-gray-800 uppercase">
            Elevate Your Digital Presence
          </span>
        </div>*/}

        <h1 className="font-['Gilda_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-12 tracking-tight leading-tight text-[#526855] opacity-100 text-center relative z-10">
          Welcome to
          <span className="block sm:inline text-[#526855] italic"> Slay the Strategy</span>
        </h1>

        <p className="text-[#526855] opacity-100 text-2xl max-w-2xl mx-auto text-left font-light leading-relaxed mt-6 font-['Gilda_Display'] relative z-10">
          We craft bespoke social media strategies, visual identities, optimization solutions, and forward-thinking digital strategies that elevate your brand's presence.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-8 relative z-10">
          <a
            href="/contact"
            className="relative inline-flex items-center gap-2 px-10 py-4 bg-[#526855] text-[#f7f2e6] font-light rounded-full !shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:!shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:!-translate-y-2 hover:scale-[1.02] transform transition-all duration-500 ease-out group font-['Gilda_Display']"
          >
            Start a Project <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="/services"
            className="relative inline-flex items-center gap-2 px-10 py-4 bg-[#526855] text-[#f7f2e6] font-light rounded-full !shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:!shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:!-translate-y-2 hover:scale-[1.02] transform transition-all duration-500 ease-out group font-['Gilda_Display']"
          >
            Explore Service
          </a>
        </div>
      </div>

      {/*Services section here*/}
      <ServicesSection />


      {/* About the Founder Section Header */}
      <div className="relative z-10 bg-transparent pt-10 pb-0 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl md:text-5xl lg:text-7xl mb-0 text-center font-['Gilda_Display'] text-[#526855]">
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
            <p className="text-[#526855] text-base font-light font-['Gilda_Display'] leading-relaxed">
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

            {/* Know More Button */}
            <div className="pt-8 flex justify-center md:justify-start lg:justify-start xl:justify-start">
              <Link
                href="/about"
                className="relative inline-flex items-center gap-2 px-10 py-4 bg-[#526855] text-[#f7f2e6] font-light rounded-full !shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:!shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:!-translate-y-2 hover:scale-[1.02] transform transition-all duration-500 ease-out group font-['Gilda_Display']"
              >
                Know More
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Works Section — inline stacking cards (no ReactLenis root, uses window scroll) */}
      <WorksSection />


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

      {/* View All Button */}
      <div className="mt-12 text-center">

      </div>
    </section>
  );
}