"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "../components/AnimateIn";

const formats = [
  {
    id: "compact",
    label: "Compact",
    description: "Perfect for quick emails and DMs. One line, all the info.",
    output: `Mon 3/18  9–11am, 2–4pm | Tue 3/19  10am–1pm | Wed 3/20  9–12pm (PST)`,
  },
  {
    id: "list",
    label: "List",
    description: "Clean and scannable. Great for formal scheduling emails.",
    output: `- Monday (3/18): 09:00 - 11:00, 14:00 - 16:00\n- Tuesday (3/19): 10:00 - 13:00\n- Wednesday (3/20): 09:00 - 12:00`,
  },
  {
    id: "sentence",
    label: "Sentence",
    description:
      "Natural and conversational. Ideal for LinkedIn messages and chat.",
    output: `I'm free on Monday (3/18) between 9am and 11am or 2pm and 4pm, and on Tuesday (3/19) from 10am to 1pm. I also have Wednesday (3/20) open from 9am to 12pm. All times are in PST.`,
  },
];

export default function FormatShowcase() {
  const [active, setActive] = useState("compact");
  const current = formats.find((f) => f.id === active);

  return (
    <section className="bg-gray-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Three formats, one click
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Pick the format that fits the conversation.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mx-auto mt-12 max-w-2xl">
            {/* Tab buttons */}
            <div className="flex gap-1 rounded-xl bg-white p-1 shadow-sm ring-1 ring-border">
              {formats.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`relative flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active === f.id
                      ? "text-primary"
                      : "text-muted hover:text-gray-700"
                  }`}
                >
                  {active === f.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-primary-light"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              ))}
            </div>

            {/* Output card */}
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-6"
                >
                  <p className="mb-4 text-sm text-muted">
                    {current.description}
                  </p>
                  <div className="rounded-lg bg-gray-50 px-5 py-4">
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-800">
                      {current.output}
                    </pre>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
