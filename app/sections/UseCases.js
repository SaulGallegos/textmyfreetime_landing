"use client";

import { Mail, MessageSquare, Linkedin, Send } from "lucide-react";
import AnimateIn from "../components/AnimateIn";

const cases = [
  {
    icon: Mail,
    title: "Sales Reps & SDRs",
    description:
      "Drop your availability right into cold emails. Plain text converts better than a Calendly link that kills reply rates.",
  },
  {
    icon: MessageSquare,
    title: "Customer Success",
    description:
      "Share open slots in Slack threads or support tickets in seconds. No context switching, no extra tabs.",
  },
  {
    icon: Linkedin,
    title: "Recruiters",
    description:
      "Propose interview times in LinkedIn DMs without the endless back-and-forth. Candidates just pick a time.",
  },
  {
    icon: Send,
    title: "Founders & Execs",
    description:
      "Copy your free time into any channel — email, Teams, WhatsApp, anything. No link, no friction for recipients.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for people who book meetings all day
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              If you send your availability more than once a week, this is for
              you.
            </p>
          </div>
        </AnimateIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
          {cases.map((c, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-white p-7 transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {c.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
