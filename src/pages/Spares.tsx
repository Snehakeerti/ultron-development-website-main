import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HardDrive, Laptop, Cpu, ShoppingCart, Cpu as CpuIcon, MemoryStick, MonitorSmartphone, CheckCircle2 } from "lucide-react";
import laptopDellLatitude5420 from "@/assets/laptop-dell-latitude-5420.jpg";
import laptopDellLatitude5400 from "@/assets/dell-latitude-5400.jpeg";
import laptopDellLatitude5410 from "@/assets/dell-latitude-5410-touch.jpg";

const categories = ["All", "Used Laptops", "Storage", "Accessories"] as const;
type Category = (typeof categories)[number];

interface Product {
  name: string;
  category: Exclude<Category, "All">;
  desc: string;
  image?: string;
  specs?: { icon: typeof CpuIcon; label: string }[];
  highlights?: string[];
}

const products: Product[] = [
  // Used Laptops
  {
    name: "Dell Latitude 5420",
    category: "Used Laptops",
    desc: "Premium business-class laptop, fully tested and refurbished with warranty support.",
    image: laptopDellLatitude5420,
    specs: [
      { icon: CpuIcon, label: "Intel i5 — 11th Gen Processor" },
      { icon: MemoryStick, label: "8GB RAM • 256GB NVMe SSD" },
      { icon: MonitorSmartphone, label: '14" FHD LED Display' },
    ],
    highlights: ["Quality tested", "Warranty included", "Ready to ship"],
  },
  {
    name: "Dell Latitude 5400",
    category: "Used Laptops",
    desc: "Premium business-class laptop, fully tested and refurbished with warranty support.",
    image: laptopDellLatitude5400,
    specs: [
      { icon: CpuIcon, label: "I5 - 8th Gen" },
      { icon: MemoryStick, label: "8GB RAM • 256GB SSD" },
      { icon: MonitorSmartphone, label: '14" Full HD Screen' },
    ],
    highlights: ["Quality tested", "Warranty included", "Ready to ship"],
  },
  {
    name: "Dell Latitude 5410 Touch",
    category: "Used Laptops",
    desc: "Premium business-class laptop, fully tested and refurbished with warranty support.",
    image: laptopDellLatitude5410,
    specs: [
      { icon: CpuIcon, label: "Intel i5 — 11th Gen Processor" },
      { icon: MemoryStick, label: "8GB RAM • 256GB NVMe SSD" },
      { icon: MonitorSmartphone, label: '14" FHD LED Display' },
    ],
    highlights: ["Quality tested", "Warranty included", "Ready to ship"],
  },
  // Storage
  { name: "NetApp FAS500f", category: "Storage", desc: "All-flash unified storage system for enterprise workloads." },
  { name: "Dell EMC Unity XT", category: "Storage", desc: "Midrange storage built for mixed workloads." },
  { name: "Seagate Exos X18", category: "Storage", desc: "18TB enterprise-grade hard drive for data centers." },
  { name: "Samsung PM9A3 NVMe", category: "Storage", desc: "High-performance enterprise SSD for servers." },
  // Accessories
  { name: "APC Smart-UPS 3000", category: "Accessories", desc: "Line-interactive UPS for network equipment." },
  { name: "Logitech MX Master 3S", category: "Accessories", desc: "Advanced wireless productivity mouse." },
  { name: "Dell USB-C Dock WD22", category: "Accessories", desc: "Universal docking station with dual 4K support." },
  { name: "Jabra Evolve2 65", category: "Accessories", desc: "Professional wireless headset for hybrid work." },
];

const categoryIcon: Record<Exclude<Category, "All">, typeof HardDrive> = {
  Storage: HardDrive,
  "Used Laptops": Laptop,
  Accessories: Cpu,
};

const Spares = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 px-4 md:px-8 text-center">
            <AnimatedSection>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">IT Spares</span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
                Hardware, Laptops & Accessories
              </h1>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto">
                Curated storage solutions, quality-tested used laptops, and premium accessories — all backed by warranty
                and fast delivery.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Filter */}
            <AnimatedSection className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    active === cat
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </AnimatedSection>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => {
                const Icon = categoryIcon[product.category];
                const isFeatured = product.image && product.specs;

                return (
                  <AnimatedSection
                    key={product.name}
                    delay={i * 0.05}
                    className={isFeatured ? "" : ""}
                  >
                    <div className="glass-card hover-lift h-full flex flex-col overflow-hidden">
                      {product.image ? (
                        <div className="relative aspect-[16/10] bg-secondary/30 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                      ) : (
                        <div className="aspect-[16/10] bg-gradient-to-br from-secondary/40 to-secondary/10 flex items-center justify-center">
                          <Icon size={56} className="text-accent/60" />
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-medium text-accent mb-1">{product.category}</span>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{product.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>

                        {product.specs && (
                          <ul className="space-y-2 mb-4">
                            {product.specs.map((s) => (
                              <li key={s.label} className="flex items-center gap-3 text-sm text-foreground">
                                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                  <s.icon size={16} className="text-accent" />
                                </span>
                                {s.label}
                              </li>
                            ))}
                          </ul>
                        )}

                        {product.highlights && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.highlights.map((h) => (
                              <span
                                key={h}
                                className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-full"
                              >
                                <CheckCircle2 size={12} className="text-accent" />
                                {h}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="mt-auto pt-2">
                          <Link to="/contact">
                            <Button variant={isFeatured ? "accent" : "outline"} size="sm" className="w-full gap-2">
                              <ShoppingCart size={14} /> Request Quote
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Spares;
