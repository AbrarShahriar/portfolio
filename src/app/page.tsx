import AboutSection from "@/components/layout/AboutSection";
import ContactSection from "@/components/layout/ContactSection";
import FixedNav from "@/components/layout/FixedNav";
import LandingSection from "@/components/layout/LandingSection";
import PortfolioSection from "@/components/layout/PortfolioSection";
import Link from "next/link";
import { FaHome, FaPhone, FaUserCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div>
        <LandingSection />

        <FixedNav />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}
