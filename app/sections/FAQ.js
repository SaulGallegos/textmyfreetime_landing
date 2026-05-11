"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "../components/AnimateIn";

const faqs = [
  {
    question: "Does this work with Google Calendar?",
    answer:
      "Yes! TextMyFreeTime supports both Google Calendar and Outlook / Microsoft 365. Sign in with your Google account to connect Google Calendar, or your Microsoft account for Outlook.",
  },
  {
    question: "Does this work with Outlook and Microsoft 365?",
    answer:
      "Yes. TextMyFreeTime works with Outlook, Exchange, and Microsoft 365. Sign in with your Microsoft account once to connect.",
  },
  {
    question: "Is my calendar data stored anywhere?",
    answer:
      "No. Calendar data is fetched in your browser and never sent to our servers. We only store your email and subscription status.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel anytime from your account, no questions asked.",
  },
  {
    question: "What happens if I downgrade to Free?",
    answer:
      "You keep all features but are limited to 2 copies per day.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No separate account needed. You sign in with your existing Google or Microsoft account.",
  },
];

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-gray-900 transition-colors hover:text-primary"
      >
        {faq.question}
        <ChevronDown
          className={`ml-4 h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-6 text-muted">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
