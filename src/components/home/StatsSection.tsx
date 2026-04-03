import { Monitor, Users, Award, Headphones } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { icon: Monitor, value: 5000, suffix: "+", label: "Systems Repaired" },
  { icon: Users, value: 10000, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 14, suffix: "+", label: "Years Experience" },
  { icon: Headphones, value: 2000, suffix: "+", label: "Support Services Delivered" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-accent rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={26} className="text-accent" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-primary-foreground/50 text-sm">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
