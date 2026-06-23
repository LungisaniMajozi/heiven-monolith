import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import HeivenLogo from "@/components/HeivenLogo";

// Each sector: deep dark overlay with the logo sky-blue colour as the tint
const SECTORS = [
  {
    name: "Heiven Telecoms",
    variant: "telecoms",
    slogan:
      "Connecting Africa Through Innovation, Infrastructure & Telecoms.",
    tint: "rgba(41, 171, 226, 0.75)",
    path: "/telecoms",
  },
  {
    name: "Heiven Energy",
    variant: "energy",
    slogan: "Empowering Tomorrow Through Energy Today.",
    tint: "rgba(41, 171, 226, 0.70)",
    path: "/energy",
  },
  {
    name: "Heiven Minerals",
    variant: "minerals",
    slogan: "Unlocking Africa's Mineral Wealth Responsibly.",
    tint: "rgba(20, 80, 120, 0.80)",
    path: "/minerals",
  },
  {
    name: "Heiven Electronics",
    variant: "electronics",
    slogan: "Engineering Innovation. Manufacturing Excellence.",
    tint: "rgba(41, 171, 226, 0.75)",
    path: "/electronics",
  },
  {
    name: "Heiven Shipping",
    variant: "shipping",
    slogan: "Moving Trade. Connecting Markets. Delivering Excellence.",
    tint: "rgba(20, 80, 120, 0.75)",
    path: "/shipping",
  },
];

export default function SectorPortals({
  telecomsImage,
  energyImage,
  mineralsImage,
  electronicsImage,
  shippingImage,
}) {
  const images = [
    telecomsImage,
    energyImage,
    mineralsImage,
    electronicsImage,
    shippingImage,
  ];

  return (
    <section id="sectors" className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          label="Our Sectors"
          title="Five Industries. One Vision."
          description="From telecommunications and SMT electronics manufacturing to shipping, sustainable energy, and mineral resources — Heiven Group drives progress across Africa's most vital sectors."
          color="#29ABE2"
        />

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {SECTORS.map((sector, i) => (
            <SectorCard
              key={sector.path}
              sector={sector}
              image={images[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCard({ sector, image, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        to={sector.path}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative block h-[28rem] sm:h-[32rem] rounded-2xl overflow-hidden"
      >
        {/* Background Workspace Image */}
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={image}
            alt={sector.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Sky-blue brand tint overlay — always present, deeper on hover */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: `linear-gradient(to top, ${sector.tint} 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)`,
            opacity: hovered ? 1 : 0.85,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
          {/* Logo — SVG, transparent bg, inverted (white) for dark overlays */}
          <HeivenLogo
            variant={sector.variant}
            size="sm"
            inverted={true}
            className="mb-4"
          />
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
            {sector.slogan}
          </p>
          <div className="flex items-center gap-2 text-white font-semibold text-sm tracking-wider uppercase">
            <span>Explore</span>
            <motion.div
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
