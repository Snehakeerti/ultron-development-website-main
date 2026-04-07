import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0K5fDyJvN0SSdFtG9N3NBszUxVK0BkCadVWb6xwcWTHPCFsSi_SnhkaAELt2Con4RAA/exec";

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

    if (!form.name || !form.phone || !form.message) {
      toast({
        title: "Error",
        description: "Please fill required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      data.append(key, value)
    );

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
      });

      navigate("/thank-you");

    } catch {
      toast({
        title: "Error",
        description: "Please try again later",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">

      <Navbar />

      <main>

        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy text-center">
          <AnimatedSection>
            <span className="text-accent font-semibold uppercase">
              Contact Us
            </span>

            <h1 className="text-4xl font-bold mt-2">
              Let's Fix It Together
            </h1>

            <p className="opacity-70 mt-3">
              Fill the form and our technician will contact you.
            </p>
          </AnimatedSection>
        </section>


        {/* Contact */}
        <section className="section-padding">

          <div className="container-custom grid lg:grid-cols-2 gap-10">


            {/* Form */}
            <AnimatedSection>

              <div className="glass-card p-8">

                <h2 className="text-2xl font-bold mb-4">
                  Send Message
                </h2>


                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  <Input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />


                  <select
                    className="w-full border rounded-md h-10 px-3"
                    value={form.service}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        service: e.target.value,
                      })
                    }
                  >
                    <option>Select Service</option>

                    {serviceOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>


                  <Input
                    placeholder="Device model"
                    value={form.device}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        device: e.target.value,
                      })
                    }
                  />


                  <Textarea
                    placeholder="Describe problem"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                  />


                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >

                    <Send size={16} />

                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}

                  </Button>

                </form>

              </div>

            </AnimatedSection>



            {/* Contact info + map */}
            <AnimatedSection>

              <div className="space-y-6">


                <div className="flex gap-3">
                  <MapPin />
                  Coimbatore
                </div>


                <div className="flex gap-3">
                  <Phone />
                  +91 9715097774
                </div>


                <div className="flex gap-3">
                  <Mail />
                  sale@ultroncomputer.com
                </div>


                <div className="flex gap-3">
                  <Clock />
                  Mon–Sat 9:30 AM – 9 PM
                </div>



                {/* iframe map */}
                <div className="rounded-xl overflow-hidden h-64">

                  <iframe
                    src="https://www.google.com/maps?q=Ultron+Computers+Coimbatore&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />

                </div>



                {/* social */}
                <div className="flex gap-3">

                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="border p-2 rounded-full"
                    >
                      <item.icon size={18} />
                    </a>
                  ))}

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