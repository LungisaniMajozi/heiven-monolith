import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import PageTransition from "@/components/shared/PageTransition";
import { Quote } from "lucide-react";

export default function CeoMessage() {
  const BLUE = "#29ABE2";

  return (
    <PageTransition color={BLUE}>
      <Navbar />
      <div className="bg-neutral-50 pt-28 sm:pt-36 pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-3"
              style={{ color: BLUE }}
            >
              Leadership Welcome
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-extrabold text-heiven-charcoal leading-tight">
              Message from the
              <br />
              <span style={{ color: BLUE }}>Chief Executive Officer</span>
            </h1>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: CEO Portrait & Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800">
                <img
                  src="/images/CEO.jpeg"
                  alt="Moteng Moseri, CEO of Heiven Group"
                  className="w-full h-[26rem] sm:h-[32rem] lg:h-[28rem] xl:h-[34rem] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Text Overlay on image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-bold font-heading">Moteng Moseri</p>
                  <p className="text-sm text-white/70 mt-1">Chief Executive Officer, Heiven Group</p>
                </div>
              </div>

              {/* CEO Quote highlight */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm flex gap-4">
                <Quote className="w-10 h-10 shrink-0 text-sky-500/20" />
                <p className="text-sm font-medium italic text-heiven-charcoal/70 leading-relaxed">
                  "Together, we are building businesses that not only deliver commercial success but also contribute meaningfully to Africa's development journey."
                </p>
              </div>
            </motion.div>

            {/* Right Column: CEO Letter */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-8 bg-white p-8 sm:p-12 lg:p-16 rounded-3xl border border-neutral-100 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-heiven-charcoal leading-snug mb-8 border-b pb-6">
                Building Africa's Future Through Infrastructure, Innovation, and Sustainable Growth
              </h2>
              
              <div className="prose prose-sky max-w-none space-y-6 text-heiven-charcoal/75 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-heiven-charcoal text-base sm:text-lg">
                  It is my pleasure to welcome you to Heiven Group, a proudly African industrial conglomerate committed to building the infrastructure that powers economic growth, connects communities, and unlocks opportunities across South Africa and the African continent.
                </p>
                
                <p>
                  At Heiven Group, we believe that Africa's future will be defined by the strength of its infrastructure, the sustainability of its energy systems, and the responsible development of its natural resources. Guided by this vision, we have established a diversified portfolio of businesses operating across Telecommunications, Energy, and Minerals—three sectors that are fundamental to Africa's long-term prosperity and competitiveness.
                </p>
                
                <p>
                  Through <strong>Heiven Telecoms</strong>, we are expanding digital connectivity by developing telecommunications infrastructure, tower assets, fibre networks, mobile technologies, and digital communication solutions that support governments, businesses, and communities. As digital transformation accelerates across Africa, we remain committed to enabling greater access to technology and bridging the connectivity gap that exists in many underserved regions.
                </p>
                
                <p>
                  Through <strong>Heiven Energy</strong>, we are investing in reliable and sustainable energy solutions that support industrial development and energy security. From petroleum products and LPG distribution to renewable energy technologies and future-focused energy infrastructure, our goal is to contribute meaningfully to Africa's energy transition while ensuring dependable energy access for households, businesses, and industries.
                </p>
                
                <p>
                  Through <strong>Heiven Minerals</strong>, we are focused on the responsible exploration, extraction, beneficiation, and trading of strategic mineral resources that are essential for global industrial development and the green economy. Africa possesses some of the world's most valuable mineral reserves, and we believe these resources should create lasting value for local communities, national economies, and future generations.
                </p>
                
                <p>
                  Our growth strategy is built on long-term market participation, strategic investments, operational excellence, and sustainable value creation. We continuously seek opportunities to expand our footprint across key African markets while building partnerships that enhance our capabilities and strengthen our competitive position. As we grow, we remain focused on creating resilient businesses that contribute to economic development and industrialization across the continent.
                </p>
                
                <p>
                  Environmental, Social, and Governance (ESG) principles are integrated into the way we operate. We recognize that sustainable growth requires responsible stewardship of natural resources, ethical business practices, sound corporate governance, and meaningful community engagement. We are committed to reducing environmental impact, promoting diversity and inclusion, supporting local procurement and enterprise development, and maintaining the highest standards of integrity throughout our operations.
                </p>
                
                <p>
                  Beyond commercial success, we measure our impact by the value we create for society. Through job creation, skills development, infrastructure investment, technology transfer, and local economic participation, Heiven Group seeks to be a catalyst for inclusive growth. We are proud to contribute to South Africa's development objectives while supporting broader continental initiatives aimed at strengthening regional integration, industrialization, and sustainable economic progress.
                </p>
                
                <p>
                  As we look ahead, we remain optimistic about Africa's future. The continent presents extraordinary opportunities driven by population growth, urbanization, digital transformation, energy demand, and increasing investment in infrastructure. Heiven Group is strategically positioned to participate in these opportunities and to help shape a more connected, empowered, and prosperous Africa.
                </p>
                
                <p>
                  I would like to thank our employees, customers, partners, investors, communities, and stakeholders for their continued trust and support. Together, we are building businesses that not only deliver commercial success but also contribute meaningfully to Africa's development journey.
                </p>
                
                <p>
                  We invite you to join us as we continue to drive innovation, create sustainable value, and build infrastructure that powers progress across the continent.
                </p>
              </div>

              {/* Signature Block */}
              <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <p className="text-sm text-heiven-charcoal/50">Sincerely,</p>
                  <p className="text-xl font-heading font-extrabold text-heiven-charcoal mt-2">Moteng Moseri</p>
                  <p className="text-sm text-sky-500 font-bold tracking-wide mt-1">Chief Executive Officer</p>
                  <p className="text-xs text-heiven-charcoal/40 uppercase tracking-widest mt-0.5">Heiven Group</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
