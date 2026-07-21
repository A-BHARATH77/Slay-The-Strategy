"use client";
import { useEffect } from "react";
import { Instagram, Linkedin, ChevronRight, Facebook } from "lucide-react";
import Link from "next/link";
import Expertise from "@/components/Expertise";
import { Clients } from "@/container";
import { ServicesSection } from "@/components/ServicesSection";

import ScrollRevealParagraph from "@/components/Intro";

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
      <section className="w-full bg-[#f7f2e6] pt-48 pb-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden">

        {/* ScrollRevealParagraph Intro Header */}
        <ScrollRevealParagraph
          theme="light"
          text="Stop posting. Start positioning. Your audience doesn't need more content. They need a reason to remember your brand. We work with ambitious brands that want more than likes. From brand strategy and content creation to Meta Ads and consulting, we build marketing systems that attract attention and drive revenue. Because real growth starts long before you hit &quot;Post.&quot;"
          sectionLabel="/ Elevate Your Digital Presence"
          floatingImageSrc="/aboutImg.webp"
          floatingImageAlt="About Slay the Strategy"
          highlightWords={[]}
          chipAfter={{
            "positioning.": "/sms.png",
            "likes.": "/vid.png",
            "revenue.": "/opt.png"
          }}
        />

        {/* Services Section */}
        <ServicesSection />


        {/* Social Links Section - More elegant spacing */}
        <div className="pt-13 relative z-10">
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

      {/* Testimonial Section — sticky horizontal scroll */}
      <Clients isServicesPage={true} />
    </>
  );
}