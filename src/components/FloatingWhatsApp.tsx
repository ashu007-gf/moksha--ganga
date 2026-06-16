import Link from "next/link";
import { contact } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <Link
      href={contact.whatsapp}
      target="_blank"
      aria-label="Contact Moksh Ganga on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#25d366] text-white shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition duration-300 hover:scale-110 hover:ring-4 hover:ring-emerald-300"
    >
      <span className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
      <span className="absolute inset-0 rounded-full border border-white/20" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WhatsApp"
        role="img"
        viewBox="0 0 512 512"
        className="relative h-10 w-10"
      >
        <rect width="512" height="512" rx="15%" fill="#25d366" />
        <path
          fill="#25d366"
          stroke="#ffffff"
          strokeWidth="26"
          d="M123 393l14-65a138 138 0 1150 47z"
        />
        <path
          fill="#ffffff"
          d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
        />
      </svg>
    </Link>
  );
}
