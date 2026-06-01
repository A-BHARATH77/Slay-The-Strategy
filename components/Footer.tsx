import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer.png"
          alt="Footer background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light overlay so text is readable */}
        <div className="absolute inset-0 bg-[#f7f2e6]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 md:px-12 pt-20 pb-8" style={{ minHeight: "520px" }}>

        {/* ── Center CTA block ── */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[600px]">
          {/* Logo row */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image src="/logo.webp" alt="Slay the Strategy" fill className="object-contain" />
            </div>
            <span className="text-[#516856] text-sm font-medium font-['Gilda_Display'] tracking-wide">
              Slay the Strategy
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#516856] font-['Gilda_Display']">
            Let&apos;s move forward<br />
            with <span className="text-[#516856]">clarity.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#516856]/65 text-base leading-relaxed font-['Gilda_Display'] max-w-sm">
            Share your goals, and we&apos;ll help shape the direction and guide your brand forward with clarity and care.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 mt-2">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-[#516856] text-[#f7f2e6] text-sm font-medium font-['Gilda_Display'] hover:bg-[#3f5444] transition-colors duration-200"
            >
              Book a Call
            </Link>
            <Link
              href="mailto:hello@slaythestrategy.com"
              className="px-7 py-3 rounded-full bg-[#f7f2e6]/80 border border-[#516856]/30 text-[#516856] text-sm font-medium font-['Gilda_Display'] hover:bg-[#f7f2e6] transition-colors duration-200"
            >
              Email Us
            </Link>
          </div>
        </div>

        {/* ── Link columns ── */}
        <div className="w-full max-w-2xl grid grid-cols-3 gap-8 mt-16">
          {/* Navigation */}
          <div>
            <p className="text-[#516856]/90 text-xs font-bold uppercase tracking-widest mb-4 font-['Gilda_Display']">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Works", href: "/works" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#516856]/75 hover:text-[#516856] text-sm font-bold font-['Gilda_Display'] underline-offset-2 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[#516856]/90 text-xs font-bold uppercase tracking-widest mb-4 font-['Gilda_Display']">
              Connect
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Instagram", href: "https://www.instagram.com/slaythestrategy.agency/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/slay-the-strategy/" },
                { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586631632667" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#516856]/75 hover:text-[#516856] text-sm font-bold font-['Gilda_Display'] underline-offset-2 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[#516856]/90 text-xs font-bold uppercase tracking-widest mb-4 font-['Gilda_Display']">
              Legal
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#516856]/75 hover:text-[#516856] text-sm font-bold font-['Gilda_Display'] underline-offset-2 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="w-full flex items-center justify-between mt-10 pt-4 border-t border-[#516856]/15">
          <p className="text-[#516856]/50 text-xs font-['Gilda_Display']">
            © Slay the Strategy 2025. All rights reserved.
          </p>
          <p className="text-[#516856]/50 text-xs font-['Gilda_Display']">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
