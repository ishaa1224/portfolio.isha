"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="w-full bg-[#121212] text-white selection:bg-white/30">
      <div ref={containerRef} className="relative h-[300vh]" style={{ position: "relative" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <Resume />
      <Projects />
      <Footer />
    </main>
  );
}
