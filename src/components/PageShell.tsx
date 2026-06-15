import { type Language } from "@/lib/constants";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { Navbar } from "./Navbar";

export function PageShell({
  lang,
  dict,
  children
}: {
  lang: Language;
  dict: any;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar lang={lang} dict={dict} />
      {children}
      <Footer lang={lang} dict={dict} />
      <FloatingWhatsApp />
    </>
  );
}
