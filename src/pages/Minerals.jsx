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
import { Shield, Droplets, Leaf, Users, ChevronRight } from "lucide-react";

// Hero: open-pit mine / geologist field
const HERO_IMAGE =
  "/images/mining_railway.jpeg";
// Vision/Mission: mineral lab branded Heiven Minerals
const TEAM_IMAGE =
  "/images/mine_truck.jpeg";

const BLUE = "#29ABE2";

const SERVICES = [
  {
    title: "Mineral Exploration",
    description:
      "Comprehensive exploration services to identify and evaluate high-value mineral deposits.",
  },
  {
    title: "Mining Operations",
    description:
      "Safe and efficient mining operations across surface and underground methods.",
  },
  {
    title: "Mineral Processing & Beneficiation",
    description:
      "Advanced processing and beneficiation to maximize mineral value.",
  },
  {
    title: "Commodity Trading",
    description:
      "Strategic trading of minerals across South Africa, Africa, Europe, Asia, and the Middle East.",
  },
  {
    title: "Geological Consulting",
    description:
      "Expert geological consulting services for exploration and project feasibility.",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project management for mining developments and operations.",
  },
  {
    title: "Environmental Compliance",
    description:
      "Ensuring full regulatory compliance and environmental responsibility.",
  },
  {
    title: "Mining Support Services",
    description:
      "Comprehensive support services for mining operations and logistics.",
  },
];

const MINERALS = [
  "Chrome",
  "Manganese",
  "Iron Ore",
  "Copper",
  "Gold",
  "Coal",
  "Platinum Group Metals",
  "Lithium",
  "Nickel",
  "Cobalt",
  "Rare Earth Elements",
];

const MARKETS = ["South Africa", "Africa", "Europe", "Asia", "Middle East"];

const SUSTAINABILITY = [
  { icon: Leaf, label: "Environmental Stewardship" },
  { icon: Shield, label: "Responsible Mining" },
  { icon: Droplets, label: "Water Conservation" },
  { icon: Users, label: "Community Development" },
];

const PARTNERSHIP_REASONS = [
  "Strong South African presence",
  "Ethical business practices",
  "Sustainable growth strategy",
  "Diversified mineral portfolio",
  "Commitment to local economic development",
];

export default function Minerals() {
  return (
    <PageTransition color={BLUE}>
      <Navbar />
      <SubHero
        variant="minerals"
        slogan="Unlocking Africa's Mineral Wealth Responsibly."
        description="Heiven Minerals is a Johannesburg-based mining and mineral resources company focused on exploration, extraction, processing, beneficiation, and trading of strategic minerals across South Africa and Sub-Saharan Africa."
        heroImage={HERO_IMAGE}
      />
      <VisionMission
        vision="To become Africa's most trusted and innovative mineral resources company, driving sustainable growth and responsible resource development."
        mission="To identify and develop high-value mineral opportunities, operate safely and sustainably, create value for stakeholders, and support mineral beneficiation and industrialization."
        teamImage={TEAM_IMAGE}
        variant="minerals"
      />
      <ServicesGrid
        label="Core Services"
        title="Mining Excellence"
        description="Comprehensive mining and mineral resource services from exploration through to beneficiation and global commodity trading."
        services={SERVICES}
        accentColor={BLUE}
      />

      {/* Mineral Focus */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <SectionHeading
            label="Mineral Focus"
            title="Strategic Minerals"
            description="Our diversified mineral portfolio spans Africa's most valuable and in-demand resources."
            color={BLUE}
          />
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
            {MINERALS.map((mineral, i) => (
              <motion.div
                key={mineral}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border cursor-default"
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
                {mineral}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Partnership */}
      <section className="py-24 sm:py-32 bg-neutral-50">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: BLUE }}
              >
                Sustainability
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-heiven-charcoal">
                Committed to Responsible Mining
              </h2>
              <p className="mt-4 text-heiven-charcoal/60 leading-relaxed">
                Committed to environmental stewardship, responsible mining, mine
                rehabilitation, water conservation, ESG compliance, and
                community development.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SUSTAINABILITY.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white"
                  >
                    <item.icon
                      className="w-5 h-5 shrink-0"
                      style={{ color: BLUE }}
                    />
                    <span className="text-sm font-medium text-heiven-charcoal">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: BLUE }}
              >
                Why Partner With Us
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-extrabold text-heiven-charcoal">
                Why Heiven Minerals?
              </h2>
              <div className="mt-8 space-y-4">
                {PARTNERSHIP_REASONS.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white"
                  >
                    <ChevronRight
                      className="w-4 h-4 shrink-0"
                      style={{ color: BLUE }}
                    />
                    <span className="text-sm font-medium text-heiven-charcoal">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TargetMarkets markets={MARKETS} accentColor={BLUE} />

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
              <span className="font-semibold text-heiven-charcoal">
                Head Office:
              </span>{" "}
              Johannesburg, Gauteng, South Africa
            </p>
            <p className="text-sm text-heiven-charcoal/50">
              <span className="font-semibold text-heiven-charcoal">
                Industry:
              </span>{" "}
              Mining, Exploration, Mineral Processing & Commodity Trading
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
