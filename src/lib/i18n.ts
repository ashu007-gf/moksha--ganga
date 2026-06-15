import en from "@/translations/en.json";
import hi from "@/translations/hi.json";
import { defaultLanguage, languages, type Language } from "./constants";

const dictionaries = { en, hi };

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function getDictionary(lang: string) {
  return dictionaries[isLanguage(lang) ? lang : defaultLanguage];
}

export function alternateLang(lang: Language) {
  return lang === "en" ? "hi" : "en";
}
