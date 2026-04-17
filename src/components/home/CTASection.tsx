import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ConsultationModal from "../ConsultationModal";


const serviceOptions = [
  "Laptop Repair",
  "Desktop Repair",
  "Motherboard Repair",
  "Data Recovery",
  "Chip Level Service",
  "Others"
];

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="section-padding bg-background">
      <AnimatedSection className="container-custom">
        <div className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px]" />
          <div className="relative z-10">

            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Trusted Laptop & Computer Repair Center in Coimbatore
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Quality repairs, genuine spares, and on-time delivery — backed by 30-day warranty and 10,000+ happy clients.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="gap-2"
              onClick={() => setOpen(true)}
            >
              Get Free Estimate
              <ArrowRight size={18} />
            </Button>

            <ConsultationModal
              open={open}
              setOpen={setOpen}
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
