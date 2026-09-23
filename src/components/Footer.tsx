import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";
import { Starburst } from "./motifs";
import logoUrl from "../assets/photos/logo/magictime-logo.jpg";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const navLinks = [
  { name: "About", to: "about" },
  { name: "What We Do", to: "what-we-do" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Contact", to: "contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary pt-20 pb-10 border-t border-border-subtle relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer inline-block mb-6">
              <img src={logoUrl} alt="Magic Time Events" className="h-16 w-auto object-contain mix-blend-screen" />
            </Link>
            <p className="text-xl font-headline italic text-text-muted mb-6">
              Your Dream Event, Delivered
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/magictimeevents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-white hover:bg-accent-orange hover:text-white transition-colors border border-border-subtle"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-text-muted hover:text-accent-orange transition-colors cursor-pointer text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-muted">
              <li>
                <a href="tel:+918079707873" className="hover:text-accent-orange transition-colors">+91 8079707873</a>
              </li>
              <li>
                <a href="tel:+917978172784" className="hover:text-accent-orange transition-colors">+91 7978172784</a>
              </li>
              <li>Bhubaneswar, Odisha, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} Magic Time Events. All rights reserved.
          </p>
          
          <Link 
            to="hero" 
            smooth={true} 
            duration={500}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors cursor-pointer group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Starburst className="absolute bottom-10 right-10 opacity-20 w-16 h-16 pointer-events-none" />
    </footer>
  );
}
