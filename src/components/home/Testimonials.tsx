import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinanceFirst Inc.",
    content: "TechCore transformed our entire IT infrastructure. Their team's expertise and responsiveness have been invaluable to our business operations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director of IT, Global Logistics",
    content: "Outstanding networking solutions and AMC support. We've experienced 99.9% uptime since partnering with TechCore. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, MedTech Solutions",
    content: "Their IT consulting helped us modernize our systems and cut costs by 40%. Professional, knowledgeable, and truly enterprise-grade service.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
              "{testimonials[current].content}"
            </p>
            <p className="font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
