import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import GroupHero from "@/components/home/GroupHero";
import SectorPortals from "@/components/home/SectorPortals";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import PageTransition from "@/components/shared/PageTransition";

// Workspace images — branded environments showing real Heiven work contexts
const IMAGES = {
  hero: "https://media.base44.com/images/public/6a305098afe0751767e21de8/a3866ca2e_generated_image.png",
  telecoms: "/images/telecoms1.jpeg",
  energy: "/images/energy_firms.jpeg",
  minerals: "/images/mine_truck.jpeg",
  electronics: "/images/electronics_hero.png",
  shipping: "/images/shipping_hero.png",
};

export default function Home() {
  return (
    <PageTransition color="#29ABE2">
      <Navbar />
      <GroupHero heroImage={IMAGES.hero} />
      <SectorPortals
        telecomsImage={IMAGES.telecoms}
        energyImage={IMAGES.energy}
        mineralsImage={IMAGES.minerals}
        electronicsImage={IMAGES.electronics}
        shippingImage={IMAGES.shipping}
      />
      <AboutSection />
      <ContactSection />
      <Footer />
    </PageTransition>
  );
}
