import "@/styles/globals.css";
import { Footer, MobileNav } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import type { NextComponentType } from "next";
import Head from "next/head";

interface MyAppProps extends AppProps {
  Component: NextComponentType;
}

export default function App({
  Component,
  pageProps,
  router,
}: MyAppProps) {
  const hideFooterRoutes = ["/core"];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      <Head>
        <title>Slay The Strategy</title>
      </Head>
      {!isMobile && <Navbar />}
      {isMobile && <MobileNav />}
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      {!hideFooterRoutes.includes(router.route) && <Footer />}
    </>
  );
}
