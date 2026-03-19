"use client";

import { Download, KeyRound, CalendarRange, ClipboardPaste } from "lucide-react";
import AnimateIn from "../components/AnimateIn";

const steps = [
  {
    icon: Download,
    title: "Install the extension",
    description:
      "Add TextMyFreeTime from the Chrome Web Store. One click, no account required.",
  },
  {
    icon: KeyRound,
    title: "Connect your Outlook calendar",
    description:
      "Sign in with your Microsoft account once. We request read-only calendar access — nothing more.",
  },
  {
    icon: CalendarRange,
    title: "Pick your date range & format",
    description:
      "Choose Today, Next 3 Days, or Next 7 Days. Then pick Compact, List, or Sentence format.",
  },
  {
    icon: ClipboardPaste,
    title: "Copy and paste anywhere",
    description:
      "Hit Copy and paste your availability into any email, DM, Slack thread, or text message.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              From install to paste in under a minute.
            </p>
          </div>
        </AnimateIn>

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="relative text-center lg:text-left">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary lg:mx-0">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">
                  Step {i + 1}
                </span>
                <h3 className="text-base font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
