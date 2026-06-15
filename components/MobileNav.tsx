"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Services", href: "/services" },
  { id: 3, title: "Works", href: "/works" },
  { id: 4, title: "About", href: "/about" },
  { id: 5, title: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile top bar - visible ONLY on small screens */}
      <div className="fixed top-0 left-0 right-0 h-20 px-6 flex justify-between items-center z-40 md:hidden">
        {/* Logo */}
        <Link href="/" className="relative flex items-center mt-4">
          <div className="w-14 h-14 relative">
            <Image
              src="/logo.webp"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Hamburger button - always on top */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] p-2 text-[#526855] bg-[#f7f2e6] rounded-full shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full screen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#526855] z-50 md:hidden flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-10 w-full px-6">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-5xl font-['Gilda_Display'] transition-colors ${
                        isActive ? "text-[#f7f2e6] font-semibold" : "text-[#f7f2e6]/60 hover:text-[#f7f2e6]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}