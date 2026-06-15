import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <Link
      href={contact.whatsapp}
      target="_blank"
      aria-label="Contact Moksh Ganga on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition hover:scale-105 hover:bg-green-700"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
