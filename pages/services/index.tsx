"use client";
import { useEffect } from "react";
import { Instagram, Linkedin, ChevronRight, Facebook } from "lucide-react";
import Link from "next/link";
import Expertise from "@/components/Expertise";
import { Clients } from "@/container";

const socialLinks = [
  { id: 1, title: "Instagram", href: " https://www.instagram.com/slaythestrategy.agency/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: " https://www.linkedin.com/in/dipani-handa-a7460066/", icon: <Linkedin size={20} /> },
  { id: 3, title: "Facebook", href: "https://www.facebook.com/profile.php?id=61586631632667", icon: <Facebook size={20} /> },
];

export default function About() {

  useEffect(() => {
    // If you still want to manually initialize Locomotive Scroll
    // (though using LocomotiveScrollProvider is recommended)
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
       
      });
      // Optionally, you can destroy the instance when the component unmounts
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  return (
    <>
      <section className="w-full bg-[#f7f2e6] py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
        {/* Visible Ambient Background Bubbles */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#526855]/20 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[#526855]/25 rounded-full blur-[100px] z-0 pointer-events-none"></div>
        <div className="absolute top-[40%] right-[5%] w-72 h-72 bg-[#4a5d4d]/20 rounded-full blur-[90px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-[5%] left-[10%] w-96 h-96 bg-[#526855]/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        
        {/* Header Section - Added more vertical spacing */}

        {/* Header Section - Added more vertical spacing */}
        <div className="text-center max-w-4xl mx-auto relative z-10 mb-16">
        <div className="mb-12">
          <span className="px-6 py-2 bg-[#f7f2e6] tracking-tight font-bold rounded-full text-sm text-[#526855] opacity-100 border border-gray-800 uppercase">
            Elevate Your Digital Presence
          </span>
        </div>

        <h1 className="font-['Gilda_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-12 tracking-tight leading-tight text-[#526855] opacity-100 text-center">
            Welcome to
            <span className="block sm:inline text-[#526855]"> Slay The Strategy</span>
          </h1>

          <p className="text-[#526855] opacity-100 text-2xl max-w-2xl mx-auto font-light leading-relaxed mt-6 font-['Gilda_Display']">
            We craft bespoke social media strategies, visual identities, optimization solutions, and forward-thinking digital strategies that elevate your brand&apos;s presence.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-10 py-4 bg-[#526855] text-[#f7f2e6] font-light rounded-full !shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:!shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:!-translate-y-2 hover:scale-[1.02] transform transition-all duration-500 ease-out font-['Gilda_Display'] z-20"
            >
              Start a Project <ChevronRight size={16} />
            </Link>
            <Link
              href="/services"
              className="relative inline-flex items-center justify-center px-10 py-4 bg-[#526855] text-[#f7f2e6] opacity-100 font-light rounded-full !shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:!shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:!-translate-y-2 hover:scale-[1.02] transform transition-all duration-500 ease-out border border-gray-800 font-['Gilda_Display'] z-20"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <Expertise />

        {/* Added Testimonial Section */}
        <div className="relative z-10 mb-40 -mx-8 sm:-mx-12 lg:-mx-16">
          <Clients />
        </div>

        {/* Social Links Section - More elegant spacing */}
        <div className="pt-24 border-t border-gray-400 relative z-10">
          <h2 className="text-2xl font-normal mb-16 text-center font-['Gilda_Display'] text-[#526855] opacity-100">
            Connect With Us
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#526855] opacity-70 hover:text-red-400 font-light transition-all duration-300 gap-2"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div>

      </div>
    </>
  );
}