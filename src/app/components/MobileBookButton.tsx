import { Link } from "react-router";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

export function MobileBookButton() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-gray-200 shadow-lg">
      <Link to="/contact" className="block">
        <Button className="w-full bg-[#0f6cbf] hover:bg-[#0b4f8a] text-white rounded-full h-14 text-lg gap-2">
          <Calendar className="w-5 h-5" />
          Book Now
        </Button>
      </Link>
    </div>
  );
}

