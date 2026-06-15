import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokshganga.com"),
  title: {
    default: "Moksh Ganga | From Karma to Dharma",
    template: "%s | Moksh Ganga"
  },
  description:
    "Moksh Ganga revives Daan, Jeev Seva and Sanatan values through meaningful spiritual products in Haridwar and across India.",
  keywords: [
    "Moksh Ganga",
    "Daan Kit",
    "Jeev Seva",
    "Sanatan Dharma",
    "Haridwar",
    "Spiritual Products",
    "Animal Feeding Daan",
    "Ganga Seva",
    "Social Welfare"
  ],
  openGraph: {
    title: "Moksh Ganga | From Karma to Dharma",
    description:
      "A spiritually rooted Indian social enterprise for Daan, Jeev Seva and inspired living.",
    url: "https://mokshganga.com",
    siteName: "Moksh Ganga",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Moksh Ganga | From Karma to Dharma",
    description:
      "Meaningful spiritual products for Jeev Seva, Daan and Sanatan values."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
