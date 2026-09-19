import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ValueStrip from "@/components/ValueStrip";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <HowItWorks />
      <ValueStrip />
      <FinalCta />
      <Footer />
    </div>
  );
}
