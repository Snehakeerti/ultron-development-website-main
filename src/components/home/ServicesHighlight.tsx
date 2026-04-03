import { Link } from "react-router-dom";
import { Server, Network, Shield, Monitor, Code, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Server, title: "Computer & Laptop Repair Services", desc: "Professional repair solutions for desktops and laptops of all major brands. We provide complete diagnostics, chip-level repair, screen replacement, motherboard repair, OS installation, virus removal, overheating fixes, and performance optimization to restore your system efficiently." },
  { icon: Network, title: "Multi Brand System Sales", desc: "Sales of branded and assembled computers, laptops, and servers. We provide workstations, desktops, multi-brand laptops, NAS storage solutions, and firewall security devices suitable for personal, business, and enterprise needs." },
  { icon: Shield, title: "AMC for Systems & Server Maintenance", desc: "Reliable Annual Maintenance Contracts for smooth business operations. Includes preventive maintenance, on-call support, system health checks, and SLA-based service to ensure uninterrupted system performance." },
  { icon: Monitor, title: "Spare Parts & Accessories", desc: "Genuine spare parts for laptops and desktops with warranty support. We supply laptop screens, batteries, chargers, keyboards, touchpads, SSD, hard drives, motherboards, cooling fans, cables, adapters, and other accessories." },
  { icon: Code, title: "Preventive Maintenance & Optimization", desc: "Improve system speed and lifespan with professional maintenance services. Includes internal cleaning, thermal paste replacement, software updates, system tuning, and performance improvement for better efficiency." },
  { icon: Lightbulb, title: "IT Support & Technical Consulting", desc: "Expert technical support to solve IT challenges quickly. We provide professional guidance, troubleshooting assistance, system upgrade recommendations, and reliable customer support for both individuals and businesses." },
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
