"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20% visible, fades out by 30%
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Section 2: fades in 20%-30%, visible 30%-50%, fades out 50%-60%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [100, -100]);

  // Section 3: fades in 50%-60%, visible 60%-90%, fades out 90%-100%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.9, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 1], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="text-center drop-shadow-2xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            ISHA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            My Work Flow.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight max-w-2xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          I build digital experiences.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 text-right"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight max-w-2xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Bridging design and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
