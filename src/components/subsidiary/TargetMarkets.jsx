import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function TargetMarkets({ markets, accentColor }) {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: accentColor }}
          >
            Target Markets
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-heiven-charcoal">
            Who We Serve
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
          {markets.map((market, i) => (
            <motion.div
              key={market}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-200 hover:border-transparent hover:shadow-md transition-all duration-300"
              style={{
                "--hover-bg": accentColor + "10",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accentColor + "10";
                e.currentTarget.style.borderColor = accentColor + "30";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "";
              }}
            >
              <Users className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm font-medium text-heiven-charcoal">
                {market}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
