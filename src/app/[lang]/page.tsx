import Image from "next/image";
import { ArrowRight, CheckCircle2, HeartHandshake, Instagram, MessageCircle, Phone, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock";
import { DaanKitImage } from "@/components/DaanKitImage";
import { FAQ } from "@/components/FAQ";
import { FadeUp, SoftPulse } from "@/components/Motion";
import { PageShell } from "@/components/PageShell";
import { ProductPlaceholder } from "@/components/ProductPlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { AaharDaanRangeBanner, UpcomingProducts } from "@/components/ProductCards";
import { ButtonLink } from "@/components/ButtonLink";
import { contact, seoKeywords, type Language } from "@/lib/constants";
import { daanBenefits } from "@/lib/products";
import { getDictionary, isLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Moksh Ganga | From Karma to Dharma",
  description:
    "Moksh Ganga is a Haridwar based social enterprise for Daan Kit, Jeev Seva, Sanatan values and spiritual products.",
  keywords: seoKeywords
};

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: routeLang } = await params;
  const lang = (isLanguage(routeLang) ? routeLang : "en") as Language;
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict}>
      <main>
        <section className="ganga-gradient relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
          <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-white/80 px-4 py-2 text-sm font-bold text-saffron-700">
                <Sparkles className="h-4 w-4" />
                {dict.common.tagline}
              </div>
              <h1 className="mt-6 text-5xl font-black tracking-normal text-river-900 sm:text-6xl lg:text-7xl">
                {dict.common.brand}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold text-saffron-700">
                {dict.common.tagline}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700">
                {dict.home.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={contact.whatsapp} target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> {dict.common.contactWhatsapp}
                </ButtonLink>
                <ButtonLink href={`/${lang}/products`} variant="secondary">
                  {dict.common.exploreProducts} <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </FadeUp>
            <SoftPulse>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-saffron-200 via-gold/30 to-river-100 blur-2xl" />
                <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white/80 p-6 shadow-glow backdrop-blur">
                  <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-full border-4 border-gold/70 bg-river-900 shadow-2xl">
                    <Image
                      src="/images/moksh-ganga-logo.jpeg"
                      alt="Moksh Ganga brand logo"
                      fill
                      sizes="(max-width: 768px) 80vw, 360px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="mt-6 text-center text-sm font-black uppercase tracking-[0.18em] text-river-900">
                    {dict.common.tagline}
                  </p>
                </div>
              </div>
            </SoftPulse>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.home.missionTitle} text={dict.home.mission} center />
            </FadeUp>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <FadeUp>
              <DaanKitImage label="Moksh Ganga Daan Kit product image" />
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-saffron-700">
                {dict.home.featuredTitle}
              </p>
              <h2 className="mt-3 text-4xl font-black text-river-900">{dict.home.featuredHeading}</h2>
              <p className="mt-5 leading-8 text-gray-700">{dict.home.featuredDescription}</p>
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
                  {dict.common.contactWhatsapp}
                </ButtonLink>
                <ButtonLink href={contact.daanKitInstagram} target="_blank" variant="secondary">
                  <Instagram className="mr-2 h-4 w-4" /> @daankit_mokshganga
                </ButtonLink>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.home.whyTitle} center />
            </FadeUp>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {dict.why.map((item: { title: string; text: string }, index: number) => (
                <FadeUp key={item.title} delay={index * 0.06}>
                  <article className="h-full rounded-lg border border-saffron-100 bg-cream p-6">
                    <HeartHandshake className="h-8 w-8 text-saffron-600" />
                    <h3 className="mt-5 text-xl font-black text-river-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-700">{item.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.home.launchingTitle} center />
            </FadeUp>
            <div className="mt-10">
              <AaharDaanRangeBanner dict={dict} />
            </div>
            <div className="mt-6">
              <UpcomingProducts dict={dict} lang={lang} />
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.home.galleryTitle} center />
            </FadeUp>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-river-200 bg-river-50 text-sm font-bold text-river-800">
                  {dict.common.gallery}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials dict={dict} />
        <FAQ dict={dict} title="FAQ" />
        <ContactBlock dict={dict} title={dict.home.contactTitle} />
      </main>
    </PageShell>
  );
}
