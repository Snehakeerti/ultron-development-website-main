import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navigate = useNavigate();

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0K5fDyJvN0SSdFtG9N3NBszUxVK0BkCadVWb6xwcWTHPCFsSi_SnhkaAELt2Con4RAA/exec";

const serviceOptions = [
  "Computer & Laptop Repair",
  "AMC & Server Maintenance",
  "Multi-Brand System Sales",
  "Genuine Spare Parts",
  "Virus Removal & Security",
  "Performance & Optimization",
  "Other",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    device: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Error", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("service", form.service);
    data.append("device", form.device);
    data.append("message", form.message);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx0K5fDyJvN0SSdFtG9N3NBszUxVK0BkCadVWb6xwcWTHPCFsSi_SnhkaAELt2Con4RAA/exec", {
        method: "POST",
        body: data,
      });
      navigate("/thank-you");
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please call us directly at +91 9715097774.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Let's Fix It Together
              </h1>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto">
                Walk in, call us, or fill the form — our technicians are ready to help with a free inspection and honest advice.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <AnimatedSection>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  We'll respond within a few hours on working days (Mon–Sat, 9:30am–9pm).
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                      <Input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        maxLength={15}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com (optional)"
                      maxLength={255}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Device Brand / Model</label>
                      <Input
                        value={form.device}
                        onChange={(e) => setForm({ ...form, device: e.target.value })}
                        placeholder="e.g. HP Pavilion, Dell XPS"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Describe the Issue *</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="e.g. My laptop won't turn on, screen is cracked, running very slow..."
                      rows={5}
                      maxLength={1000}
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent" className="w-full gap-2" disabled={isSubmitting}>
                    <Send size={16} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <MapPin size={22} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground text-sm">
                          195, Kongu Illam Complex, 100 Feet Road End, Tatabad, Gandhipuram, Coimbatore – 641012
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone size={22} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <a href="tel:+919715097774" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                          +91 97150 97774
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Mail size={22} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:sale@ultroncomputer.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                          sale@ultroncomputer.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Clock size={22} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                        <p className="text-muted-foreground text-sm">Mon – Sat: 9:30 AM to 9:00 PM</p>
                        <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden h-64 bg-secondary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.4901273107494!2d76.9531527732679!3d11.020845654641379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fba7a678fb%3A0x61a72df6b2691621!2sUltron%20Computers%20-%20Laptop%20Service%20Center%20in%20Coimbatore%2C%20Gandhipuram%20for%20HP%2C%20Lenovo%2C%20Sony%2C%20DELL%2C%20Asus%2C%20Acer%20and%20Apple%20brands!5e1!3m2!1sen!2sin!4v1775214988019!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ultron Computers Location"
                  />
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;