import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { serviceDetails } from "../data/services";

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

const CLINIC_MAP_URL =
  "https://www.google.com/maps/place/Smile+Speciality+Dental+Center/@8.991587,38.7765053,17z/data=!3m1!4b1!4m6!3m5!1s0x164b85fbef16a0a9:0xdcd8e8302a116850!8m2!3d8.9915817!4d38.7790802!16s%2Fg%2F11szf0w9_s?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D";

const quickQuestions = [
  "What are your clinic hours?",
  "How do I book an appointment?",
  "Do you offer teeth whitening?",
  "Where is the clinic located?",
];

const initialBotMessage =
  "Hi, I am SmileCare Assistant. Ask me about services, FAQs, booking, clinic hours, emergency contacts, or location.";

function getFaqReply(userInput: string) {
  const q = userInput.toLowerCase().trim();

  if (!q) return "Please type your question so I can help.";

  if (/(hello|hi|hey|selam|good morning|good afternoon)/.test(q)) {
    return "Hello. How can I help you today? You can ask about services, booking, clinic hours, or location.";
  }

  if (/(book|appointment|reserve|schedule)/.test(q)) {
    return "You can book an appointment from the Contact page. Share your name, phone, preferred service, and date, and our team will confirm your slot.";
  }

  if (/(hour|open|close|time|working)/.test(q)) {
    return "Clinic hours: Monday-Friday 8:00 AM-6:00 PM, Saturday 9:00 AM-3:00 PM, Sunday Closed.";
  }

  if (/(emergency|urgent|pain now|severe pain)/.test(q)) {
    return "For dental emergencies, call +251 96 570 1208 immediately. If symptoms are severe, visit the nearest emergency center.";
  }

  if (/(phone|call|contact number|number)/.test(q)) {
    return "You can call us at +251 96 570 1208.";
  }

  if (/(email|mail)/.test(q)) {
    return "Our email is info@smilecare.com.";
  }

  if (/(where|location|address|map|addis|rwanda street)/.test(q)) {
    return "We are located at Smile Speciality Dental Center, XQRH+CPF, Rwanda Street, Addis Ababa. Use the map link below in this chat window.";
  }

  if (/(price|cost|fee|how much)/.test(q)) {
    return "Treatment cost depends on your diagnosis and chosen service. Book a consultation for a clear treatment plan and price estimate.";
  }

  for (const service of serviceDetails) {
    const title = service.title.toLowerCase();
    const slugWords = service.slug.split("-").join(" ");
    if (q.includes(title) || q.includes(slugWords)) {
      const firstFaq = service.faqs[0];
      return `${service.title}: ${service.summary} FAQ: ${firstFaq.question} ${firstFaq.answer}`;
    }
  }

  if (q.includes("whitening")) {
    const whitening = serviceDetails.find((s) => s.slug === "teeth-whitening");
    if (whitening) {
      return `${whitening.title}: ${whitening.summary} Most patients notice visible improvement quickly after treatment.`;
    }
  }

  if (q.includes("root canal")) {
    return "Root canal treatment is performed with local anesthesia and modern methods. Most patients report relief from pain after treatment.";
  }

  if (q.includes("implant")) {
    return "Dental implants are long-term, natural-looking tooth replacements. Eligibility is confirmed after exam and imaging.";
  }

  if (q.includes("child") || q.includes("kids") || q.includes("pediatric")) {
    return "Yes, we provide pediatric dentistry with gentle, child-friendly care and preventive guidance for parents.";
  }

  return "I can help with clinic FAQs, services, booking, and contact details. Try asking: 'Do you offer teeth whitening?' or 'What are your clinic hours?'";
}

export function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: "bot", text: initialBotMessage },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: nextId, sender: "user", text: trimmed },
      { id: nextId + 1, sender: "bot", text: getFaqReply(trimmed) },
    ]);
    setInput("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-50">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="h-14 px-5 rounded-full bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white shadow-lg inline-flex items-center gap-2 transition-colors"
          aria-label="Open FAQ chatbot"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">FAQ Chat</span>
        </button>
      ) : (
        <div className="w-[calc(100vw-2rem)] max-w-sm h-[530px] max-h-[75vh] rounded-2xl border border-gray-200 bg-white shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-[#0f6cbf] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <div>
                <p className="text-sm font-semibold">SmileCare FAQ Assistant</p>
                <p className="text-[11px] text-white/90">Quick answers to common questions</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-white/15 transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8fbff]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  msg.sender === "bot"
                    ? "bg-white border border-gray-200 text-gray-700"
                    : "ml-auto bg-[#0f6cbf] text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div className="pt-1">
              <p className="text-[11px] text-gray-500 mb-2">Quick questions</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-1 text-xs text-[#0f6cbf]">
              <a href={CLINIC_MAP_URL} target="_blank" rel="noopener noreferrer">
                Open clinic map
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <Link to="/contact">Book appointment</Link>
            </div>

            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 h-10 rounded-full border border-gray-300 px-4 text-sm outline-none focus:ring-2 focus:ring-[#0f6cbf] focus:border-[#0f6cbf]"
              />
              <button
                type="submit"
                className="h-10 w-10 rounded-full bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white inline-flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

