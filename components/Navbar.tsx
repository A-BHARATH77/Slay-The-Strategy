"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineFundProjectionScreen, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

// Define all navigation items with icons
const navItems = [
  {
    id: 1,
    title: "Services",
    href: "/services",
    icon: MdOutlineDesignServices
  },
  {
    id: 2,
    title: "Works",
    href: "/works",
    icon: AiOutlineFundProjectionScreen
  },
  // Logo placeholder for layout (actual logo is rendered separately)
  {
    id: "logo",
    title: "",
    href: "/",
    icon: null
  },
  {
    id: 3,
    title: "About",
    href: "/about",
    icon: HiOutlineUserGroup
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
    icon: AiOutlineMail
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f7f2e6]/70 backdrop-blur-sm z-50 shadow-sm">
      <div className="grid grid-cols-5 items-center h-16 px-6 max-w-7xl mx-auto">
        {navItems.map((item) => {
          // Handle the logo item differently with increased size
          if (item.id === "logo") {
            return (
              <div key={item.id} className="flex justify-center">
                <Link href="/" className="flex items-center">
                  <div className="w-12 h-16 relative">
                    <Image
                      src="/logo.webp"
                      alt="Logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            );
          }

          // Regular nav items with smaller text
          const isActive = pathname === item.href;
          const IconComponent = item.icon;

          return (
            <div key={item.id} className="flex justify-center">
              <Link
                href={item.href}
                className="flex items-center justify-center relative"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center px-2 py-1 ${isActive ? "text-[#526855]/90" : "text-[#526855]/70 hover:text-[#526855]"
                    }`}
                >
                  {IconComponent && <IconComponent size={16} className="mr-1" />}
                  <span className="font-medium text-xs">{item.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 w-full h-0.5 bg-[#f7f2e6]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}