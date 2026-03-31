import { Server, Shield, Cloud, Database } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const solutions = [
  { icon: Server, title: "Data Center Solutions", desc: "Complete data center design, deployment, and management." },
  { icon: Shield, title: "Cybersecurity", desc: "Advanced threat protection and compliance management." },
  { icon: Cloud, title: "Cloud Migration", desc: "Seamless cloud transition with zero downtime." },
  { icon: Database, title: "Backup & Recovery", desc: "Enterprise backup solutions and disaster recovery planning." },
];

const AddOns = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="container-custom relative z-10 px-4 md:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            Enterprise-Grade Add-Ons
          </h2>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto">
            Extend your IT capabilities with our specialized solutions designed for modern enterprises.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-dark p-6 hover-lift cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">{s.title}</h3>
                <p className="text-primary-foreground/50 text-sm">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
