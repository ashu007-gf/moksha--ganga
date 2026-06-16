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
          <div className="mt-8 overflow-hidden rounded-3xl border border-river-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110621.83545272236!2d78.03352418113771!3d29.95262421674352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee57c9%3A0x4e449176a640f5f3!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1781635621833!5m2!1sen!2sin"
              className="h-80 w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Haridwar location"
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ContactForm dict={dict} />
        </FadeUp>
      </div>
    </section>
  );
}
