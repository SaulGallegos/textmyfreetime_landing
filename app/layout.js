import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "TextMyFreeTime — Copy Your Outlook Availability as Plain Text",
  description:
    "Chrome extension that reads your live Outlook calendar and copies your free time as clean plain text. Paste into emails, Slack, LinkedIn — anywhere. Under 5 seconds.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "TextMyFreeTime — Copy Your Outlook Availability as Plain Text",
    description:
      "Chrome extension that reads your live Outlook calendar and copies your free time as clean plain text. Under 5 seconds.",
    type: "website",
    url: "https://textmyfreetime.com",
    siteName: "TextMyFreeTime",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextMyFreeTime — Copy Your Outlook Availability as Plain Text",
    description:
      "Chrome extension that reads your live Outlook calendar and copies your free time as clean plain text. Under 5 seconds.",
  },
  metadataBase: new URL("https://textmyfreetime.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <Analytics />
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
