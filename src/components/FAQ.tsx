import { HelpCircle } from "lucide-react";
import { FadeUp } from "./Motion";

export function FAQ({ dict, title }: { dict: any; title?: string }) {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-center text-3xl font-black text-river-900 sm:text-4xl">
            {title || "FAQ"}
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-4">
          {dict.faq.map((item: { question: string; answer: string }, index: number) => (
            <FadeUp key={item.question} delay={index * 0.05}>
              <article className="rounded-lg border border-saffron-100 bg-white p-5 shadow-sm">
                <h3 className="flex items-start gap-3 text-lg font-black text-river-900">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-saffron-600" />
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-gray-700">{item.answer}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
