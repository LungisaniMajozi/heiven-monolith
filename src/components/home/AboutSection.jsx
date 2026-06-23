import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Globe, Zap, Mountain, Shield } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Pan-African Reach",
    description:
      "Operating across South Africa and Sub-Saharan Africa, delivering solutions that empower communities, businesses, and industries.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description:
      "From 5G rollouts to renewable energy, smart electronics, and mineral beneficiation — we lead with cutting-edge technology and operational excellence.",
  },
  {
    icon: Mountain,
    title: "Sustainable Growth",
    description:
      "Committed to environmental stewardship, responsible operations, ESG compliance, and community development across all sectors.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "Ethical business practices, diversified portfolio, and a strong commitment to local economic development make us the partner of choice.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-neutral-50">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeading
          label="About Heiven Group"
          color="#29ABE2"
          title="Powering Progress Across Africa"
          description="Heiven Group is a diversified African industrial conglomerate with operations spanning telecommunications and digital infrastructure, energy solutions, mineral resources, electronics manufacturing, and shipping and logistics services. Our mission is to build, own, manage, and operate world-class infrastructure that drives sustainable development."
        />

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-500"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ backgroundColor: "#29ABE218", color: "#29ABE2" }}
              >
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-heiven-charcoal">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-heiven-charcoal/60 leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
