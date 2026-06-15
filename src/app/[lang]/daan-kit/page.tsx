import type { Metadata } from "next";
import { CheckCircle2, Instagram, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactBlock } from "@/components/ContactBlock";
import { DaanKitImage } from "@/components/DaanKitImage";
import { FAQ } from "@/components/FAQ";
import { FadeUp } from "@/components/Motion";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, seoKeywords, type Language } from "@/lib/constants";
import { daanBenefits } from "@/lib/products";
import { getDictionary, isLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Daan Kit",
  description:
    "Daan Kit by Moksh Ganga is a simple and meaningful way to perform Jeev Seva and Daan through Chinti Aahar Daan.",
  keywords: seoKeywords
};

export default async function DaanKitPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: routeLang } = await params;
  const lang = (isLanguage(routeLang) ? routeLang : "en") as Language;
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict}>
      <main>
        <section className="ganga-gradient section-pad">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <FadeUp>
              <span className="inline-flex rounded-full bg-saffron-100 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-saffron-700">
                {dict.common.availableNow}
              </span>
              <h1 className="mt-5 text-5xl font-black text-river-900">{dict.daanKit.title}</h1>
              <p className="mt-5 text-xl leading-8 text-gray-700">{dict.daanKit.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={contact.whatsapp} target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> {dict.common.contactWhatsapp}
                </ButtonLink>
                <ButtonLink href={contact.phoneHref} variant="secondary">
                  <Phone className="mr-2 h-4 w-4" /> {dict.common.callNow}
                </ButtonLink>
                <ButtonLink href={contact.daanKitInstagram} target="_blank" variant="secondary">
                  <Instagram className="mr-2 h-4 w-4" /> @daankit_mokshganga
                </ButtonLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <DaanKitImage label="Moksh Ganga Daan Kit product image" />
            </FadeUp>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.daanKit.whatTitle} text={dict.daanKit.what} />
            </FadeUp>
            <FadeUp delay={0.08}>
              <SectionHeading title={dict.daanKit.whyTitle} text={dict.daanKit.why} />
            </FadeUp>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title="Benefits" center />
            </FadeUp>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {daanBenefits.map((benefit, index) => (
                <FadeUp key={benefit} delay={index * 0.05}>
                  <div className="flex min-h-20 items-center gap-3 rounded-lg bg-white p-5 font-black text-river-900 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-saffron-600" />
                    {benefit}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.daanKit.useTitle} center />
            </FadeUp>
            <div className="mt-10 grid gap-4">
              {dict.daanKit.steps.map((step: string, index: number) => (
                <FadeUp key={step} delay={index * 0.05}>
                  <div className="flex items-start gap-4 rounded-lg border border-saffron-100 bg-cream p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-saffron-600 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 font-semibold leading-7 text-gray-700">{step}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <FAQ dict={dict} title={dict.daanKit.faqTitle} />
        <ContactBlock dict={dict} title={dict.home.contactTitle} />
      </main>
    </PageShell>
  );
}
