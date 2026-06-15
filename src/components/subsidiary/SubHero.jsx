import React from "react";
import { motion } from "framer-motion";
import HeivenLogo from "@/components/HeivenLogo";

export default function SubHero({ variant, slogan, description, heroImage }) {
  const BLUE = "#29ABE2";

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background workspace image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Dark charcoal overlay with a sky-blue top glow — keeps image visible but clearly branded */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Subtle blue brand wash on the left */}
        <div
          className="absolute inset-y-0 left-0 w-2/3"
          style={{
            background: `linear-gradient(to right, ${BLUE}22 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-32 sm:py-40">
        <div className="max-w-3xl">
          {/* SVG logo — sky blue on transparent bg, always legible on dark overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10"
          >
            <HeivenLogo variant={variant} size="lg" inverted={false} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-display font-extrabold text-white leading-tight"
          >
            {slogan}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-10">
            {variant === "technology" ? (
              <>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  href="https://heiven-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 text-white font-semibold text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-transform"
                  style={{ backgroundColor: BLUE }}
                >
                  Heiven Telecoms
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  href="https://heiven-sales.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 text-white font-semibold text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-transform border border-white/20 hover:border-white/40"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  Heiven Fiber
                </motion.a>
              </>
            ) : (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                href="#services"
                className="inline-block px-8 py-4 text-white font-semibold text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-transform"
                style={{ backgroundColor: BLUE }}
              >
                Our Services
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
