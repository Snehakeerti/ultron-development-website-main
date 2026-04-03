import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImg from "@/assets/slider-bg-01.jpg";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="relative rounded-xl overflow-hidden">
            <img src={aboutImg} alt="Our team at work" className="w-full h-80 lg:h-[420px] object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-card-dark px-4 py-3 rounded-lg">
              <p className="text-primary-foreground font-bold text-lg">14+ Years</p>
              <p className="text-primary-foreground/60 text-xs">of Excellence</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Welcome to Ultron Computers - Laptop Service Center
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Ultron Computers, we have been providing the very best independent repair services for laptop and computers for home and business users since 2009. We pride ourselves on providing a laptop repair service that is second to none. With a team of highly trained technicians, our workshop and staff are ready and able to deal with any computer problems you have.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At our laptop service center in Gandhipuram, we repair all makes of laptop and desktop. We are the authorized service center for HP laptops in Gandhipuram. We are also the authorized Lenovo laptop service center in Coimbatore Gandhipuram.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For laptop service center in Gandhipuram, look no farther than Ultron Computers. We fix all PC and Laptop problems. All problems are fixed and returned within the fastest timeframe.
          </p>

          <Link to="/about">
            <Button variant="default" className="gap-2">
              Learn More <ArrowRight size={16} />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutPreview;
