"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { alternateLang, isLanguage } from "@/lib/i18n";
import { contact, defaultLanguage, type Language } from "@/lib/constants";
import { Logo } from "./Logo";

type NavbarProps = {
  lang: Language;
  dict: any;
};

const pages = [
  { href: "", key: "home" },
  { href: "about", key: "about" },
  { href: "products", key: "products" },
  { href: "daan-kit", key: "daanKit" },
  { href: "contact", key: "contact" }
];

function langPath(pathname: string, nextLang: Language) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLanguage(parts[0])) {
    parts[0] = nextLang;
  } else {
    parts.unshift(nextLang);
  }
  return `/${parts.join("/")}`;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nextLang = alternateLang(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-saffron-100/80 bg-cream/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} aria-label="Moksh Ganga Home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {pages.map((page) => (
            <Link
              key={page.key}
              href={`/${lang}${page.href ? `/${page.href}` : ""}`}
              className="text-sm font-semibold text-gray-700 transition hover:text-saffron-700"
            >
              {dict.nav[page.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={langPath(pathname, nextLang)}
            aria-label={dict.common.languageLabel}
            className="rounded-full border border-river-700/20 bg-white px-4 py-2 text-sm font-bold text-river-900"
          >
            {dict.common.language}
          </Link>
          <Link
            href={contact.whatsapp}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-river-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-river-700"
          >
            <MessageCircle className="h-4 w-4" />
            {dict.nav.whatsapp}
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-saffron-200 bg-white text-river-900 lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-saffron-100 bg-cream px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {pages.map((page) => (
              <Link
                key={page.key}
                href={`/${lang}${page.href ? `/${page.href}` : ""}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-river-900 hover:bg-white"
              >
                {dict.nav[page.key]}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                href={langPath(pathname, nextLang || defaultLanguage)}
                className="rounded-full border border-river-700/20 bg-white px-4 py-3 text-center text-sm font-bold text-river-900"
              >
                {dict.common.language}
              </Link>
              <Link
                href={contact.whatsapp}
                target="_blank"
                className="rounded-full bg-river-900 px-4 py-3 text-center text-sm font-bold text-white"
              >
                {dict.nav.whatsapp}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
