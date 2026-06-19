import React from "react";
import { motion } from "framer-motion";
import { Globe, Wifi } from "lucide-react";

export default function EcosystemSuggestions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Main Site Button */}
      <motion.a
        href="https://heiven-website.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pointer-events-auto flex items-center gap-2.5 px-6 py-3.5 bg-neutral-950 text-white rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-black/35 font-heading text-sm font-bold tracking-wide border border-neutral-800"
      >
        <Globe className="w-4 h-4 text-sky-400" />
        <span>Main Site</span>
      </motion.a>

      {/* Heiven Fiber Button */}
      <motion.a
        href="https://heiven-sales.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pointer-events-auto flex items-center gap-2.5 px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-sky-500/20 font-heading text-sm font-bold tracking-wide"
      >
        <Wifi className="w-4 h-4" />
        <span>Heiven Fiber</span>
      </motion.a>
    </div>
  );
}
