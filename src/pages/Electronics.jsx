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
import { Cpu, Settings, Award, Compass, RefreshCw, BarChart2, ShieldCheck, Zap } from "lucide-react";

const HERO_IMAGE = "/images/electronics_hero.png";
const TEAM_IMAGE = "/images/electronics_team.png";

const BLUE = "#29ABE2";

const DIVISIONS = [
  {
    title: "Consumer Electronics",
    description: "Smartphones, Feature Phones, Tablets, Laptops, Desktop Computers, Smart TVs, Audio Systems, Wearables, Smart Watches, Power Banks, and Accessories.",
  },
  {
    title: "Telecommunications Equipment",
    description: "Routers, WinFi Access Points, Network Switches, VoIP Phones, PBX Systems, Telecom Cabinets, Base Station Equipment, Fiber Optic Equipment, and Connectivity Solutions.",
  },
  {
    title: "Smart Home & IoT Solutions",
    description: "Smart Lighting, Security Systems, Smart Locks, Home Automation Controllers, Energy Monitoring Devices, Smart Sensors, Smart Meters, and Industrial IoT Platforms.",
  },
  {
    title: "Energy Technology Products",
    description: "Smart Electricity Meters, Prepaid Metering Systems, Solar Inverters, Battery Storage Systems, Energy Management Systems, Smart Grid Devices, and EV Charging Equipment.",
  },
  {
    title: "Industrial Electronics",
    description: "Industrial Control Systems, PLC Automation Devices, SCADA Components, Monitoring Systems, Process Control Equipment, Mining Electronics, and AgTech Equipment.",
  },
  {
    title: "Security Electronics",
    description: "CCTV Cameras, Surveillance Systems, Access Control Devices, Biometric Systems, Alarm Systems, Security Monitoring, and Smart Perimeter Protection.",
  },
];

const MARKETS = [
  "Telecommunications",
  "Energy & Utilities",
  "Mining",
  "Government",
  "Education",
  "Healthcare",
  "Manufacturing",
  "Agriculture",
  "Financial Services",
  "Smart Cities",
  "Retail",
  "Residential Markets",
];

const CAPABILITIES = [
  {
    title: "Electronic Assembly",
    items: ["PCB Assembly (PCBA)", "Surface Mount Technology (SMT)", "Through-Hole Assembly", "Product Integration", "Functional Testing & QC"],
  },
  {
    title: "Product Manufacturing",
    items: ["Consumer Device Production", "Telecom Equipment Production", "Smart Meter & IoT Assembly", "Industrial Electronics Assembly", "Energy Equipment Assembly"],
  },
  {
    title: "OEM & ODM Services",
    items: ["OEM Branding & Labeling", "Hardware Engineering & Prototyping", "Firmware & Embedded Systems", "Certification Testing", "Mass Scale Production"],
  },
  {
    title: "Research & Development",
    items: ["Embedded System Design", "AI Integration in Electronics", "IoT Platform Development", "Renewable Energy Controls", "Smart City Tech Solutions"],
  },
];

const STRATEGIC_OBJECTIVES = [
  {
    timeline: "Short-Term (1–2 Years)",
    title: "Foundations & Launch",
    description: "Establish local assembly facilities, launch proprietary consumer and telecom devices, introduce smart metering solutions, and expand local distribution networks.",
  },
  {
    timeline: "Medium-Term (3–5 Years)",
    title: "Pan-African Expansion",
    description: "Become a leading African electronics manufacturer, expand exports to SADC and broader African regions, launch advanced IoT and smart city solutions, and establish global partnerships.",
  },
  {
    timeline: "Long-Term (5–10 Years)",
    title: "Global Leadership & Brand",
    description: "Develop fully integrated high-scale manufacturing facilities, export internationally, build a globally recognized African technology brand, and lead innovation in telecoms and smart grids.",
  },
];

export default function Electronics() {
  return (
    <PageTransition color={BLUE}>
      <Navbar />
      <SubHero
        variant="electronics"
        slogan="Engineering Innovation. Manufacturing Excellence. Powering Africa's Digital Future."
        description="Heiven Electronics is a South African electronics manufacturing and technology company specializing in the design, assembly, manufacturing, distribution, and support of innovative electronic products and smart technology solutions."
        heroImage={HERO_IMAGE}
      />
      <VisionMission
        vision="To become Africa's leading electronics manufacturing company by delivering innovative, reliable, and sustainable technology solutions that empower businesses, communities, and governments."
        mission="To design, manufacture, and distribute world-class electronic products that enhance connectivity, productivity, energy efficiency, security, and digital inclusion across Africa."
        teamImage={TEAM_IMAGE}
        variant="electronics"
      />

      <ServicesGrid
        label="Business Divisions"
        title="Comprehensive Tech Portfolio"
        description="Providing state-of-the-art electronic products and solutions across multiple high-growth industries."
        services={DIVISIONS}
        accentColor={BLUE}
      />

      {/* Manufacturing & Engineering Capabilities */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <SectionHeading
            label="Capabilities"
            title="Manufacturing & Engineering Excellence"
            description="Equipped with advanced manufacturing technologies, SMT lines, and deep engineering expertise to deliver world-class products."
            color={BLUE}
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:border-sky-200 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                  {i === 0 && <Cpu className="w-6 h-6" />}
                  {i === 1 && <Settings className="w-6 h-6" />}
                  {i === 2 && <Award className="w-6 h-6" />}
                  {i === 3 && <Compass className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-heading font-bold text-heiven-charcoal mb-4">
                  {cap.title}
                </h3>
                <ul className="space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="text-sm text-heiven-charcoal/65 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-24 sm:py-32 bg-neutral-50">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <SectionHeading
            label="Roadmap"
            title="Strategic Objectives"
            description="Our vision is structured into clear phases to scale capabilities and footprint responsibly across the continent."
            color={BLUE}
          />

          <div className="mt-16 max-w-4xl mx-auto relative before:absolute before:inset-y-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-sky-500/20">
            {STRATEGIC_OBJECTIVES.map((obj, i) => (
              <motion.div
                key={obj.timeline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-start gap-8 mb-12 sm:mb-16 last:mb-0 ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-sm z-10" />

                {/* Timeline Panel */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <div className={`p-6 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow ${
                    i % 2 === 0 ? "sm:text-right" : ""
                  }`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-500">
                      {obj.timeline}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-heiven-charcoal mt-1 mb-3">
                      {obj.title}
                    </h3>
                    <p className="text-sm text-heiven-charcoal/60 leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
                {/* Spacer */}
                <div className="hidden sm:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Advantages */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
                Commitment
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-heiven-charcoal">
                Sustainability Commitment
              </h2>
              <p className="mt-4 text-heiven-charcoal/60 leading-relaxed">
                We embed eco-friendly engineering principles throughout our supply chains, aiming to reduce electronic waste and minimize carbon footprints in our factories.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Environmentally Responsible Manufacturing",
                  "Reduction of Electronic Waste & Recycling",
                  "Energy Efficient Design & Products",
                  "Renewable Energy Supply Chain Integration",
                ].map((text, i) => (
                  <div key={text} className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <RefreshCw className="w-5 h-5 text-sky-500 shrink-0" />
                    <span className="text-sm font-medium text-heiven-charcoal leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
                Advantages
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-heiven-charcoal">
                Competitive Advantages
              </h2>
              <p className="mt-4 text-heiven-charcoal/60 leading-relaxed">
                Our operations stand apart because of our local focus, integrated assembly capabilities, and scalable R&D infrastructure.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "African-focused product development",
                  "End-to-end manufacturing & SMT capabilities",
                  "Advanced R&D and ODM integration",
                  "Scalable production & strong local support",
                ].map((text, i) => (
                  <div key={text} className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <ShieldCheck className="w-5 h-5 text-sky-500 shrink-0" />
                    <span className="text-sm font-medium text-heiven-charcoal leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TargetMarkets markets={MARKETS} accentColor={BLUE} />

      {/* Corporate Info */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Company Name:</span> Heiven Electronics (Pty) Ltd
            </p>
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Head Office Address:</span> 1st Floor, Gateway West, 22 Magwa Crescent, Waterfall, Midrand, Johannesburg, South Africa, 2066
            </p>
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Industry:</span> Electronics Manufacturing & Technology Solutions
            </p>
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Business Type:</span> Electronics Design, Manufacturing, Distribution, and Technology Services
            </p>
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">Operating Regions:</span> South Africa, SADC Region, Africa, and International Markets
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
