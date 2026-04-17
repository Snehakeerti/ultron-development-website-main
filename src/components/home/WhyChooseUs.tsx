import { Users, Handshake, Coins, ThumbsUp, MessageCircleHeart, CircleDollarSign, Hourglass, Truck } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const benefits = [
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Certified engineers with 14+ years of hands-on experience in diagnosing and repairing complex hardware issues."
  },
  {
    icon: Handshake,
    title: "Customer Friendly",
    desc: "Supportive and responsive service team focused on clear communication and customer satisfaction."
  },
  {
    icon: Coins,
    title: "No Fix, No Fee",
    desc: "You only pay when the issue is successfully resolved — no hidden charges or unnecessary costs."
  },
  {
    icon: ThumbsUp,
    title: "Well-Reputed",
    desc: "Trusted by hundreds of customers for delivering reliable service with consistent quality standards."
  },
  {
    icon: MessageCircleHeart,
    title: "Free Inspection",
    desc: "Get a complete device inspection and problem diagnosis at no cost before confirming the service."
  },
  {
    icon: CircleDollarSign,
    title: "Cost-Effective",
    desc: "Affordable pricing designed to provide the best value without compromising on quality."
  },
  {
    icon: Hourglass,
    title: "On-Time Delivery",
    desc: "Fast turnaround time to ensure your device is repaired and delivered as promised."
  },
  {
    icon: Truck,
    title: "Free Courier Support",
    desc: "Secure courier service available for sending and receiving devices from any location with proper packaging guidance."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            The TechCore Advantage
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon size={34} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
