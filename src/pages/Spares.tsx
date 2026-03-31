import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Network, HardDrive, Monitor, Cpu, ShoppingCart } from "lucide-react";

const categories = ["All", "Servers", "Networking Devices", "Storage", "Workstations", "Accessories"];

const products = [
  { name: "Dell PowerEdge R750", category: "Servers", desc: "Enterprise rack server for demanding workloads.", icon: Server },
  { name: "HP ProLiant DL380", category: "Servers", desc: "Versatile 2U server with industry-leading performance.", icon: Server },
  { name: "Cisco Catalyst 9300", category: "Networking Devices", desc: "Enterprise-class switching platform.", icon: Network },
  { name: "Juniper EX4300", category: "Networking Devices", desc: "High-performance Ethernet switches.", icon: Network },
  { name: "NetApp FAS500f", category: "Storage", desc: "All-flash unified storage system.", icon: HardDrive },
  { name: "Dell EMC Unity XT", category: "Storage", desc: "Midrange storage for mixed workloads.", icon: HardDrive },
  { name: "HP Z6 G5", category: "Workstations", desc: "Professional workstation for intensive computing.", icon: Monitor },
  { name: "Dell Precision 7875", category: "Workstations", desc: "Tower workstation for creators and engineers.", icon: Monitor },
  { name: "APC Smart-UPS 3000", category: "Accessories", desc: "Line-interactive UPS for network equipment.", icon: Cpu },
  { name: "Logitech MX Master 3S", category: "Accessories", desc: "Advanced wireless productivity mouse.", icon: Cpu },
  { name: "Cisco Meraki MR56", category: "Networking Devices", desc: "Wi-Fi 6 cloud-managed access point.", icon: Network },
  { name: "Lenovo ThinkStation P620", category: "Workstations", desc: "AMD Threadripper PRO workstation.", icon: Monitor },
];

const Spares = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

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
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">IT Spares</span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Enterprise Hardware & Spares
              </h1>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto">
                Premium IT hardware from leading manufacturers with competitive pricing and fast delivery.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Filter */}
            <AnimatedSection className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </AnimatedSection>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <AnimatedSection key={product.name} delay={i * 0.05}>
                  <div className="glass-card p-6 hover-lift h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <product.icon size={26} className="text-accent" />
                    </div>
                    <span className="text-xs font-medium text-accent mb-1">{product.category}</span>
                    <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{product.desc}</p>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <ShoppingCart size={14} /> Request Quote
                      </Button>
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Spares;
