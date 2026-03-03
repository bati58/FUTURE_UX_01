import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Smile,
  Sparkles,
  Baby,
  Stethoscope,
  Syringe,
  Heart,
  Award,
  Clock,
  Shield,
  Star,
  Phone,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { serviceDetails } from "../data/services";
import { founderProfile } from "../data/founder";

export function Homepage() {
  const serviceIcons: Record<string, typeof Stethoscope> = {
    "general-dentistry": Stethoscope,
    "cosmetic-dentistry": Sparkles,
    "teeth-whitening": Smile,
    "pediatric-dentistry": Baby,
    "root-canal-treatment": Syringe,
    "dental-implants": Heart,
  };

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#e8f4ff] to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Gentle, Modern Dental Care for Your Whole Family
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Trusted by 5,000+ patients. Advanced treatments with a personal touch.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto"
                  >
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+15551234567">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0f6cbf] text-[#0f6cbf] hover:bg-[#0f6cbf] hover:text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-gray-700">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#0f6cbf]" />
                  <span className="text-gray-700">Certified Dentists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#0f6cbf]" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643660527072-9c702932f606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGRlbnRpc3QlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjUyNDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Smiling patient and dentist in modern clinic"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for all your needs, from routine checkups to advanced treatments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service Cards */}
            {serviceDetails.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Stethoscope;
              return (
                <div
                  key={service.slug}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-[#e8f4ff] w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0f6cbf] transition-colors">
                    <Icon className="w-7 h-7 text-[#0f6cbf] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.summary}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[#0f6cbf] hover:text-[#0b4f8a] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SmileCare?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with compassionate care to give you the best dental experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Experienced & Certified Dentists",
                description: "Our team of highly qualified professionals brings decades of expertise.",
              },
              {
                icon: Sparkles,
                title: "Modern Equipment & Technology",
                description: "State-of-the-art facilities for precise, efficient treatments.",
              },
              {
                icon: Heart,
                title: "Comfortable & Pain-Free Treatment",
                description: "We prioritize your comfort with gentle techniques and sedation options.",
              },
              {
                icon: Clock,
                title: "Flexible Appointment Scheduling",
                description: "Evening and weekend appointments available for your convenience.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0f6cbf] rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Feature Image */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0Mzc3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern dental clinic interior"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-[#f8fbff]">
              <ImageWithFallback
                src={founderProfile.photo}
                alt={`${founderProfile.name} portrait`}
                className="w-full h-[460px] md:h-[560px] object-contain object-top"
              />
            </div>

            <div>
              <p className="inline-flex px-4 py-1 rounded-full bg-[#e8f4ff] text-[#0f8a8f] text-sm mb-4">
                Founder Spotlight
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Meet {founderProfile.name}
              </h2>
              <p className="text-[#0f6cbf] font-medium mb-4">{founderProfile.role}</p>
              <p className="text-gray-700 mb-6">{founderProfile.shortBio}</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {founderProfile.highlights.slice(0, 4).map((item, index) => (
                  <div key={index} className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button className="bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white rounded-full px-8 h-12">
                  View Full Profile & Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Hawi F.",
                rating: 5,
                text: "SmileCare made my dental anxiety disappear! The staff is incredibly gentle and professional. My teeth whitening results are amazing!",
                image: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcyNDY4MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                name: "Negash M.",
                rating: 5,
                text: "Best dental experience I've ever had. The modern equipment and skilled dentists made my root canal completely painless. Highly recommend!",
                image: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNDc0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                name: "Selam T.",
                rating: 5,
                text: "My kids actually look forward to their dental appointments now! The pediatric team is wonderful with children. Thank you, SmileCare!",
                image: "https://images.unsplash.com/photo-1770321119305-f191c09c5801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjUwMDU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                name: "Bati J.",
                rating: 5,
                text: "I came in with severe tooth pain and was treated the same day. The dentist explained every step clearly, and the relief was immediate.",
                image: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?auto=format&fit=crop&w=1080&q=80",
              },
              {
                name: "Milly B.",
                rating: 5,
                text: "The clinic is very clean and organized. My cleaning and checkup were smooth, and the team gave me practical tips that improved my gum health.",
                image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1080&q=80",
              },
              {
                name: "Begonet D.",
                rating: 5,
                text: "I had cosmetic bonding done here and the results look natural. They listened to what I wanted and made sure I was comfortable throughout.",
                image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1080&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#e8f4ff] overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0f6cbf] to-[#0b4f8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Book your appointment today and experience stress-free dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0f6cbf] hover:bg-[#0f8a8f] hover:text-white transition-colors rounded-full px-8 h-14 text-lg w-full sm:w-auto"
              >
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0f6cbf] rounded-full px-8 h-14 text-lg w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Clinic
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

