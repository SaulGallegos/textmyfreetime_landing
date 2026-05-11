"use client";

import { ShieldCheck, Zap, Globe } from "lucide-react";
import AnimateIn from "../components/AnimateIn";

const items = [
  {
    icon: Globe,
    text: "Works with Google Calendar, Outlook & Microsoft 365",
  },
  {
    icon: ShieldCheck,
    text: "Calendar data never leaves your browser",
  },
  {
    icon: Zap,
    text: "5-second setup — no onboarding, no config",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-gray-50/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <AnimateIn>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted">
            Works with Google Calendar &amp; Microsoft 365
          </p>
        </AnimateIn>

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
          {items.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                {item.text}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
