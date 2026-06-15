import { Quote } from "lucide-react";
import { FadeUp } from "./Motion";

export function Testimonials({ dict }: { dict: any }) {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-center text-3xl font-black text-river-900 sm:text-4xl">
            {dict.testimonials.title}
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {dict.testimonials.items.map((item: { name: string; text: string }, index: number) => (
            <FadeUp key={item.name} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-river-100 bg-cream p-6">
                <Quote className="h-7 w-7 text-saffron-600" />
                <p className="mt-4 leading-7 text-gray-700">{item.text}</p>
                <p className="mt-5 font-black text-river-900">{item.name}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
