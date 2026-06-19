import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SubHero from "@/components/subsidiary/SubHero";
import VisionMission from "@/components/subsidiary/VisionMission";
import ServicesGrid from "@/components/subsidiary/ServicesGrid";
import TargetMarkets from "@/components/subsidiary/TargetMarkets";
import PageTransition from "@/components/shared/PageTransition";

// Hero: solar farm / field engineer
const HERO_IMAGE =
  "/images/energy_truck.jpeg";
// Vision/Mission: energy control room branded Heiven Energy
const TEAM_IMAGE =
  "/images/energy_firms.jpeg";

const BLUE = "#29ABE2";

const SERVICES = [
  {
    title: "Petroleum Products",
    description:
      "Fuel distribution, storage, and supply across residential, commercial, and industrial sectors.",
  },
  {
    title: "LPG & Gas Solutions",
    description:
      "Liquefied petroleum gas supply, distribution, and infrastructure for diverse energy needs.",
  },
  {
    title: "Renewable Energy Solutions",
    description:
      "Solar, wind, and hybrid power systems for sustainable energy generation.",
  },
  {
    title: "Energy Infrastructure",
    description:
      "Development and management of energy infrastructure for reliable power delivery.",
  },
  {
    title: "Lubricants & Oils",
    description:
      "High-quality lubricants and oils for automotive, industrial, and mining applications.",
  },
  {
    title: "Smart Energy Solutions",
    description:
      "Intelligent energy management systems and smart grid technologies.",
  },
  {
    title: "EV Charging Infrastructure",
    description:
      "Electric vehicle charging networks and infrastructure development.",
  },
];

const MARKETS = [
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural",
  "Mining",
  "Government",
  "Municipal",
];

export default function Energy() {
  return (
    <PageTransition color={BLUE}>
      <Navbar />
      <SubHero
        variant="energy"
        slogan="Empowering Tomorrow Through Energy Today."
        description="Heiven Energy is a diversified energy company dedicated to delivering reliable, innovative, and sustainable energy solutions across Africa — spanning petroleum, gas, renewables, and energy infrastructure."
        heroImage={HERO_IMAGE}
      />
      <VisionMission
        vision="To become Africa's most trusted and innovative energy company, delivering sustainable energy solutions that empower communities, businesses, and industries."
        mission="To provide reliable, affordable, and environmentally responsible energy solutions through innovation, operational excellence, and customer-focused service."
        teamImage={TEAM_IMAGE}
        variant="energy"
      />
      <ServicesGrid
        label="Core Business Segments"
        title="Powering Growth"
        description="Delivering comprehensive energy solutions across petroleum, gas, renewables, and smart energy — powering Africa's progress."
        services={SERVICES}
        accentColor={BLUE}
      />
      <TargetMarkets markets={MARKETS} accentColor={BLUE} />
      <Footer />
    </PageTransition>
  );
}
