import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";  

const images = [
  { src: gallery1, alt: "Enterprise Data Center", caption: "State-of-the-Art Data Center", w: 768, h: 512 },
  { src: gallery2, alt: "IT Team Collaboration", caption: "Expert Team at Work", w: 768, h: 512 },
  { src: gallery3, alt: "Network Infrastructure", caption: "Network Infrastructure", w: 512, h: 768 },
  { src: gallery4, alt: "Command Center", caption: "IT Command Center", w: 768, h: 512 },
  { src: gallery5, alt: "Hardware Installation", caption: "On-Site Installation", w: 512, h: 768 },
  { src: gallery6, alt: "Server Room", caption: "Enterprise Server Room", w: 768, h: 512 },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Work in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our enterprise-grade IT solutions, infrastructure deployments, and expert team.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.08}
              className={img.h > img.w ? "row-span-2" : ""}
            >
              <div
                className="relative group cursor-pointer overflow-hidden rounded-xl h-full"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.w}
                  height={img.h}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end">
                  <p className="text-primary-foreground font-semibold text-sm md:text-base p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
