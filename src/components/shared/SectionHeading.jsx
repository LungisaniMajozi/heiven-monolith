import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  title,
  description,
  color = "#0066FF",
  align = "center",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {label && (
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color }}
        >
          {label}
        </span>
      )}
      {title && (
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-heiven-charcoal leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-heiven-charcoal/60 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
