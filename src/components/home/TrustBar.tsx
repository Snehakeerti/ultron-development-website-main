import AnimatedSection from "@/components/AnimatedSection";

const logos = [
  "Accenture", "Deloitte", "Microsoft", "Cisco", "Dell", "HP", "IBM", "Oracle",
];

const TrustBar = () => {
  return (
    <section className="py-12 bg-secondary border-y border-border/50">
      <AnimatedSection className="container-custom px-4 md:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase">
          Trusted by Leading Businesses
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-muted-foreground/40 font-bold text-lg md:text-xl tracking-wide hover:text-muted-foreground/70 transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default TrustBar;
