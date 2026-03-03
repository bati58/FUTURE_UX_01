export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetailContent = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string[];
  benefits: string[];
  heroImage: string;
  heroImageAlt: string;
  imageCaption: string;
  faqs: ServiceFaq[];
};

export const serviceDetails: ServiceDetailContent[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    category: "Preventive Care",
    summary:
      "Routine checkups, professional cleanings, and early treatment to keep your teeth and gums healthy year-round.",
    overview: [
      "General dentistry focuses on prevention, early diagnosis, and treatment of common oral health issues before they become serious. During your visit, we examine your teeth, gums, bite, and oral tissues to catch concerns early.",
      "Appointments usually include scaling and polishing to remove plaque and tartar, cavity checks, gum health assessment, and personalized oral hygiene guidance. If needed, we also provide fillings and minor restorative care.",
      "By scheduling regular checkups every six months, most patients avoid painful emergencies and reduce long-term treatment costs while maintaining a confident smile.",
    ],
    benefits: [
      "Detects cavities and gum issues early",
      "Reduces risk of painful dental emergencies",
      "Supports fresher breath and cleaner teeth",
      "Protects long-term oral and overall health",
      "Custom preventive advice for your lifestyle",
      "Affordable care through routine maintenance",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt:
      "General dentistry checkup with dental instruments and mirror",
    imageCaption:
      "Comprehensive examination and cleaning for complete oral wellness.",
    faqs: [
      {
        question: "How often should I book a general dental checkup?",
        answer:
          "Most adults and children should visit every 6 months. Patients with gum disease, frequent cavities, or ongoing treatments may need more frequent visits.",
      },
      {
        question: "Does a routine cleaning hurt?",
        answer:
          "Routine cleanings are usually comfortable. If you have sensitivity or gum inflammation, we use gentle techniques to keep you at ease.",
      },
      {
        question: "What happens if you find a cavity?",
        answer:
          "We explain the size and location, then recommend the least invasive treatment, often a tooth-colored filling done in a short appointment.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    category: "Smile Enhancement",
    summary:
      "Aesthetic treatments like veneers, bonding, and smile design to improve shape, shade, and confidence.",
    overview: [
      "Cosmetic dentistry improves the appearance of your smile while preserving natural tooth structure whenever possible. We assess facial harmony, tooth shape, color, and alignment to recommend the right treatment plan.",
      "Common options include veneers, composite bonding, enamel contouring, and smile makeovers combining multiple procedures. Every plan is customized to your goals and budget.",
      "Our digital planning process helps you visualize expected outcomes before treatment begins, so you can make confident decisions.",
    ],
    benefits: [
      "Improves smile symmetry and appearance",
      "Corrects chips, gaps, and minor unevenness",
      "Boosts confidence in social and work settings",
      "Natural-looking, personalized treatment outcomes",
      "Can combine with whitening for faster transformation",
      "Minimally invasive options available",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt:
      "Cosmetic dentistry consultation focused on smile enhancement",
    imageCaption:
      "Personalized cosmetic planning for a brighter, balanced smile.",
    faqs: [
      {
        question: "How do I know which cosmetic treatment I need?",
        answer:
          "We evaluate your smile goals, tooth condition, and bite, then recommend options with expected results, duration, and cost.",
      },
      {
        question: "Are cosmetic procedures permanent?",
        answer:
          "Many treatments are long-lasting but not permanent. Longevity depends on the procedure, oral hygiene, and habits like grinding or smoking.",
      },
      {
        question: "Will my smile look natural after treatment?",
        answer:
          "Yes. We match tooth shade, contour, and proportion to your facial features so your results look balanced and natural.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    summary:
      "Professional whitening treatment that safely removes stains and brightens your smile in fewer sessions.",
    overview: [
      "Professional teeth whitening is a safe cosmetic treatment designed to remove deep stains and discoloration that over-the-counter products often cannot fully address.",
      "We apply professional-grade whitening gel in a controlled clinical setting to protect your gums and reduce sensitivity while maximizing shade improvement.",
      "Many patients see noticeable brightness after a single session, with final results depending on stain type, tooth condition, and lifestyle habits.",
    ],
    benefits: [
      "Faster and stronger results than home kits",
      "Clinically supervised and gum-safe process",
      "Removes tea, coffee, and lifestyle stains",
      "Immediate confidence boost",
      "Custom treatment for sensitivity levels",
      "Long-lasting results with proper maintenance",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Professional teeth whitening treatment in a modern clinic",
    imageCaption:
      "Safe, in-clinic whitening for noticeably brighter teeth.",
    faqs: [
      {
        question: "How long does whitening last?",
        answer:
          "Results commonly last 6 to 24 months depending on diet, oral hygiene, and tobacco use. We provide aftercare guidance to extend results.",
      },
      {
        question: "Is teeth whitening safe for sensitive teeth?",
        answer:
          "Yes. We tailor gel concentration and treatment time to your sensitivity profile and use protective measures during the procedure.",
      },
      {
        question: "Will whitening work on crowns or fillings?",
        answer:
          "Whitening affects natural teeth only. Existing crowns, veneers, and fillings do not change color and may need shade matching afterward.",
      },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "Child Dental Care",
    summary:
      "Friendly, age-appropriate dental care that helps children build healthy habits and positive clinic experiences.",
    overview: [
      "Pediatric dentistry is focused on infants, children, and teens, with special attention to growth, tooth development, and preventive care.",
      "Our child-friendly visits include gentle cleanings, cavity prevention, fluoride guidance, and parent education on brushing, diet, and habits.",
      "We use a calm communication approach to reduce fear and create positive dental experiences from an early age.",
    ],
    benefits: [
      "Early prevention of cavities and gum issues",
      "Monitoring of jaw and tooth development",
      "Positive, anxiety-free dental experiences",
      "Parent guidance on daily oral care",
      "Protective treatments such as sealants",
      "Supports lifelong healthy smile habits",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Child receiving gentle pediatric dental care",
    imageCaption:
      "Comfort-focused treatment designed to keep young patients relaxed.",
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer:
          "We recommend the first visit by age one or within six months after the first tooth erupts.",
      },
      {
        question: "How can I prepare my child for the appointment?",
        answer:
          "Use positive language, keep explanations simple, and avoid words associated with pain. We handle the rest with child-friendly guidance.",
      },
      {
        question: "Are baby teeth really that important?",
        answer:
          "Yes. Baby teeth support speech, nutrition, and proper spacing for permanent teeth, so keeping them healthy is very important.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Endodontic Care",
    summary:
      "Modern, pain-managed root canal therapy to remove infection and save your natural tooth.",
    overview: [
      "Root canal treatment removes infected or inflamed pulp inside the tooth, disinfects the canal system, and seals the tooth to prevent reinfection.",
      "With modern anesthesia and precision tools, the procedure is typically no more uncomfortable than a standard filling for most patients.",
      "Saving your natural tooth helps maintain normal chewing function, jaw alignment, and long-term oral stability.",
    ],
    benefits: [
      "Relieves severe tooth pain and pressure",
      "Stops spreading infection",
      "Preserves your natural tooth structure",
      "Restores normal bite and chewing comfort",
      "Prevents extraction in many cases",
      "Long-term protection with crown restoration",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Dental root canal procedure with microscope and instruments",
    imageCaption:
      "Precision endodontic care to treat infection and protect your tooth.",
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "Most patients report relief from pain after treatment. We use local anesthesia and gentle techniques to keep the appointment comfortable.",
      },
      {
        question: "How long does a root canal take?",
        answer:
          "Many cases are completed in one visit, while complex infections may require two appointments.",
      },
      {
        question: "Do I need a crown after root canal therapy?",
        answer:
          "Often yes, especially for back teeth. A crown protects the treated tooth and improves long-term durability.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Restorative Dentistry",
    summary:
      "Durable, natural-looking tooth replacement using implant posts and custom crowns.",
    overview: [
      "Dental implants replace missing teeth by placing a titanium post in the jawbone, then restoring it with a custom crown, bridge, or denture.",
      "Implants are designed to look, feel, and function like natural teeth while helping maintain bone volume and facial structure.",
      "Treatment is planned in phases, including consultation, placement, healing, and final restoration for a secure long-term result.",
    ],
    benefits: [
      "Natural look and stable bite function",
      "Helps preserve jawbone density",
      "No slipping like removable dentures",
      "Protects neighboring healthy teeth",
      "Long-term solution with proper care",
      "Improves speech and chewing confidence",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Dental implant planning and prosthetic tooth model",
    imageCaption:
      "Implant-based restoration for reliable function and a natural smile.",
    faqs: [
      {
        question: "Who is a good candidate for dental implants?",
        answer:
          "Most healthy adults with adequate jawbone are candidates. We confirm eligibility through examination and imaging.",
      },
      {
        question: "How long do implants last?",
        answer:
          "Implant posts can last many years, often decades, with good oral hygiene and regular dental follow-up.",
      },
      {
        question: "How long is the full implant process?",
        answer:
          "The timeline varies by case, but most treatments take a few months including healing before final crown placement.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}

