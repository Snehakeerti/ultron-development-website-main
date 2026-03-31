import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImg from "@/assets/about-team.jpg";

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
            Your Trusted IT Partner for Business Growth
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Since 2010, TechCore has been empowering businesses with cutting-edge IT infrastructure, managed services, and innovative technology solutions. We believe in building lasting partnerships through reliability and excellence.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our team of certified engineers and consultants work closely with you to design solutions that fit your unique business requirements, ensuring maximum uptime and performance.
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
