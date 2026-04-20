import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "TextMyFreeTime — Outlook Calendar Chrome Extension",
  description:
    "Download the free TextMyFreeTime Chrome Extension. Instantly copy your live Outlook calendar availability as clean plain text and share your free time anywhere.",
  keywords: [
    "Outlook calendar Chrome extension",
    "Share Outlook availability",
    "Copy Outlook schedule as text",
    "Outlook free time text format",
    "Outlook calendar formatter",
    "TextMyFreeTime"
  ],
  authors: [{ name: "TextMyFreeTime" }],
  creator: "TextMyFreeTime",
  publisher: "TextMyFreeTime",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "TextMyFreeTime — Outlook Calendar Chrome Extension",
    description:
      "Chrome extension to instantly copy your live Outlook calendar availability as plain text. Under 5 seconds.",
    type: "website",
    url: "https://textmyfreetime.com",
    siteName: "TextMyFreeTime",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextMyFreeTime — Outlook Calendar Chrome Extension",
    description:
      "Chrome extension to instantly copy your live Outlook calendar availability as plain text. Under 5 seconds.",
  },
  metadataBase: new URL("https://textmyfreetime.com"),
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TextMyFreeTime",
    "operatingSystem": "Chrome, Microsoft Edge",
    "applicationCategory": "ProductivityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Chrome extension to read live Outlook calendar and copy availability as clean plain text.",
    "url": "https://chromewebstore.google.com/detail/textmyfreetime/hfjmmppllaflpmmecendobnlipgbiggk"
  };

  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/hfjmmppllaflpmmecendobnlipgbiggk" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
