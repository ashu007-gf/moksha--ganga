import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contact, type Language } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer({ lang, dict }: { lang: Language; dict: any }) {
  const links = [
    ["", dict.nav.home],
    ["about", dict.nav.about],
    ["products", dict.nav.products],
    ["daan-kit", dict.nav.daanKit],
    ["contact", dict.nav.contact]
  ];

  return (
    <footer className="bg-river-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-md text-sm leading-7 text-river-100">{dict.footer.mission}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gold">{dict.footer.quickLinks}</h3>
          <div className="mt-4 grid gap-3">
            {links.map(([href, label]) => (
              <Link key={href} href={`/${lang}${href ? `/${href}` : ""}`} className="text-sm text-river-100 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gold">{dict.footer.contact}</h3>
          <div className="mt-4 grid gap-3 text-sm text-river-100">
            <Link className="flex items-center gap-2 hover:text-white" href={contact.phoneHref}>
              <Phone className="h-4 w-4" /> {contact.phone}
            </Link>
            <Link className="flex items-center gap-2 hover:text-white" href={`mailto:${contact.email}`}>
              <Mail className="h-4 w-4" /> {contact.email}
            </Link>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {contact.address}
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href={contact.instagram}
                target="_blank"
                aria-label="Instagram moksh_ganga"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-river-100">
        © {new Date().getFullYear()} Moksh Ganga. From Karma to Dharma.
      </div>
    </footer>
  );
}
