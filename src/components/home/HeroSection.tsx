import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Monitor, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "14+", label: "Years Experience" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(216,60%,10%,0.92) 0%, hsla(216,45%,18%,0.85) 50%, hsla(216,70%,6%,0.95) 100%)" }} />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 mb-6">
              Enterprise IT Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Laptop Service Center{" "}
            <span className="gradient-text">in Coimbatore</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed"
          >
            Your One-stop destination for all your Laptop repair and replacement needs. An authorized Laptop service center in Coimbatore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                Get Consultation <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card-dark px-6 py-5 flex items-center gap-4 animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <stat.icon size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-xs text-primary-foreground/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
