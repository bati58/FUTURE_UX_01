import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Check, Phone, Mail, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getServiceBySlug } from "../data/services";

export function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug ?? "");

  if (!service) {
    return (
      <div className="pt-20 pb-20 md:pb-0">
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The service page you requested is unavailable. Browse our services below.
            </p>
            <Link to="/#services">
              <Button className="bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white rounded-full px-8 h-12">
                View All Services
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative py-14 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#212738]/80 via-[#0f6cbf]/45 to-[#212738]/78"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 border border-white/35 text-white px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-[2px]">
              {service.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90">{service.summary}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Procedure Explanation */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About {service.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {service.overview.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of {service.title}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#0f6cbf] rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Image */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Service Preview
                </h2>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">{service.imageCaption}</p>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`item-${index}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#e8f4ff] to-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Book {service.title}?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Talk to our dental team and get a personalized treatment plan.
                </p>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white rounded-full px-8 h-14 text-lg"
                  >
                    Book This Service
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact Card */}
                <div className="bg-white border-2 border-[#0f6cbf] rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule an Appointment</h3>
                  <p className="text-gray-600 mb-6">
                    Get in touch to book your {service.title.toLowerCase()} consultation.
                  </p>
                  <div className="space-y-4">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white rounded-full h-12">
                        Book Online
                      </Button>
                    </Link>
                    <a href="tel:+15551234567" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[#0f6cbf] text-[#0f6cbf] hover:bg-[#0f6cbf] hover:text-white rounded-full h-12"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Us
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0f6cbf] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Address</p>
                      <p className="text-gray-900">
                        Smile Speciality Dental Center
                        <br />
                        XQRH+CPF, Rwanda Street, Addis Ababa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0f6cbf] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <a href="tel:+15551234567" className="text-gray-900 hover:text-[#0f6cbf]">
                        (+251) 96 570 1208
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0f6cbf] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a href="mailto:info@smilecare.com" className="text-gray-900 hover:text-[#0f6cbf]">
                        info@smilecare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0f6cbf] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Hours</p>
                      <div className="text-gray-900 text-sm space-y-1">
                        <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
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

