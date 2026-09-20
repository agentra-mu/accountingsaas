import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
import WhyFinly from "@/components/WhyFinly";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductPreview />
        <HowItWorks />
        <WhyFinly />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
