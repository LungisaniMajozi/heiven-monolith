import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SubHero from "@/components/subsidiary/SubHero";
import VisionMission from "@/components/subsidiary/VisionMission";
import ServicesGrid from "@/components/subsidiary/ServicesGrid";
import TargetMarkets from "@/components/subsidiary/TargetMarkets";
import PageTransition from "@/components/shared/PageTransition";
import SectionHeading from "@/components/shared/SectionHeading";
import { Shield, Anchor, Compass, Heart, Award, ArrowRight, HelpCircle, Layers, Activity, ClipboardCheck } from "lucide-react";

// Image constants pointing to the public folder
const HERO_IMAGE = "/images/shipping_hero.png";
const TEAM_IMAGE = "/images/shipping_warehouse.png";

const BLUE = "#29ABE2";

const SERVICES = [
  {
    title: "International Freight Forwarding",
    description: "Seamless cargo movement by sea, air, road, and rail. Includes door-to-door delivery, cross-border transportation, cargo consolidation, and multimodal transport solutions.",
  },
  {
    title: "Ocean Freight Services",
    description: "Full Container Load (FCL) and Less than Container Load (LCL) solutions, handling Breakbulk, Roll-on/Roll-off (RoRo), Bulk Cargo, and project heavy-lifts.",
  },
  {
    title: "Air Freight Services",
    description: "Express and consolidated air cargo, priority shipping, airport-to-airport and door-to-door deliveries, plus specialized dangerous goods and perishable solutions.",
  },
  {
    title: "Customs Clearance & Compliance",
    description: "Customs brokerage, import and export clearance, tariff classification, duty and tax calculations, documentation, and regulatory compliance support.",
  },
  {
    title: "Warehousing & Distribution",
    description: "General and bonded storage, inventory management, order fulfillment, container packing and unpacking, cross-docking services, and distribution logistics.",
  },
  {
    title: "Supply Chain Solutions",
    description: "Supply chain optimization, logistics consulting, procurement logistics, vendor management, freight cost analysis, and real-time cargo tracking and visibility.",
  },
];

const INDUSTRIES = [
  "Mining & Minerals",
  "Manufacturing",
  "Telecommunications",
  "Renewable Energy",
  "Agriculture",
  "Automotive",
  "Construction",
  "Retail & Consumer Goods",
  "Oil & Gas",
  "E-Commerce",
];

const WHY_CHOOSE_US = [
  {
    title: "Global Reach",
    description: "A strong network of international partners, shipping lines, airlines, and transport operators connecting Africa to the global marketplace.",
  },
  {
    title: "Reliability",
    description: "Committed to the safe, secure, and timely delivery of goods, ensuring your supply chain remains uninterrupted.",
  },
  {
    title: "Competitive Pricing",
    description: "Cost-effective pricing and cargo consolidation strategies that optimize your shipping budget.",
  },
  {
    title: "End-to-End Service",
    description: "From procurement logistics and warehousing to customs clearance and final mile delivery—all managed under one roof.",
  },
  {
    title: "Customer-Centric",
    description: "Tailored logistics strategies aligned with your unique business requirements and operational timelines.",
  },
  {
    title: "Technology-Driven",
    description: "Modern cargo tracking, supply chain visibility, and logistics management tools keeping you informed at every step.",
  },
];

const CORE_VALUES = [
  "Integrity",
  "Excellence",
  "Reliability",
  "Innovation",
  "Customer Focus",
  "Accountability",
  "Safety",
  "Sustainability",
];

export default function Shipping() {
  return (
    <PageTransition color={BLUE}>
      <Navbar />

      {/* SubHero Section */}
      <SubHero
        variant="shipping"
        slogan="Moving Trade. Connecting Markets. Delivering Excellence."
        description="Heiven Shipping (Pty) Ltd is a leading South African freight forwarding, shipping, and logistics company. Based in Johannesburg, we deliver reliable, cost-effective, and integrated supply chain solutions across Africa and the global marketplace."
        heroImage={HERO_IMAGE}
      />

      {/* Vision & Mission Section */}
      <VisionMission
        vision="To become Africa's most trusted and innovative logistics partner, connecting businesses to global markets through world-class shipping and supply chain solutions."
        mission="To provide efficient, secure, and cost-effective freight forwarding and logistics services that enable our clients to trade confidently across borders while delivering exceptional customer service and operational excellence."
        teamImage={TEAM_IMAGE}
        variant="shipping"
      />

      {/* Services Grid Section */}
      <ServicesGrid
        label="Core Services"
        title="Integrated Logistics Solutions"
        description="Providing end-to-end freight forwarding, customs compliance, storage, and supply chain optimization to move your business forward."
        services={SERVICES}
        accentColor={BLUE}
      />

      {/* Industries Served */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <SectionHeading
            label="Industries Served"
            title="Moving Cargo Across Sectors"
            description="Our specialized logistics expertise enables us to deliver tailored solutions for diverse industrial requirements."
            color={BLUE}
          />
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 border cursor-default flex items-center gap-2"
                style={{
                  borderColor: BLUE + "40",
                  color: BLUE,
                  backgroundColor: BLUE + "0A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = BLUE;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = BLUE + "0A";
                  e.currentTarget.style.color = BLUE;
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "currentColor" }} />
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Health, Safety & Sustainability */}
      <section className="py-24 sm:py-32 bg-neutral-50">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE }}>
                Why Choose Us
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-heiven-charcoal">
                Delivering Competitive Advantage
              </h2>
              <p className="mt-4 text-heiven-charcoal/60 leading-relaxed">
                We combine industry-leading supply chain technology with local African market expertise to keep your shipments secure and on time.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_CHOOSE_US.map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-bold text-heiven-charcoal flex items-center gap-2">
                      <ClipboardCheck className="w-4 h-4 text-[#29ABE2]" />
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-heiven-charcoal/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Health, Safety, Sustainability & Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-12"
            >
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE }}>
                  Safety & Environment
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-heiven-charcoal">
                  Health, Safety & Sustainability
                </h2>
                <div className="mt-5 p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-[#29ABE2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-heiven-charcoal">Responsible Operations</h4>
                      <p className="mt-1 text-xs text-heiven-charcoal/55 leading-relaxed">
                        Heiven Shipping is committed to conducting operations responsibly while maintaining the highest standards of safety, environmental stewardship, and regulatory compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5 text-[#29ABE2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-heiven-charcoal">Sustainable Logistics</h4>
                      <p className="mt-1 text-xs text-heiven-charcoal/55 leading-relaxed">
                        We continuously seek sustainable logistics practices that reduce environmental impact, reduce fuel emissions, optimize route plans, and improve overall operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE }}>
                  Our Culture
                </span>
                <h2 className="mt-3 text-2xl font-heading font-extrabold text-heiven-charcoal">
                  Core Values
                </h2>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {CORE_VALUES.map((val) => (
                    <div key={val} className="py-3 px-4 rounded-xl bg-white border border-neutral-100 text-center text-xs font-bold text-heiven-charcoal shadow-sm hover:scale-105 transition-all">
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Statement Banner */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#29ABE2]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#29ABE2]/5 blur-[80px] pointer-events-none" />
        
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <Anchor className="w-10 h-10 mx-auto text-[#29ABE2] animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight">
              Moving Trade. Connecting Markets. Delivering Excellence.
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light italic">
              "Heiven Shipping is more than a freight forwarder—we are a strategic logistics partner dedicated to moving businesses forward. Through innovative shipping solutions, operational excellence, and a commitment to customer success, we connect markets, facilitate trade, and create value across global supply chains."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Company Name:</span> Heiven Shipping (Pty) Ltd
            </p>
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Head Office:</span> Johannesburg, Gauteng, South Africa
            </p>
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Industry:</span> Freight Forwarding, Shipping, Logistics & Supply Chain Management
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
