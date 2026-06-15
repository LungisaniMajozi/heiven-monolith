import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import HeivenLogo from "@/components/HeivenLogo";

const SECTOR_COLORS = {
  "/": "#29ABE2",
  "/technology": "#29ABE2",
  "/energy": "#29ABE2",
  "/minerals": "#29ABE2",
};

const NAV_LINKS = [
  { label: "Group", path: "/" },
  { label: "Technology", path: "/technology" },
  { label: "Energy", path: "/energy" },
  { label: "Minerals", path: "/minerals" },
];

const VARIANT_MAP = {
  "/": "group",
  "/technology": "technology",
  "/energy": "energy",
  "/minerals": "minerals",
};

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSubsite = location.pathname !== "/";
  const accentColor = "#29ABE2";
  const logoVariant = VARIANT_MAP[location.pathname] || "group";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo — SVG, transparent bg, sky blue */}
            <Link to="/" className="flex items-center shrink-0">
              <HeivenLogo
                variant={logoVariant}
                size="md"
                inverted={!scrolled}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
                    style={{
                      color: isActive
                        ? accentColor
                        : scrolled
                          ? "#1A1A1A"
                          : "#FFFFFF",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                        style={{ backgroundColor: accentColor }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Back to Group (sub-site) */}
            <div className="hidden md:flex items-center gap-4">
              {isSubsite && (
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: accentColor,
                    color: "#fff",
                  }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to Group
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            >
              {mobileOpen ? (
                <X
                  className="w-6 h-6"
                  style={{ color: scrolled ? "#1A1A1A" : "#fff" }}
                />
              ) : (
                <Menu
                  className="w-6 h-6"
                  style={{ color: scrolled ? "#1A1A1A" : "#fff" }}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="w-full text-center py-4 text-lg font-semibold tracking-wide uppercase rounded-xl transition-all"
                    style={{
                      color: isActive ? "#fff" : "#1A1A1A",
                      backgroundColor: isActive ? accentColor : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {isSubsite && (
                <Link
                  to="/"
                  className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                  style={{ backgroundColor: accentColor }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Return to Group
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
