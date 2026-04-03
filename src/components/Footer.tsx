import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import ultronLogo from "@/assets/round-logo-bg-remove.png";


const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">

              <img
                src={ultronLogo}
                alt="best computer service center in coimbatore"
                className="w-10 h-10 object-contain"
              />

              <span className="text-xl font-bold">
                Ultron Computers
              </span>

            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Ultron Computers is a reputed and trusted service provider for computer and laptop repair
              solutions in Gandhipuram, Coimbatore.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Spares", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm">
                  195, Dr Subbarayan St, Sivananda Colony, Tatabad, Gandhipuram, Coimbatore, Tamil Nadu 641012 </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-primary-foreground/60 text-sm">+91 9715097774</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-primary-foreground/60 text-sm">sale@ultroncomputer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 Ultron Computer. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 text-sm transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
