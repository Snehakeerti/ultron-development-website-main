import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Cpu, Gamepad2, Server, Laptop, Wrench, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const whatWeDo = [
  { icon: Cpu, title: "Chip Level Laptop Service", desc: "Industry-leading repair solutions for all major brands with high success rates." },
  { icon: Gamepad2, title: "Gaming Desktop & Laptop Sales", desc: "High-performance systems tailored for gamers, creators, and professionals." },
  { icon: Server, title: "Server Sales & Solutions", desc: "Reliable and scalable server infrastructure for businesses of all sizes." },
  { icon: Laptop, title: "Used & Refurbished Laptops", desc: "Quality-tested, budget-friendly systems with warranty support." },
  { icon: Wrench, title: "Complete IT Solutions", desc: "From hardware sales to AMC, networking, and corporate IT support—we handle it all." },
];

const whyChooseReasons = [
  "Expertise in advanced chip-level repairs",
  "End-to-end IT solutions under one roof",
  "Trusted by individuals, dealers, and corporate clients",
  "Focus on quality, transparency, and customer satisfaction",
  "Fast turnaround time with reliable support",
];

const timeline = [
  { year: "2010", title: "Founded", desc: "TechCore was established with a vision to deliver premium IT services." },
  { year: "2013", title: "100 Clients", desc: "Reached our first major milestone of 100 enterprise clients." },
  { year: "2016", title: "ISO Certified", desc: "Achieved ISO 27001 certification for information security." },
  { year: "2019", title: "Regional Expansion", desc: "Expanded operations across 3 new regions." },
  { year: "2022", title: "500+ Projects", desc: "Completed over 500 successful IT infrastructure projects." },
  { year: "2024", title: "Innovation Award", desc: "Recognized for excellence in IT consulting and innovation." },
];

const team = [
  { name: "David Mitchell", role: "CEO & Founder", initials: "DM" },
  { name: "Lisa Park", role: "CTO", initials: "LP" },
  { name: "James Wilson", role: "Head of Operations", initials: "JW" },
  { name: "Priya Sharma", role: "Lead Engineer", initials: "PS" },
];

const About = () => {
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
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">About Us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Our Story & Mission
              </h1>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto">
                Empowering businesses with innovative IT solutions since 2010.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-background">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Our team" className="w-full h-96 object-cover rounded-xl" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Building Technology, Building Trust</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Ultron Computers, we are committed to delivering cutting-edge technology solutions with unmatched service excellence. Established with a vision to redefine IT services, we have grown into a trusted name in Coimbatore for advanced laptop repair, gaming systems, and enterprise IT solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We take pride in being a No.1 Chip Level Service Centre, specializing in precision motherboard repairs and advanced diagnostics. Our team of highly skilled technicians ensures that every device is handled with expertise, accuracy, and care—bringing even the most complex issues back to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
              Beyond service, we are a complete technology partner for individuals, businesses, and corporates.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision & Mission */}
         <section className="section-padding bg-background">
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="glass-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Eye size={26} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and preferred IT service and solution provider, known for innovation, technical excellence, and customer-first approach.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Target size={26} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Ultron Computers, technology is not just our business—it’s our passion. We continuously upgrade our skills and infrastructure to stay ahead in the ever-evolving IT industry, ensuring our customers always receive the best solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-14">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Our Core Offerings
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete range of IT services and hardware solutions built for individuals, dealers, and enterprises.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeDo.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="glass-card p-6 h-full hover-lift">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon size={26} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Why Choose </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
                Our Ultron Computers
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                We combine deep technical expertise with a customer-first approach, delivering solutions that businesses and individuals can rely on every day.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {whyChooseReasons.map((reason, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                    <CheckCircle2 size={24} className="text-accent shrink-0 mt-0.5" />
                    <p className="text-primary-foreground font-medium">{reason}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>       
      </main>
      <Footer />
    </div>
  );
};

export default About;
