import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/ultron-logo.png";


const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Spares", path: "/spares" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
 
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50"
          : "bg-transparent"
        }`}
    >
      <div className="container-custom flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Ultron Computers"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors relative group ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
                } ${location.pathname === link.path ? (scrolled ? "text-foreground" : "text-primary-foreground") : ""}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="nav-cta" size="sm">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-medium py-2 transition-colors ${location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block pt-2">
                <Button variant="accent" className="w-full">
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
