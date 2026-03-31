import { Users, Zap, DollarSign, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  { icon: Users, title: "Experienced Team", desc: "Certified engineers with 14+ years of industry expertise." },
  { icon: Zap, title: "Fast Support", desc: "Rapid response times with 24/7 priority support available." },
  { icon: DollarSign, title: "Affordable Solutions", desc: "Enterprise-grade quality at competitive, transparent pricing." },
  { icon: Award, title: "Enterprise Quality", desc: "ISO-certified processes delivering consistent, reliable results." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            The TechCore Advantage
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
