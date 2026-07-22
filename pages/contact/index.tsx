"use client";
import { useEffect, useRef, useState } from "react";
import { Curve } from "@/components";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    lookingFor: "",
    brandDetails: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div data-scroll-container ref={containerRef}>
      <Curve backgroundColor={"#f7f2e6"}>
        {/* ── Main contact section ── */}
        <section className="min-h-screen w-full bg-[#f7f2e6] flex items-center justify-center px-6 md:px-12 lg:px-16 pt-24 pb-12">
          <div className="max-w-5xl w-full flex flex-col md:flex-row lg:flex-row xl:flex-row items-start justify-between gap-10 md:gap-12 lg:gap-16">
            {/* Left Column: Heading & Text */}
            <div className="text-left w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-lg">
              <span className="text-xs uppercase tracking-[0.2em] text-[#516856]/70 font-semibold block mb-8">
                Let&apos;s build something
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#516856] font-['Gilda_Display'] leading-tight tracking-tight">
                You found us.<br />Now let&apos;s talk.
              </h1>
              <p className="mt-8 md:mt-12 lg:mt-12 xl:mt-12 text-[#516856]/65 text-sm md:text-base lg:text-base xl:text-base font-['Gilda_Display'] max-w-md leading-relaxed">
                We work with brands that are serious about showing up. If that sounds like you, fill in below or reach out directly. We respond within 24 hours.
              </p>

              {/* Social Links */}
              <div className="mt-12 flex flex-col gap-4">
                <a href="https://www.instagram.com/slaythestrategy.agency/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#516856]/80 hover:text-[#516856] transition-colors group">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-['Gilda_Display'] text-lg">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/slay-the-strategy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#516856]/80 hover:text-[#516856] transition-colors group">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-['Gilda_Display'] text-lg">LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61586631632667" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#516856]/80 hover:text-[#516856] transition-colors group">
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-['Gilda_Display'] text-lg">Facebook</span>
                </a>
              </div>
            </div>

            {/* Right Column: Form card */}
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center md:justify-end lg:justify-end xl:justify-end">
              <div
                className="w-full max-w-md rounded-2xl p-6 md:p-8 lg:p-8 xl:p-8 bg-[#f7f2e6]"
                style={{
                  border: "1.5px solid #c9b96a",
                  boxShadow: "0 2px 24px rgba(81,104,86,0.07)",
                }}
              >
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-2xl text-[#516856] font-['Gilda_Display']">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors"
                  />
                </div>

                {/* Brand or company name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Your brand or company name
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Enter brand or company name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors"
                  />
                </div>

                {/* What you are looking for */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    What you are looking for
                  </label>
                  <select
                    name="lookingFor"
                    value={formData.lookingFor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="UGC and Content Shoots">UGC and Content Shoots</option>
                    <option value="AI Generated Videos">AI Generated Videos</option>
                    <option value="Web Design and Development">Web Design and Development</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Founder Led Marketing">Founder Led Marketing</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Tell us about your brand */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Tell us about your brand
                  </label>
                  <textarea
                    name="brandDetails"
                    value={formData.brandDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, goals, etc."
                    rows={3}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors resize-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#516856] font-['Gilda_Display']">
                    Your phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#516856]/20 bg-[#f7f2e6] text-[#516856] placeholder-[#516856]/35 text-sm font-['Gilda_Display'] outline-none focus:border-[#516856]/50 transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1a1a1a] text-[#f7f2e6] text-sm font-medium font-['Gilda_Display'] hover:bg-[#333] transition-colors duration-200 mt-1"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
      </Curve>
    </div>
  );
}
