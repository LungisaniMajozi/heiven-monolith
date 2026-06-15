import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertOctagon, ArrowLeft } from "lucide-react";
import HeivenLogo from "@/components/HeivenLogo";
import PageTransition from "@/components/shared/PageTransition";

export default function PageNotFound() {
  return (
    <PageTransition color="#111827">
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

        {/* Top Header */}
        <header className="max-w-[120rem] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 h-20 flex items-center relative z-20">
          <Link to="/" className="flex items-center">
            <HeivenLogo variant="group" size="md" inverted={true} />
          </Link>
        </header>

        {/* Main 404 Content */}
        <main className="flex-grow flex items-center justify-center px-4 relative z-10">
          <div className="max-w-xl w-full text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 inline-flex p-4 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl shadow-black/40 text-sky-400"
            >
              <AlertOctagon className="w-12 h-12 stroke-[1.5]" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-7xl sm:text-8xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 font-heading"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold tracking-wide uppercase text-sky-400 mb-6 font-heading"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Route Displaced / Page Not Found
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-400 text-base sm:text-lg mb-10 leading-relaxed font-body"
            >
              The digital gateway or page you are trying to reach does not exist or has been relocated within the Heiven monolith.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
                Return to Group Portal
              </Link>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-neutral-900 text-center text-xs tracking-wider uppercase text-neutral-600 font-body">
          &copy; {new Date().getFullYear()} Heiven Group. All rights reserved.
        </footer>
      </div>
    </PageTransition>
  );
}
