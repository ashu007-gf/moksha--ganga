import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/constants";
import { ButtonLink } from "./ButtonLink";
import { ContactForm } from "./ContactForm";
import { FadeUp } from "./Motion";

export function ContactBlock({ dict, title }: { dict: any; title: string }) {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeUp>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-saffron-700">Contact</p>
          <h2 className="mt-3 text-3xl font-black text-river-900 sm:text-4xl">{title}</h2>
          <div className="mt-6 grid gap-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-saffron-600" /> {contact.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-saffron-600" /> {contact.email}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-saffron-600" /> {contact.address}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contact.whatsapp} target="_blank">
              <MessageCircle className="mr-2 h-4 w-4" /> {dict.common.contactWhatsapp}
            </ButtonLink>
            <ButtonLink href={contact.phoneHref} variant="secondary">
              <Phone className="mr-2 h-4 w-4" /> {dict.common.callNow}
            </ButtonLink>
          </div>
          <div className="mt-8 flex min-h-48 items-center justify-center rounded-lg border border-dashed border-river-200 bg-river-50 text-sm font-bold text-river-800">
            {dict.common.map}
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ContactForm dict={dict} />
        </FadeUp>
      </div>
    </section>
  );
}
