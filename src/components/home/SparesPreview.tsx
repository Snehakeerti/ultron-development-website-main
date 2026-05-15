import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardDrive, Laptop, Cpu, MemoryStick, MonitorSmartphone, CheckCircle2, CpuIcon } from "lucide-react";
import laptopDellLatitude5420 from "@/assets/laptop-dell-latitude-5420.jpg";
import laptopDellLatitude5400 from "@/assets/dell-latitude-5400.jpeg";
import laptopMacbookProA17084 from "@/assets/mac-book-pro-A1708-4.jpeg";
import laptopMacbookProA2159 from "@/assets/mac-book-pro-A2159.jpeg";

const featuredProducts = [
    {
        name: "Dell Latitude 5420",
        category: "Used Laptops",
        desc: "Premium business-class laptop, fully tested and refurbished with warranty support.",
        image: laptopDellLatitude5420,
        icon: Laptop,
        featured: false,
        specs: [
            { icon: CpuIcon, label: "Intel i7 -11th gen Processor @2.60Ghz" },
            { icon: MemoryStick, label: "16GB RAM • 256GB Nvme SSD" },
            { icon: MonitorSmartphone, label: '13.3" LED FHD' },
        ],
        highlights: ["Quality tested", "Warranty included", "Ready to ship"],
    },
    {
        name: "Dell Latitude 5400",
        category: "Used Laptops",
        desc: "Premium business-class laptop, fully tested and refurbished with warranty support.",
        image: laptopDellLatitude5400,
        icon: Laptop,
        featured: false,
        specs: [
            { icon: CpuIcon, label: "Intel i5 -11th gen Processor @2.60Ghz" },
            { icon: MemoryStick, label: "16GB RAM • 256GB Nvme SSD" },
            { icon: MonitorSmartphone, label: '13.3" LED FHD' },
        ],
        highlights: ["Quality tested", "Warranty included", "Ready to ship"],
    },
    {
        name: "Mac Book Pro A2159",
        category: "MacBook",
        desc: "Premium business-class laptop, fully tested and refurbished with warranty support.",
        image: laptopMacbookProA2159,
        icon: Laptop,
        featured: false,
        specs: [
            { icon: CpuIcon, label: "i5" },
            { icon: MemoryStick, label: "8GB RAM • 256GB SSD" },
            { icon: MonitorSmartphone, label: '13.3inch' },
        ],
        highlights: ["Quality tested", "Warranty included", "Ready to ship"],
    },
    {
        name: "Mac Book Pro A1932",
        category: "MacBook",
        desc: "Premium business-class laptop, fully tested and refurbished with warranty support.",
        image: laptopMacbookProA17084,
        icon: Laptop,
        featured: false,
        specs: [
            { icon: CpuIcon, label: "i5" },
            { icon: MemoryStick, label: "8GB RAM • 256GB SSD" },
            { icon: MonitorSmartphone, label: '13.3 inch' },
        ],
        highlights: ["Quality tested", "Warranty included", "Ready to ship"],
    },

];

const SparesPreview = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                <AnimatedSection className="text-center mb-14">
                    <span className="text-accent font-semibold text-sm tracking-wider uppercase">IT Spares</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        Featured Products
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Quality-tested laptops, enterprise storage, and premium accessories — ready to deliver.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, i) => (
                        <AnimatedSection
                            key={product.name}
                            delay={i * 0.08}
                            className={product.featured ? "sm:col-span-2" : ""}
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
                                        <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                ) : (
                                    <div className="aspect-[16/10] bg-gradient-to-br from-secondary/40 to-secondary/10 flex items-center justify-center">
                                        {product.icon && <product.icon size={48} className="text-accent/60" />}
                                    </div>
                                )}

                                <div className="p-5 flex flex-col flex-1">
                                    <span className="text-xs font-medium text-accent mb-1">{product.category}</span>
                                    <h3 className="font-semibold text-foreground text-base mb-2">{product.name}</h3>
                                    <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>

                                    {product.specs && (
                                        <ul className="space-y-1.5 mb-3">
                                            {product.specs.map((s) => (
                                                <li key={s.label} className="flex items-center gap-2 text-sm text-foreground">
                                                    <span className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                                                        <s.icon size={14} className="text-accent" />
                                                    </span>
                                                    {s.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {product.highlights && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {product.highlights.map((h) => (
                                                <span
                                                    key={h}
                                                    className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary/60 px-2 py-1 rounded-full"
                                                >
                                                    <CheckCircle2 size={11} className="text-accent" />
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.3} className="text-center mt-12">
                    <Link to="/spares">
                        <Button variant="accent" size="lg" className="gap-2">
                            View All Products <ArrowRight size={18} />
                        </Button>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SparesPreview;
