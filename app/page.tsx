import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
import WhyDocket from "@/components/WhyDocket";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProductPreview />
        <HowItWorks />
        <WhyDocket />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
