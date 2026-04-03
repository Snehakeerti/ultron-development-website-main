import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Phone, ArrowRight, Wrench, Clock } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "We'll Call You",
    desc: "Our technician will call you within a few hours to confirm your request.",
  },
  {
    icon: Wrench,
    title: "Free Inspection",
    desc: "Bring your device in — we diagnose it for free with no obligations.",
  },
  {
    icon: CheckCircle,
    title: "Get It Fixed",
    desc: "We fix it fast with genuine parts and hand it back with a 30-day warranty.",
  },
];

const ThankYou = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count <= 0) {
      window.location.href = "/";
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px]" />
          </div>
          <div className="container-custom relative z-10 px-4 md:px-8 text-center">
            {/* Animated check */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center">
                  <CheckCircle size={36} className="text-accent" />
                </div>
              </div>
            </div>

            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              Message Received
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Thank You!
            </h1>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Your message has been sent successfully. Our team at Ultron Computers will get back to you shortly. We're open Mon–Sat, 9:30 AM to 9:00 PM.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="accent" size="lg" className="gap-2">
                  <Home size={18} /> Back to Home
                </Button>
              </Link>
              <a href="tel:+919715097774">
                <Button variant="outline" size="lg" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone size={18} /> Call Us Now
                </Button>
              </a>
            </div>

            <p className="text-primary-foreground/30 text-sm mt-6">
              Redirecting to home in {count}s...
            </p>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 md:px-8">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Next Steps</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">What Happens Next?</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
                Here's what you can expect after submitting your request.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="glass-card p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon size={22} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight size={18} className="text-accent/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="py-10 bg-navy">
          <div className="container-custom px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock size={16} className="text-accent" />
                  <span className="text-primary-foreground font-semibold text-sm">Working Hours</span>
                </div>
                <p className="text-primary-foreground/50 text-sm">Mon – Sat: 9:30 AM – 9:00 PM</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Phone size={16} className="text-accent" />
                  <span className="text-primary-foreground font-semibold text-sm">Call Us</span>
                </div>
                <a href="tel:+919715097774" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors block">
                  +91 97150 97774
                </a>
                <a href="tel:+918438435588" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors block">
                  +91 84384 35588
                </a>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <CheckCircle size={16} className="text-accent" />
                  <span className="text-primary-foreground font-semibold text-sm">Our Promise</span>
                </div>
                <p className="text-primary-foreground/50 text-sm">No Fix, No Fee — Free Inspection</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;