import { Link } from "react-router";
import { Award, HeartHandshake, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { founderProfile } from "../data/founder";

export function About() {
  return (
    <div className="pt-20 pb-20 md:pb-0">
      <section className="relative bg-gradient-to-br from-[#e8f4ff] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Leadership that blends clinical excellence, compassion, and trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-[#f8fbff]">
              <ImageWithFallback
                src={founderProfile.photo}
                alt={`Portrait of ${founderProfile.name}`}
                className="w-full h-[520px] md:h-[640px] object-contain object-top"
              />
            </div>

            <div>
              <p className="inline-flex px-4 py-1 rounded-full bg-[#e8f4ff] text-[#0f8a8f] text-sm mb-4">
                SmileCare Leadership
              </p>
              <h2 className="text-3xl font-bold text-gray-900">{founderProfile.name}</h2>
              <p className="text-[#0f6cbf] font-medium mt-1">{founderProfile.role}</p>

              <p className="text-gray-700 mt-6">{founderProfile.shortBio}</p>

              <div className="space-y-4 mt-6">
                {founderProfile.longBio.map((paragraph, index) => (
                  <p key={index} className="text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {founderProfile.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <Award className="w-8 h-8 text-[#0f6cbf] mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clinical Standards</h3>
              <p className="text-sm text-gray-600">
                Evidence-based treatment planning with quality-focused care pathways.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <HeartHandshake className="w-8 h-8 text-[#0f6cbf] mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Patient Trust</h3>
              <p className="text-sm text-gray-600">
                Transparent communication and compassionate care for anxious patients.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <ShieldCheck className="w-8 h-8 text-[#0f6cbf] mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-sm text-gray-600">
                Strict sterilization protocols and modern technology for consistent outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Founder Gallery</h2>
            <p className="text-gray-600">
              Highlighting leadership, clinical presence, and the SmileCare care environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {founderProfile.gallery.map((item) => {
              const isPortraitStyle =
                item.src === founderProfile.photo || item.src.startsWith("/images/");
              return (
                <div
                  key={item.caption}
                  className="rounded-xl overflow-hidden border border-gray-200 bg-white"
                >
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className={`w-full h-72 ${isPortraitStyle ? "object-contain object-top bg-[#f8fbff]" : "object-cover"}`}
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-700">{item.caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-[#0f6cbf] to-[#0b4f8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Meet the Team?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book your consultation and experience SmileCare's patient-first approach.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0f6cbf] hover:bg-[#0f8a8f] hover:text-white transition-colors rounded-full px-8 h-14 text-lg"
            >
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

