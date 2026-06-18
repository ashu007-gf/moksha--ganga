import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2115651505966769');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2115651505966769&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
