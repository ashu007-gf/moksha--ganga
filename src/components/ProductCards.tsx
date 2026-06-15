import { Heart, Leaf, Sparkles, Waves } from "lucide-react";
import Image from "next/image";
import { upcomingProducts } from "@/lib/products";
import { type Language } from "@/lib/constants";
import { FadeUp } from "./Motion";

const icons = {
  waves: Waves,
  sparkles: Sparkles,
  heart: Heart,
  leaf: Leaf
};

export function UpcomingProducts({ dict, lang }: { dict: any; lang: Language }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {upcomingProducts.map((product, index) => {
        const Icon = icons[product.icon as keyof typeof icons];
        return (
          <FadeUp key={product.key} delay={index * 0.06}>
            <article className="h-full rounded-lg border border-saffron-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
              {"image" in product && product.image ? (
                <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-lg bg-cream">
                  <Image
                    src={product.image}
                    alt={lang === "hi" ? product.hindi : product.english}
                    fill
                    sizes="(max-width: 768px) 92vw, 280px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-river-50 text-river-700">
                  <Icon className="h-6 w-6" />
                </div>
              )}
              <span className="mt-5 inline-flex rounded-full bg-saffron-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-saffron-700">
                {dict.common.launchingSoon}
              </span>
              <h3 className="mt-4 text-xl font-black text-river-900">
                {lang === "hi" ? product.hindi : product.english}
              </h3>
              <p className="mt-2 text-sm font-semibold text-gray-600">{product.subtitle}</p>
            </article>
          </FadeUp>
        );
      })}
    </div>
  );
}

export function AaharDaanRangeBanner({ dict }: { dict: any }) {
  return (
    <FadeUp>
      <div className="relative overflow-hidden rounded-lg border border-saffron-100 bg-white shadow-glow">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src="/images/aahar-daan-range.jpeg"
            alt="Launching soon Aahar Daan range"
            fill
            sizes="(max-width: 768px) 92vw, 1180px"
            className="object-cover"
          />
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-saffron-600 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg">
          {dict.common.launchingSoon}
        </div>
      </div>
    </FadeUp>
  );
}
