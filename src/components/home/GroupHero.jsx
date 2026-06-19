import React from "react";
import { motion } from "framer-motion";
import HeivenLogo from "@/components/HeivenLogo";

export default function GroupHero({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Heiven Group — Africa's Industrial Future"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark gradient overlay so logo & text are always legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-32 sm:py-40">
        <div className="max-w-3xl">
          {/* Logo — sky blue on transparent, perfectly visible on dark overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10"
          >
            <HeivenLogo variant="group" size="xl" inverted={false} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight"
          >
            Building Africa's
            <br />
            <span style={{ color: "#29ABE2" }}>Industrial Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl"
          >
            A diversified industrial conglomerate powering progress across Telecommunications,
            Energy, Minerals, and Electronics — driving sustainable growth and innovation
            across the African continent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#sectors"
              className="px-8 py-4 text-white font-semibold text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-all hover:scale-105"
              style={{ backgroundColor: "#29ABE2" }}
            >
              Explore Our Sectors
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
