import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Network, Shield, Monitor, Code, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "IT Infrastructure Solutions",
    desc: "Complete end-to-end IT infrastructure design, deployment, and management tailored for your business scale.",
    features: ["Server Setup & Configuration", "Virtualization Solutions", "Storage Area Networks", "Infrastructure Monitoring"],
  },
  {
    icon: Network,
    title: "Networking Services",
    desc: "Enterprise-grade networking solutions ensuring seamless connectivity and maximum uptime across your organization.",
    features: ["LAN/WAN Design", "VPN & Security", "Wireless Solutions", "Network Monitoring"],
  },
  {
    icon: Shield,
    title: "AMC Support",
    desc: "Comprehensive annual maintenance contracts that keep your IT systems running without interruption.",
    features: ["24/7 Support", "Preventive Maintenance", "Hardware Replacement", "Performance Reports"],
  },
  {
    icon: Monitor,
    title: "Hardware Solutions",
    desc: "Premium hardware procurement, installation, and lifecycle management from leading manufacturers.",
    features: ["Server Hardware", "Networking Equipment", "Workstations", "Peripheral Devices"],
  },
  {
    icon: Code,
    title: "Software Solutions",
    desc: "Custom software deployment, licensing management, and seamless integration services.",
    features: ["License Management", "Software Deployment", "System Integration", "Custom Development"],
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Strategic technology consulting to help you make informed decisions and align IT with business goals.",
    features: ["IT Strategy", "Digital Transformation", "Technology Audits", "Cost Optimization"],
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "We understand your needs and challenges." },
  { step: "02", title: "Planning", desc: "We design a tailored solution architecture." },
  { step: "03", title: "Execution", desc: "We deploy with precision and minimal disruption." },
  { step: "04", title: "Support", desc: "We provide ongoing maintenance and optimization." },
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
                Comprehensive IT Solutions
              </h1>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto">
                From infrastructure to consulting, we deliver end-to-end IT services for modern enterprises.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-background">
          <div className="container-custom space-y-12">
            {services.map((service, i) => (
              <AnimatedSection key={i}>
                <div className={`glass-card p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss your specific requirements and build the perfect IT solution for your business.</p>
            <Link to="/contact">
              <Button variant="accent" size="lg">Request Consultation</Button>
            </Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
