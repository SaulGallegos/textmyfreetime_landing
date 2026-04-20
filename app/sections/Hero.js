"use client";

import { Chrome, ArrowDown, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const sampleOutput = `Mon 3/18  9–11am, 2–4pm | Tue 3/19  10am–1pm | Wed 3/20  9–12pm (PST)`;

export default function Hero() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(sampleOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-light)_0%,_transparent_60%)] opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-36 lg:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Your calendar, ready to{" "}
            <span className="text-primary">paste anywhere</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
          >
            TextMyFreeTime reads your live Outlook calendar and copies your
            availability as clean plain text — paste it into emails, Slack,
            LinkedIn DMs, or anywhere else in under 5 seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="https://chromewebstore.google.com/detail/textmyfreetime/hfjmmppllaflpmmecendobnlipgbiggk"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover"
            >
              <Chrome className="h-5 w-5" />
              Install Free — Chrome Web Store
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              See how it works
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Demo card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="rounded-2xl border border-border bg-white p-1 shadow-xl shadow-black/5">
            {/* Fake email compose bar */}
            <div className="flex items-center gap-2 rounded-t-xl bg-gray-50 px-4 py-2.5 text-sm text-muted">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 font-medium text-gray-500">
                New Message — Outlook
              </span>
            </div>

            <div className="space-y-3 px-5 py-4">
              <div className="text-sm text-muted">
                <span className="font-medium text-gray-500">To:</span>{" "}
                alex@company.com
              </div>
              <div className="text-sm text-muted">
                <span className="font-medium text-gray-500">Subject:</span>{" "}
                Re: Let&apos;s find a time to connect
              </div>
              <div className="border-t border-border" />
              <div className="text-[15px] leading-relaxed text-gray-800">
                <p>Hey Alex,</p>
                <p className="mt-2">
                  Here&apos;s my availability this week — grab whatever works:
                </p>
                <div className="relative mt-3 rounded-lg bg-primary-light/60 px-4 py-3">
                  <p className="font-mono text-sm leading-relaxed text-gray-800">
                    {sampleOutput}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="absolute right-2 top-2 rounded-md p-1.5 text-primary transition-colors hover:bg-primary/10"
                    aria-label="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="mt-3">Let me know!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
