import { Activity, Monitor, LayoutGrid, Sun, Shield, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Monitor,
    title: "Computer & Laptop Repair",
    desc: "Chip-level diagnostics, hardware repair, screen & hinge replacement, motherboard service — all major brands covered.",
    pills: ["Dell", "HP", "Lenovo", "Asus", "Apple"],
    pillColor: "red",
  },
  {
    icon: Activity,
    title: "AMC & Server Maintenance",
    desc: "Annual maintenance contracts with SLA-driven support, preventive health checks, on-call priority response and server uptime assurance.",
    pills: ["SLA Support", "On-call", "Health Checks"],
    pillColor: "blue",
  },
  {
    icon: LayoutGrid,
    title: "Multi-Brand System Sales",
    desc: "Workstations, branded & assembled desktops, multi-brand laptops, NAS storage, firewall and network security devices.",
    pills: ["Workstations", "NAS", "Firewall"],
    pillColor: "default",
  },
  {
    icon: Sun,
    title: "Genuine Spare Parts",
    desc: "Laptop screens, batteries, hard drives & SSDs, keyboards, motherboards, cooling fans — quality tested with warranty support.",
    pills: ["30-Day Warranty", "Brand Genuine"],
    pillColor: "default",
  },
  {
    icon: Shield,
    title: "Virus Removal & Security",
    desc: "Complete malware & virus removal, data protection, OS reinstallation, and firewall setup to keep your systems safe.",
    pills: ["Malware", "Data Safety", "OS Restore"],
    pillColor: "red",
  },
  {
    icon: TrendingUp,
    title: "Performance & Optimization",
    desc: "Dust cleaning, thermal paste refresh, software tuning, system upgrades and preventive maintenance to keep devices running like new.",
    pills: ["Free Inspection", "No Fix No Fee"],
    pillColor: "blue",
  },
];

const pillStyles: Record<string, string> = {
  red: "bg-red-950 text-red-400 border border-red-900",
  blue: "bg-blue-950 text-blue-400 border border-blue-900",
  default: "bg-white/5 text-white/50 border border-white/10",
};

const AddOns = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="container-custom relative z-10 px-4 md:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            Complete IT Services for Every Need
          </h2>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto">
            From urgent laptop repairs to enterprise-grade AMC contracts — Ultron Computers
            delivers reliable, certified, and affordable tech solutions in Coimbatore.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card-dark p-6 hover-lift cursor-pointer h-full flex flex-col">
                <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center mb-5">
                  <s.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-primary-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {s.pills.map((pill, j) => (
                    <span
                      key={j}
                      className={`text-[10px] px-2 py-1 rounded-full font-medium ${pillStyles[s.pillColor]}`}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;