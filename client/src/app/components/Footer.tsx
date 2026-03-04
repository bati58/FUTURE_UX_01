import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#414833] border-t border-[#525b45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center group">
              <img
                src="/images/smilecare-logo.png"
                alt="SmileCare Dental Clinic logo"
                className="h-14 w-auto max-w-[220px] object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-100 text-sm">
              Gentle, modern dental care for your whole family. Trusted by 5,000+ patients.
            </p>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/adane.jano.9"
                className="text-slate-200 hover:text-orange-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-200 hover:text-orange-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-200 hover:text-orange-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/general-dentistry"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cosmetic-dentistry"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  to="/services/teeth-whitening"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link
                  to="/services/dental-implants"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-100 text-sm">
                  Smile Speciality Dental Center, XQRH+CPF, Rwanda Street, Addis Ababa
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+251 96 570 1208"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  (+251) 96 570 1208
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="mailto:info@smilecare.com"
                  className="text-slate-100 hover:text-orange-300 transition-colors text-sm"
                >
                  info@smilecare.com
                </a>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-white/12 border border-white/25 rounded-lg">
              <p className="text-white text-xs mb-1">Emergency?</p>
              <a
                href="tel:+15559876543"
                className="text-white hover:text-orange-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>(+251) 96 570 1208</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/25 text-center">
          <p className="text-slate-100 text-sm">
            &copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
