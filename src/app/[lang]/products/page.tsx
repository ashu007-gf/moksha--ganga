import type { Metadata } from "next";
import { CheckCircle2, Instagram, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactBlock } from "@/components/ContactBlock";
import { DaanKitImage } from "@/components/DaanKitImage";
import { FadeUp } from "@/components/Motion";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { AaharDaanRangeBanner, UpcomingProducts } from "@/components/ProductCards";
import { contact, seoKeywords, type Language } from "@/lib/constants";
import { daanBenefits } from "@/lib/products";
import { getDictionary, isLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Moksh Ganga products including the available Daan Kit and upcoming Aahar Daan products for Jeev Seva.",
  keywords: seoKeywords
};

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: routeLang } = await params;
  const lang = (isLanguage(routeLang) ? routeLang : "en") as Language;
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict}>
      <main>
        <section className="ganga-gradient section-pad">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.products.title} text={dict.products.intro} center />
            </FadeUp>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading eyebrow={dict.common.availableNow} title="Daan Kit" />
            </FadeUp>
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
              <FadeUp>
                <DaanKitImage label="Moksh Ganga Daan Kit product image" />
              </FadeUp>
              <FadeUp delay={0.08}>
                <p className="leading-8 text-gray-700">{dict.daanKit.intro}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {daanBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm font-bold text-river-900">
                      <CheckCircle2 className="h-5 w-5 text-saffron-600" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={`/${lang}/daan-kit`}>{dict.common.learnMore}</ButtonLink>
                  <ButtonLink href={contact.whatsapp} target="_blank" variant="secondary">
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
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.products.upcomingTitle} center />
            </FadeUp>
            <div className="mt-10">
              <AaharDaanRangeBanner dict={dict} />
            </div>
            <div className="mt-6">
              <UpcomingProducts dict={dict} lang={lang} />
            </div>
          </div>
        </section>

        <ContactBlock dict={dict} title={dict.home.contactTitle} />
      </main>
    </PageShell>
  );
}
