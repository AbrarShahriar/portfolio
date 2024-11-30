import AboutSection from "@/components/layout/AboutSection";
import ContactSection from "@/components/layout/ContactSection";
import FixedNav from "@/components/layout/FixedNav";
import LandingSection from "@/components/layout/LandingSection";
import PortfolioSection from "@/components/layout/PortfolioSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
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
