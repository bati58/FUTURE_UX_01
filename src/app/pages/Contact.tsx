import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { founderProfile } from "../data/founder";

export function Contact() {
  const clinicMapUrl =
    "https://www.google.com/maps/place/Smile+Speciality+Dental+Center/@8.991587,38.7765053,17z/data=!3m1!4b1!4m6!3m5!1s0x164b85fbef16a0a9:0xdcd8e8302a116850!8m2!3d8.9915817!4d38.7790802!16s%2Fg%2F11szf0w9_s?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D";
  const appointmentHeroBg = "/images/book-appointment-bg.jpg";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Appointment request submitted! We'll contact you soon to confirm.");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${appointmentHeroBg}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#212738]/75 via-[#0f6cbf]/45 to-[#212738]/70"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Schedule your visit today and take the first step toward a healthier, brighter smile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Appointment Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Appointment Request Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Adane Jano"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+251 96 570 1208"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="adane@example.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Select Service *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Dentistry</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                        <SelectItem value="whitening">Teeth Whitening</SelectItem>
                        <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                        <SelectItem value="root-canal">Root Canal Treatment</SelectItem>
                        <SelectItem value="implants">Dental Implants</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your dental concerns or questions..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white rounded-full h-14 text-lg"
                  >
                    Submit Appointment Request
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Contact Details */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#0f6cbf] p-2 rounded-lg flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Phone</p>
                        <a
                          href="tel:+15551234567"
                          className="text-gray-900 hover:text-[#0f6cbf] transition-colors"
                        >
                          +251 96 570 1208
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#0f6cbf] p-2 rounded-lg flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Email</p>
                        <a
                          href="mailto:info@smilecare.com"
                          className="text-gray-900 hover:text-[#0f6cbf] transition-colors"
                        >
                          info@smilecare.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#0f6cbf] p-2 rounded-lg flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Address</p>
                        <p className="text-gray-900">
                          Smile Speciality Dental Center<br />
                          XQRH+CPF, Rwanda Street, Addis Ababa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinic Hours */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#0f6cbf]" />
                    <h3 className="text-xl font-bold text-gray-900">Clinic Hours</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="text-gray-900">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-red-900 mb-1">
                        Dental Emergency?
                      </h3>
                      <p className="text-sm text-red-700">
                        Call our emergency hotline for immediate assistance
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:+15559876543"
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-full h-12 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">(+251) 96 570 1208</span>
                  </a>
                </div>

                {/* Founder Mini Profile */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="text-xs uppercase tracking-wide text-[#0f6cbf] mb-2">
                    Founder Profile
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={founderProfile.photo}
                        alt={founderProfile.name}
                        className="w-full h-full object-contain object-top bg-[#f8fbff]"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 leading-tight">{founderProfile.name}</h3>
                      <p className="text-sm text-[#0f6cbf]">{founderProfile.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{founderProfile.shortBio}</p>
                  <Link
                    to="/about"
                    className="inline-flex mt-4 text-sm font-medium text-[#0f6cbf] hover:text-[#0f8a8f] transition-colors"
                  >
                    View Full Profile & Gallery
                  </Link>
                </div>

                {/* Clinic Location Map */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                    <p className="text-sm font-semibold text-gray-900">Clinic Location</p>
                    <p className="text-xs text-gray-600 mt-1">Addis Ababa, Ethiopia</p>
                  </div>
                  <div className="h-64">
                    <iframe
                      title="SmileCare Dental Clinic location map"
                      src="https://www.google.com/maps?q=Smile+Speciality+Dental+Center,+Addis+Ababa&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-4 flex-wrap">
                    <a
                      href={clinicMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#0f6cbf] hover:text-[#0f8a8f] transition-colors"
                    >
                      Open in Google Maps
                    </a>
                    <a
                      href={clinicMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#0f6cbf] hover:text-[#0f8a8f] transition-colors"
                    >
                      View Clinic Listing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

