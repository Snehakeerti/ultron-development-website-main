import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import AddOns from "@/components/home/AddOns";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* <TrustBar /> */}
        <AboutPreview />
        <ServicesHighlight />
        <WhyChooseUs />
        <StatsSection />
        <Testimonials />
        <AddOns />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
