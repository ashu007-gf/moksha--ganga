export const contact = {
  phone: "+91 9654504028",
  phoneHref: "tel:+919654504028",
  whatsapp: "https://wa.me/919654504028",
  email: "mokshganga07@gmail.com",
  address: "Haridwar, Uttarakhand, India",
  instagram: "https://www.instagram.com/moksh_ganga",
  daanKitInstagram: "https://www.instagram.com/daankit_mokshganga"
};

export const languages = ["en", "hi"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

export const seoKeywords = [
  "Moksh Ganga",
  "Daan Kit",
  "Jeev Seva",
  "Sanatan Dharma",
  "Haridwar",
  "Spiritual Products",
  "Animal Feeding Daan",
  "Ganga Seva",
  "Social Welfare"
];
