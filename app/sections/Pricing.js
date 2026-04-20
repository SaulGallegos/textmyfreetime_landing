"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Chrome, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "../components/AnimateIn";

const tiers = [
  {
    name: "Free",
    monthly: "$0",
    yearly: "$0",
    period: "forever",
    yearlyNote: null,
    description: "Everything you need to get started.",
    cta: "Install Free",
    ctaHref: "https://chromewebstore.google.com/detail/textmyfreetime/hfjmmppllaflpmmecendobnlipgbiggk",
    highlighted: false,
    features: [
      "2 reads per day",
      "All 3 output formats",
      "All date ranges (Today / 3 / 7 days)",
      "Automatic timezone detection",
      "Skips weekends & past slots",
    ],
  },
  {
    name: "Individual",
    monthly: "$4.90",
    yearly: "$49",
    period: "/month",
    yearlyNote: "per year — save 17%",
    description: "For power users who share availability all day.",
    cta: "Get Individual",
    ctaHref: "https://chromewebstore.google.com/detail/textmyfreetime/hfjmmppllaflpmmecendobnlipgbiggk",
    highlighted: true,
    badge: "Most popular",
    features: [
      "Unlimited reads",
      "All 3 output formats",
      "All date ranges (Today / 3 / 7 days)",
      "Automatic timezone detection",
      "Skips weekends & past slots",
      "Priority support",
      "All future features included",
    ],
  },
  {
    name: "Company",
    monthly: "$49",
    yearly: "$490",
    period: "/month",
    yearlyNote: "per year — save 17%",
    description: "For teams that live in meetings. Up to 100 seats.",
    cta: "Get Company",
    ctaHref: "https://chromewebstore.google.com/detail/textmyfreetime/hfjmmppllaflpmmecendobnlipgbiggk",
    highlighted: false,
    icon: Building2,
    features: [
      "Up to 100 seats",
      "Unlimited reads per seat",
      "All 3 output formats",
      "All date ranges (Today / 3 / 7 days)",
      "Automatic timezone detection",
      "Priority support",
      "All future features included",
      "Centralized billing",
    ],
  },
];

export default function Pricing() {
  return (
    <Suspense>
      <PricingInner />
    </Suspense>
  );
}

function PricingInner() {
  const [annual, setAnnual] = useState(false);
  const [loadingTier, setLoadingTier] = useState(null);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  async function handleCheckout(tierName) {
    if (tierName === "Free") return;

    const billingCycle = annual ? "yearly" : "monthly";
    const plan = tierName === "Company" ? "company" : "individual";

    try {
      setLoadingTier(tierName);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billingCycle, ...(email ? { email } : {}) }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Checkout failed");
      }

      if (!data?.url) {
        throw new Error("Missing checkout session URL");
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert(err?.message || "Unable to start checkout. Please try again.");
    } finally {
      setLoadingTier(null);
    }
  }

  return (
    <section id="pricing" className="bg-gray-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Start free. Upgrade when you need unlimited reads.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white p-1 shadow-sm ring-1 ring-border">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  !annual
                    ? "bg-primary text-white"
                    : "text-muted hover:text-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  annual
                    ? "bg-primary text-white"
                    : "text-muted hover:text-gray-700"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </AnimateIn>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <AnimateIn key={tier.name} delay={i * 0.12}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  tier.highlighted
                    ? "scale-[1.02] border-2 border-primary bg-white shadow-xl shadow-primary/10"
                    : "border border-border bg-white shadow-sm"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    {tier.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{tier.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <motion.span
                      key={annual ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold tracking-tight text-gray-900"
                    >
                      {annual ? tier.yearly : tier.monthly}
                    </motion.span>
                    <span className="text-sm text-muted">
                      {annual && tier.yearlyNote
                        ? tier.yearlyNote
                        : tier.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaHref}
                  onClick={(e) => {
                    if (tier.name === "Free") return;
                    e.preventDefault();
                    handleCheckout(tier.name);
                  }}
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover"
                      : "border border-border text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tier.name === "Free" ? (
                    <span className="inline-flex items-center gap-2">
                      <Chrome className="h-4 w-4" />
                      {tier.cta}
                    </span>
                  ) : (
                    loadingTier === tier.name ? "Redirecting..." : tier.cta
                  )}
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
