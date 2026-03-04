import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { serviceDetails } from "../data/services";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    return () => {
      if (servicesCloseTimerRef.current) {
        window.clearTimeout(servicesCloseTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openServicesMenu = () => {
    if (servicesCloseTimerRef.current) {
      window.clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const closeServicesMenu = () => {
    if (servicesCloseTimerRef.current) {
      window.clearTimeout(servicesCloseTimerRef.current);
    }
    servicesCloseTimerRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
      servicesCloseTimerRef.current = null;
    }, 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#212738] shadow-md shadow-black/25"
          : "bg-[#212738]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/smilecare-logo.png"
              alt="SmileCare Dental Clinic logo"
              className="h-11 sm:h-12 w-auto max-w-[200px] object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-slate-100 hover:text-[#8fd2ff] transition-colors"
            >
              Home
            </Link>
            <div
              className="relative"
              ref={servicesMenuRef}
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenu}
            >
              <button
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="text-slate-100 hover:text-[#8fd2ff] transition-colors inline-flex items-center gap-1"
                aria-expanded={isServicesOpen}
                aria-haspopup="menu"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50">
                  <a
                    href="/#services"
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-[#e8f4ff] hover:text-[#0f6cbf] transition-colors"
                  >
                    All Services
                  </a>
                  {serviceDetails.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-[#e8f4ff] hover:text-[#0f6cbf] transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-slate-100 hover:text-[#8fd2ff] transition-colors"
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-100 hover:text-[#8fd2ff] transition-colors"
            >
              Testimonials
            </button>
            <Link
              to="/contact"
              className="text-slate-100 hover:text-[#8fd2ff] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-white text-[#212738] hover:bg-[#0f8a8f] hover:text-white transition-colors rounded-full px-6">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/15 bg-[#212738]/95">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-slate-100 hover:text-[#8fd2ff] transition-colors py-2"
              >
                Home
              </Link>
              <button
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                className="text-slate-100 hover:text-[#8fd2ff] transition-colors py-2 text-left inline-flex items-center justify-between w-full"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-3 pr-1 pb-2 flex flex-col gap-1 border-l-2 border-white/20">
                  <a
                    href="/#services"
                    className="text-sm text-slate-300 hover:text-[#8fd2ff] py-1"
                  >
                    All Services
                  </a>
                  {serviceDetails.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="text-sm text-slate-300 hover:text-[#8fd2ff] py-1"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to="/about"
                className="text-slate-100 hover:text-[#8fd2ff] transition-colors py-2 text-left"
              >
                About
              </Link>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-slate-100 hover:text-[#8fd2ff] transition-colors py-2 text-left"
              >
                Testimonials
              </button>
              <Link
                to="/contact"
                className="text-slate-100 hover:text-[#8fd2ff] transition-colors py-2"
              >
                Contact
              </Link>
              <Link to="/contact" className="pt-2">
                <Button className="w-full bg-white text-[#212738] hover:bg-[#0f8a8f] hover:text-white transition-colors rounded-full">
                  Book Appointment
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
