import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import HeivenLogo from "@/components/HeivenLogo";

const BLUE = "#29ABE2";

export default function VisionMission({ vision, mission, teamImage, variant }) {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Workspace image with sky-blue brand overlay badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden h-[24rem] sm:h-[28rem] lg:h-[32rem]"
          >
            <img
              src={teamImage}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Dark gradient to keep image natural */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            {/* Branded logo badge in the bottom-left corner of the image */}
            <div
              className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2"
              style={{
                backgroundColor: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(8px)",
              }}
            >
              <HeivenLogo variant={variant} size="sm" inverted={false} />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: BLUE + "18" }}
                >
                  <Eye className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <h3
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: BLUE }}
                >
                  Vision
                </h3>
              </div>
              <p className="text-lg sm:text-xl font-heading font-bold text-heiven-charcoal leading-relaxed">
                {vision}
              </p>
            </motion.div>

            <div className="h-px bg-neutral-100" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: BLUE + "18" }}
                >
                  <Target className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <h3
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: BLUE }}
                >
                  Mission
                </h3>
              </div>
              <p className="text-lg sm:text-xl font-heading font-bold text-heiven-charcoal leading-relaxed">
                {mission}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
