import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Network, Shield, Monitor, Cpu, Wrench, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Computer & Laptop Repair",
    desc: "Comprehensive repair solutions for all major brands — Dell, HP, Lenovo, Acer, Asus, Toshiba, and Apple. From chip-level diagnostics to full hardware restoration for both desktops and laptops.",
    features: [
      "Diagnostic Assessment & Troubleshooting",
      "Motherboard & Hardware Repairs",
      "Screen & Hinge Replacements",
      "Power Jack & Connector Repairs",
      "Overheating & Cooling Solutions",
      "Data Recovery & Backup",
    ],
  },
  {
    icon: Server,
    title: "AMC & Server Maintenance",
    desc: "Annual Maintenance Contracts designed for businesses that demand zero downtime. SLA-driven corporate support with dedicated technicians and priority response for all your systems and servers.",
    features: [
      "Preventive Maintenance Schedules",
      "On-call & Priority Support",
      "System & Server Health Checks",
      "SLA-Driven Corporate Support",
      "Performance Reporting",
      "Hardware Lifecycle Management",
    ],
  },
  {
    icon: Network,
    title: "Multi-Brand System Sales",
    desc: "Supplying businesses with the right hardware — from workstations and servers to network security devices. We source, configure, and deploy systems tailored to your operational needs.",
    features: [
      "Workstations & Servers",
      "Branded & Assembled Desktops",
      "Multi-Brand Laptops",
      "NAS Box Storage Solutions",
      "Firewall & Network Security Devices",
      "Peripheral Devices & Accessories",
    ],
  },
  {
    icon: Cpu,
    title: "Genuine Spare Parts",
    desc: "We supply authentic, quality-tested spare parts for all major laptop and computer brands. Every component comes with warranty support, ensuring your device performs reliably after every repair.",
    features: [
      "Laptop Screens & Displays",
      "Batteries & Chargers",
      "Hard Drives & SSDs",
      "Keyboards & Touchpads",
      "Motherboards & Chipsets",
      "Cooling Fans & Thermal Solutions",
    ],
  },
  {
    icon: Shield,
    title: "Virus Removal & Security",
    desc: "Protect your business and personal data from malware, ransomware, and unauthorized access. Our security services ensure your systems are clean, fortified, and fully operational.",
    features: [
      "Malware & Virus Removal",
      "Firewall Setup & Configuration",
      "OS Reinstallation & Restoration",
      "Data Protection & Encryption",
      "Network Security Audits",
      "Unauthorized Access Prevention",
    ],
  },
  {
    icon: Wrench,
    title: "Performance & Optimization",
    desc: "Keep your computers running like new with our professional maintenance and tuning services. Ideal for both individual users and corporate fleets needing consistent peak performance.",
    features: [
      "Dust Removal & Hardware Cleaning",
      "Thermal Paste Application",
      "Software Updates & Optimization",
      "System Tune-up & Speed Boost",
      "Preventive Maintenance Plans",
      "Free Initial Inspection",
    ],
  },
];

const process = [
  { step: "01", title: "Tell Us the Issue", desc: "Share your problem — our experts listen and suggest the best solution for your device." },
  { step: "02", title: "Get a Quote", desc: "We identify the issue and provide a transparent, no-surprise repair cost estimate." },
  { step: "03", title: "Book an Appointment", desc: "Visit us at Gandhipuram or schedule a pickup. We inspect and give an estimated delivery time." },
  { step: "04", title: "Get It Resolved", desc: "Once fixed, you're notified immediately. We deliver on time — every time." },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 px-4 md:px-8 text-center">
            <AnimatedSection>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Repair. Maintain. Upgrade.
              </h1>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto">
                From same-day laptop repairs to long-term AMC contracts — Ultron Computers is Coimbatore's most trusted partner for all things IT. Quality work, genuine parts, and a No Fix, No Fee promise.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-background">
          <div className="container-custom space-y-12">
            {services.map((service, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <service.icon size={26} className="text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                    <Link to="/contact">
                      <Button variant="accent" size="sm" className="gap-2">
                        Get Started <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-accent shrink-0" />
                        <span className="text-foreground text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-navy">
          <div className="container-custom px-4 md:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Process</span>
              <h2 className="text-3xl font-bold text-primary-foreground mt-2">How We Work</h2>
              <p className="text-primary-foreground/50 max-w-xl mx-auto mt-3 text-sm">
                A simple, transparent 4-step process — so you always know what's happening with your device.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="glass-card-dark p-6 text-center">
                    <span className="text-4xl font-bold text-accent/30">{p.step}</span>
                    <h3 className="text-lg font-semibold text-primary-foreground mt-2 mb-2">{p.title}</h3>
                    <p className="text-primary-foreground/50 text-sm">{p.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <AnimatedSection className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Not Sure What You Need?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Walk in or call us — our technicians offer a free inspection and honest advice with no obligations.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">Book a Free Inspection</Button>
            </Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;