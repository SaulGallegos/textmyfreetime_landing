import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "TextMyFreeTime — Share Calendar Availability as Plain Text (Outlook & Google Calendar)",
  description:
    "Free Chrome extension that copies your Outlook or Google Calendar availability as clean plain text in one click. No Calendly links. Paste into emails, Slack, LinkedIn DMs, or anywhere in under 5 seconds.",
  keywords: [
    "Google Calendar availability Chrome extension",
    "copy Google Calendar availability as text",
    "share Google Calendar free time",
    "Google Calendar to plain text",
    "Outlook calendar Chrome extension",
    "copy Outlook availability as text",
    "share Outlook free time in email",
    "share calendar availability as plain text",
    "copy calendar availability chrome extension",
    "calendar availability text generator",
    "share meeting availability without Calendly",
    "how to share availability in email",
    "send availability in email without Calendly link",
    "plain text calendar availability for cold email",
    "SDR sales email availability tool",
    "TextMyFreeTime",
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
    title: "TextMyFreeTime — Share Your Calendar Availability as Plain Text",
    description:
      "Chrome extension for Outlook & Google Calendar. Copy your live availability as clean plain text and paste it anywhere — emails, Slack, LinkedIn DMs — in under 5 seconds.",
    type: "website",
    url: "https://textmyfreetime.com",
    siteName: "TextMyFreeTime",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextMyFreeTime — Share Your Calendar Availability as Plain Text",
    description:
      "Chrome extension for Outlook & Google Calendar. Copy your live availability as clean plain text and paste it anywhere in under 5 seconds.",
  },
  metadataBase: new URL("https://textmyfreetime.com"),
  alternates: {
    canonical: "https://textmyfreetime.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
    "description": "Chrome extension to read your live Outlook or Google Calendar and copy availability as clean plain text. Paste into emails, Slack, or LinkedIn DMs in under 5 seconds.",
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
