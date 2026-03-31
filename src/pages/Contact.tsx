import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Error", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
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
                Get In Touch
              </h1>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto">
                Ready to transform your IT? Reach out and let's discuss your project.
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
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={5}
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" variant="accent" className="w-full gap-2">
                    <Send size={16} /> Send Message
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
                        <p className="text-muted-foreground text-sm">123 Business Park, Tech District, City 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone size={22} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Mail size={22} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm">info@techcore.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                        aria-label="Social link"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden h-64 bg-secondary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location map"
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
