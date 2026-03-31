import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

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
                Founded in 2010, TechCore has grown from a small IT consultancy into a full-service technology solutions provider trusted by over 200 enterprises across multiple industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence, innovation, and customer satisfaction drives everything we do. We don't just provide services — we become your long-term technology partner.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl font-bold text-foreground">Our Journey</h2>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="w-20 shrink-0 text-right">
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="w-px bg-accent/30 shrink-0 relative">
                      <div className="w-3 h-3 rounded-full bg-accent absolute -left-[5px] top-1" />
                    </div>
                    <div className="pb-4">
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
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
                  To be the most trusted IT solutions partner for businesses worldwide, driving digital transformation through innovation and reliability.
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
                  To deliver enterprise-grade IT infrastructure, support, and consulting services that empower organizations to achieve peak performance and growth.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-14">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Team</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">Meet the Experts</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="glass-card p-6 text-center hover-lift">
                    <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-xl">{member.initials}</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <AnimatedSection className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join 200+ businesses that trust TechCore for their IT needs.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">Contact Us Today</Button>
            </Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
