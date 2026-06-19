import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#29ABE2" }}
            >
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-heiven-charcoal leading-tight">
              Partner With Us
            </h2>
            <p className="mt-4 text-base sm:text-lg text-heiven-charcoal/60 leading-relaxed max-w-md">
              Whether you're looking for telecommunications infrastructure,
              energy solutions, mineral resources, or smart electronics — Heiven Group is ready to
              deliver.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#29ABE218" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#29ABE2" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-heiven-charcoal">
                    Head Office
                  </h4>
                  <p className="text-sm text-heiven-charcoal/60">
                    Johannesburg, Gauteng, South Africa
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#29ABE218" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#29ABE2" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-heiven-charcoal">
                    Email
                  </h4>
                  <a
                    href="mailto:info@heivengroup.com"
                    className="text-sm hover:underline"
                    style={{ color: "#29ABE2" }}
                  >
                    info@heivengroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-heiven-charcoal rounded-3xl p-8 sm:p-12 flex flex-col justify-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-heiven-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Ready to Build Africa's Future Together?
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed">
                Connect with our team to explore partnership opportunities
                across Telecommunications, Energy, Minerals, and Electronics sectors.
              </p>
              <a
                href="mailto:info@heivengroup.com"
                className="mt-8 inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-sm tracking-wider uppercase rounded-full transition-all hover:scale-105"
                style={{ backgroundColor: "#29ABE2" }}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
