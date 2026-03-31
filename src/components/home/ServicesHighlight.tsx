import { Link } from "react-router-dom";
import { Server, Network, Shield, Monitor, Code, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Server, title: "IT Infrastructure Solutions", desc: "End-to-end infrastructure design, deployment, and management for scalable operations." },
  { icon: Network, title: "Networking Services", desc: "Enterprise networking solutions including LAN, WAN, VPN, and wireless infrastructure." },
  { icon: Shield, title: "AMC Support", desc: "Annual maintenance contracts ensuring uninterrupted business operations year-round." },
  { icon: Monitor, title: "Hardware Solutions", desc: "Premium hardware procurement, installation, and lifecycle management services." },
  { icon: Code, title: "Software Solutions", desc: "Custom software deployment, licensing, and integration for business efficiency." },
  { icon: Lightbulb, title: "IT Consulting", desc: "Strategic technology consulting to align your IT with business objectives." },
];

const ServicesHighlight = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From infrastructure to consulting, we provide everything your business needs to stay ahead in the digital landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Link to="/services" className="block h-full">
                <div className="glass-card p-8 h-full hover-lift group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <service.icon size={26} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
