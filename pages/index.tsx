"use client";

import { Curve } from "@/components";
import { About, Clients, Hero, Projects } from "@/container";

export default function Home() {
  // No Locomotive Scroll initialization

  return (
    <>
      <div id="main" className="overflow-visible"> {/* Use overflow-visible for natural scrolling */}
        <Curve backgroundColor={"#526855"}>
          <Hero />
          <About />
          <Projects />
          <Clients />

        </Curve>
      </div>
    </>
  );
}