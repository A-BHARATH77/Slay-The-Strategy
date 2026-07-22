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

// Overlay panel animation: clip-path vertical wipe
const overlayVariants = {
  hidden: {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

// Individual nav item animation
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile top bar - visible ONLY on small screens */}
      <div className="fixed top-0 left-0 right-0 h-20 px-6 flex justify-between items-center z-40 md:hidden pointer-events-none">
        {/* Logo */}
        <Link href="/" className="relative flex items-center mt-4 pointer-events-auto">
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

      {/* Hamburger button — icon cross-fades between Menu and X */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] p-2 text-[#526855] bg-[#f7f2e6] rounded-full shadow-lg md:hidden pointer-events-auto overflow-hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="block"
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="block"
            >
              <Menu size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Full screen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-[#526855] z-50 md:hidden flex flex-col items-center justify-center pt-20 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-10 w-full px-6 py-10 my-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        if (isActive) setIsOpen(false);
                      }}
                      className={`block w-full text-center py-4 text-5xl font-['Gilda_Display'] transition-colors ${
                        isActive
                          ? "text-[#f7f2e6] font-semibold"
                          : "text-[#f7f2e6]/60 active:text-[#f7f2e6] md:hover:text-[#f7f2e6]"
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