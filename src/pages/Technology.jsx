import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SubHero from "@/components/subsidiary/SubHero";
import VisionMission from "@/components/subsidiary/VisionMission";
import ServicesGrid from "@/components/subsidiary/ServicesGrid";
import TargetMarkets from "@/components/subsidiary/TargetMarkets";
import PageTransition from "@/components/shared/PageTransition";

// Hero: telecom tower / field engineer
const HERO_IMAGE =
  "https://media.base44.com/images/public/6a305098afe0751767e21de8/224b1ad5c_generated_image.png";
// Vision/Mission: NOC workspace clearly branded Heiven Telecoms
const TEAM_IMAGE =
  "https://media.base44.com/images/public/6a305098afe0751767e21de8/84b5a9931_generated_image.png";

const BLUE = "#29ABE2";

const SERVICES = [
  {
    title: "TowerCo Services",
    description:
      "Colocation, lease amendments, built-to-suit sites, sale & leaseback, managed services, tower operations and maintenance.",
  },
  {
    title: "In-Building Solutions",
    description:
      "DAS, neutral host networks, indoor connectivity, commercial and public venue coverage.",
  },
  {
    title: "Small Cells & Outdoor DAS",
    description: "Urban densification, 5G deployment, smart city connectivity.",
  },
  {
    title: "FiberCo",
    description:
      "FTTH, FTTB, dark fiber leasing, metro and long-haul fiber networks.",
  },
  {
    title: "Mobile Network & Digital Services",
    description:
      "MVNO, IoT connectivity, roaming, messaging platforms, mobile payments.",
  },
  {
    title: "Mobile Device Manufacturing",
    description:
      "Smartphones, tablets, routers, IoT devices, OEM/ODM services.",
  },
  {
    title: "Heiven Stores",
    description:
      "Mobile phones, accessories, gadgets, laptops, repairs, device financing and insurance.",
  },
  {
    title: "VoIP & Unified Communications",
    description:
      "Hosted PBX, SIP trunking, call centres, collaboration solutions.",
  },
  {
    title: "Network Deployment & Maintenance",
    description:
      "BTS, microwave, 4G/5G rollout, modernization and field services.",
  },
  {
    title: "Data Centre & Cloud Services",
    description:
      "Colocation, hosting, cloud infrastructure, disaster recovery.",
  },
  {
    title: "Renewable Energy Solutions",
    description: "Solar telecom sites, battery storage, hybrid power systems.",
  },
];

const MARKETS = [
  "Mobile Operators",
  "ISPs",
  "Governments",
  "Municipalities",
  "Enterprises",
  "Developers",
  "Mining Companies",
  "Healthcare Institutions",
  "Consumers",
];

export default function Technology() {
  return (
    <PageTransition color={BLUE}>
      <Navbar />
      <SubHero
        variant="technology"
        slogan="Connecting Africa Through Innovation, Infrastructure & Technology."
        description="Heiven Telecoms is a diversified telecommunications and digital infrastructure company specializing in TowerCo, FiberCo, mobile device manufacturing, VoIP, retail telecommunications, and digital connectivity solutions across Africa."
        heroImage={HERO_IMAGE}
      />
      <VisionMission
        vision="To become a leading telecommunications and digital infrastructure provider in Africa."
        mission="To build, own, manage and operate world-class telecommunications infrastructure and technology platforms."
        teamImage={TEAM_IMAGE}
        variant="technology"
      />
      <ServicesGrid
        label="Core Business Divisions"
        title="Our Capabilities"
        description="Delivering comprehensive telecommunications and digital infrastructure solutions across the African continent."
        services={SERVICES}
        accentColor={BLUE}
      />
      <TargetMarkets markets={MARKETS} accentColor={BLUE} />
      <Footer />
    </PageTransition>
  );
}
