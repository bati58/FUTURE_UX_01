import { useMemo, useState } from "react";
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
import { serviceDetails } from "../data/services";
import { createAppointment } from "../lib/api";

type AppointmentFormState = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

type AppointmentFormErrors = Partial<Record<keyof AppointmentFormState, string>>;

const fullNamePattern = /^[A-Za-z][A-Za-z' -]{1,119}$/;
const internationalPhonePattern = /^\+?[1-9]\d{7,14}$/;
const ethiopianLocalPattern = /^09\d{8}$/;
const ethiopianIntlNoPlusPattern = /^2519\d{8}$/;

function normalizePhone(phone: string) {
  let cleaned = phone.trim().replace(/[^\d+]/g, "");

  if (cleaned.startsWith("00")) {
    cleaned = `+${cleaned.slice(2)}`;
  }

  if (ethiopianLocalPattern.test(cleaned)) {
    return `+251${cleaned.slice(1)}`;
  }

  if (ethiopianIntlNoPlusPattern.test(cleaned)) {
    return `+${cleaned}`;
  }

  return cleaned;
}

function isValidPhone(phone: string) {
  return internationalPhonePattern.test(normalizePhone(phone));
}

export function Contact() {
  const clinicMapUrl =
    "https://www.google.com/maps/place/Smile+Speciality+Dental+Center/@8.991587,38.7765053,17z/data=!3m1!4b1!4m6!3m5!1s0x164b85fbef16a0a9:0xdcd8e8302a116850!8m2!3d8.9915817!4d38.7790802!16s%2Fg%2F11szf0w9_s?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D";
  const appointmentHeroBg = "/images/book-appointment-bg.jpg";

  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<AppointmentFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const allowedServices = useMemo(
    () => new Set([...serviceDetails.map((service) => service.slug), "general-consultation"]),
    [],
  );

  const validateForm = (data: AppointmentFormState): AppointmentFormErrors => {
    const errors: AppointmentFormErrors = {};
    const fullName = data.fullName.trim();
    const normalizedPhone = normalizePhone(data.phone);
    const email = data.email.trim();
    const message = data.message.trim();
    const preferredDate = new Date(data.date);

    if (!fullName) {
      errors.fullName = "Full name is required.";
    } else if (fullName.length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    } else if (fullName.length > 120) {
      errors.fullName = "Full name is too long.";
    } else if (!fullNamePattern.test(fullName)) {
      errors.fullName =
        "Use letters, spaces, apostrophes, and hyphens only.";
    }

    if (!normalizedPhone) {
      errors.phone = "Phone number is required.";
    } else if (!isValidPhone(normalizedPhone)) {
      errors.phone =
        "Enter a valid phone number (supports 09..., +2519..., or international formats).";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!data.service) {
      errors.service = "Please select a service.";
    } else if (!allowedServices.has(data.service)) {
      errors.service = "Please choose a valid service option.";
    }

    if (!data.date) {
      errors.date = "Preferred date is required.";
    } else if (Number.isNaN(preferredDate.getTime())) {
      errors.date = "Preferred date must be valid.";
    } else {
      preferredDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (preferredDate < today) {
        errors.date = "Preferred date cannot be in the past.";
      }
    }

    if (message.length > 1000) {
      errors.message = "Message cannot exceed 1000 characters.";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Please correct the form fields and try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      await createAppointment({
        fullName: formData.fullName.trim(),
        phone: normalizePhone(formData.phone),
        email: formData.email.trim().toLowerCase(),
        service: formData.service,
        preferredDate: formData.date,
        message: formData.message.trim(),
      });

      toast.success("Appointment request submitted! We'll contact you soon to confirm.");

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        message: "",
      });
      setFormErrors({});
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Could not submit your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
                      aria-invalid={Boolean(formErrors.fullName)}
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) {
                          setFormErrors((prev) => ({ ...prev, fullName: undefined }));
                        }
                      }}
                      className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                    />
                    {formErrors.fullName ? (
                      <p className="text-sm text-red-600">{formErrors.fullName}</p>
                    ) : null}
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
                        aria-invalid={Boolean(formErrors.phone)}
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formErrors.phone) {
                            setFormErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                      />
                      {formErrors.phone ? (
                        <p className="text-sm text-red-600">{formErrors.phone}</p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="adane@example.com"
                        required
                        aria-invalid={Boolean(formErrors.email)}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) {
                            setFormErrors((prev) => ({ ...prev, email: undefined }));
                          }
                        }}
                        className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                      />
                      {formErrors.email ? (
                        <p className="text-sm text-red-600">{formErrors.email}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Select Service *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => {
                        setFormData({ ...formData, service: value });
                        if (formErrors.service) {
                          setFormErrors((prev) => ({ ...prev, service: undefined }));
                        }
                      }}
                    >
                      <SelectTrigger className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceDetails.map((service) => (
                          <SelectItem key={service.slug} value={service.slug}>
                            {service.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="general-consultation">
                          General Consultation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.service ? (
                      <p className="text-sm text-red-600">{formErrors.service}</p>
                    ) : null}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      aria-invalid={Boolean(formErrors.date)}
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (formErrors.date) {
                          setFormErrors((prev) => ({ ...prev, date: undefined }));
                        }
                      }}
                      className="h-12 border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {formErrors.date ? (
                      <p className="text-sm text-red-600">{formErrors.date}</p>
                    ) : null}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your dental concerns or questions..."
                      rows={4}
                      aria-invalid={Boolean(formErrors.message)}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) {
                          setFormErrors((prev) => ({ ...prev, message: undefined }));
                        }
                      }}
                      className="border-gray-300 focus:border-[#0f6cbf] focus:ring-[#0f6cbf]"
                    />
                    <p className="text-xs text-gray-500">
                      {formData.message.length}/1000 characters
                    </p>
                    {formErrors.message ? (
                      <p className="text-sm text-red-600">{formErrors.message}</p>
                    ) : null}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0f6cbf] hover:bg-[#0b4f8a] disabled:bg-[#0f6cbf]/70 disabled:cursor-not-allowed text-white rounded-full h-14 text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
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

