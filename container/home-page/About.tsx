"use client";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from "react";
import { Instagram, Linkedin, Facebook, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Expertise from "@/components/Expertise";


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
    <section className="w-full bg-[#f7f2e6] py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
      {/* Refined background elements with reduced opacity */}

      {/* Header Section - Reduced vertical spacing */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-12">
        <div className="mb-12">
          <span className="px-6 py-2 bg-[#f7f2e6] tracking-tight font-bold rounded-full text-sm text-[#526855] opacity-100 border border-gray-800 uppercase">
            Elevate Your Digital Presence
          </span>
        </div>

        <h1 className="font-['Gilda_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-12 tracking-tight leading-tight text-[#526855] opacity-100 text-center">
          Welcome to
          <span className="block sm:inline text-[#526855] italic"> Slay the Strategy</span>
        </h1>

        <p className="text-[#526855] opacity-100 text-2xl max-w-2xl mx-auto font-light leading-relaxed mt-6 font-['Gilda_Display']">
          We craft bespoke social media strategies, visual identities, optimization solutions, and forward-thinking digital strategies that elevate your brand's presence.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <a
            href="/contact"
            className="px-10 py-4 bg-[#526855] text-[#f7f2e6] font-light rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group font-['Gilda_Display']"
          >
            Start a Project <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="/services"
            className="px-10 py-4 bg-[#526855] text-[#f7f2e6] opacity-100 font-light rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-800 shadow-sm group font-['Gilda_Display']"
          >
            Explore Services
          </a>
        </div>
      </div>

      <Expertise />


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
                className="px-8 py-3 rounded-full bg-[#526855] text-[#f7f2e6] hover:bg-[#3f5444] transition-colors duration-300 font-['Gilda_Display'] text-sm font-medium"
              >
                Know More
              </Link>
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

      {/* View All Button */}
      <div className="mt-12 text-center">

      </div>
    </section>
  );
}