import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ServicesGrid({
  label,
  title,
  description,
  services,
  accentColor,
}) {
  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-neutral-50">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          label={label}
          title={title}
          description={description}
          color={accentColor}
        />

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: accentColor }}
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-5"
                style={{
                  backgroundColor: accentColor + "15",
                  color: accentColor,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="text-base font-heading font-bold text-heiven-charcoal leading-snug">
                {service.title}
              </h3>
              {service.description && (
                <p className="mt-2 text-sm text-heiven-charcoal/55 leading-relaxed">
                  {service.description}
                </p>
              )}
              {service.link && (
                <div className="mt-4">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold hover:underline transition-all duration-300"
                    style={{ color: accentColor }}
                  >
                    {service.linkText || "Learn More"} &rarr;
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
