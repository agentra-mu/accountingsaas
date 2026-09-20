import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
import ValueStrip from "@/components/ValueStrip";
import SocialProof from "@/components/SocialProof";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-[980px] px-7">
      <Header />
      <Hero />
      <SocialProof />
      <ProductPreview />
      <HowItWorks />
      <ValueStrip />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
