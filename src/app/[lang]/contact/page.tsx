import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock";
import { PageShell } from "@/components/PageShell";
import { seoKeywords, type Language } from "@/lib/constants";
import { getDictionary, isLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Moksh Ganga in Haridwar for Daan Kit enquiries through WhatsApp, phone or contact form.",
  keywords: seoKeywords
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: routeLang } = await params;
  const lang = (isLanguage(routeLang) ? routeLang : "en") as Language;
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict}>
      <main>
        <ContactBlock dict={dict} title={dict.home.contactTitle} />
      </main>
    </PageShell>
  );
}
