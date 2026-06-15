import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ContactBlock } from "@/components/ContactBlock";
import { FadeUp } from "@/components/Motion";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { seoKeywords, type Language } from "@/lib/constants";
import { getDictionary, isLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Moksh Ganga, a Haridwar based spiritual social enterprise inspired by Daan, Jeev Seva and Sanatan Dharma.",
  keywords: seoKeywords
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: routeLang } = await params;
  const lang = (isLanguage(routeLang) ? routeLang : "en") as Language;
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict}>
      <main>
        <section className="ganga-gradient section-pad">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.about.title} text={dict.about.intro} center />
              <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-9 text-gray-700">
                {dict.about.story}
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <FadeUp>
              <article className="h-full rounded-lg border border-saffron-100 bg-cream p-7">
                <h2 className="text-2xl font-black text-river-900">{dict.about.visionTitle}</h2>
                <p className="mt-4 leading-8 text-gray-700">{dict.about.vision}</p>
              </article>
            </FadeUp>
            <FadeUp delay={0.08}>
              <article className="h-full rounded-lg border border-saffron-100 bg-cream p-7">
                <h2 className="text-2xl font-black text-river-900">{dict.about.missionTitle}</h2>
                <p className="mt-4 leading-8 text-gray-700">{dict.about.mission}</p>
              </article>
            </FadeUp>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <SectionHeading title={dict.about.valuesTitle} center />
            </FadeUp>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dict.about.values.map((value: string, index: number) => (
                <FadeUp key={value} delay={index * 0.05}>
                  <div className="flex items-center gap-3 rounded-lg bg-white p-5 font-black text-river-900 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-saffron-600" />
                    {value}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <Testimonials dict={dict} />
        <ContactBlock dict={dict} title={dict.home.contactTitle} />
      </main>
    </PageShell>
  );
}
