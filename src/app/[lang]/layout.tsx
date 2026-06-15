import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/i18n";
import { languages } from "@/lib/constants";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LanguageLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  return children;
}
