export const metadata = {
  title: "Privacy Policy — TextMyFreeTime",
  description:
    "Learn how TextMyFreeTime handles your data. Calendar data is never stored — only your email and subscription status are saved.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted">
        Last updated: March 18, 2026
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
          <p className="mt-3">
            TextMyFreeTime (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
            is a Chrome extension that reads your Microsoft Outlook calendar and
            formats your availability as plain text. We are committed to
            protecting your privacy and being transparent about how your data is
            handled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            What data we collect
          </h2>
          <p className="mt-3">We collect and store only the following:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Email address</strong> — used to identify your account and
              manage your subscription.
            </li>
            <li>
              <strong>Subscription status</strong> — whether you are on the Free
              or Pro plan.
            </li>
            <li>
              <strong>Stripe customer ID</strong> — used to link your account to
              Stripe for payment processing.
            </li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> collect, store, or transmit any calendar
            data. Your calendar events, meeting titles, attendees, and
            availability are processed entirely within your browser and are never
            sent to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Microsoft OAuth & calendar access
          </h2>
          <p className="mt-3">
            TextMyFreeTime uses Microsoft OAuth to authenticate your identity
            and request <strong>read-only</strong> access to your Outlook
            calendar. This access is used solely to read your free/busy
            information and generate formatted availability text inside your
            browser. We never write to, modify, or delete anything on your
            calendar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Payment processing
          </h2>
          <p className="mt-3">
            Payments for the Pro plan are handled entirely by{" "}
            <a
              href="https://stripe.com/privacy"
              className="text-primary underline hover:text-primary-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe
            </a>
            . We do not store credit card numbers, billing addresses, or any
            other payment details. Stripe&rsquo;s privacy policy governs how your
            payment information is handled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Data storage
          </h2>
          <p className="mt-3">
            Account data (email, subscription status, Stripe customer ID) is
            stored in a MongoDB database hosted on secure, encrypted
            infrastructure. We retain this data only as long as your account is
            active.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Third-party analytics
          </h2>
          <p className="mt-3">
            We do not use any third-party analytics, tracking, or advertising
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Data deletion
          </h2>
          <p className="mt-3">
            You can request deletion of your account and all associated data at
            any time by emailing{" "}
            <a
              href="mailto:support@textmyfreetime.com"
              className="text-primary underline hover:text-primary-hover"
            >
              support@textmyfreetime.com
            </a>
            . We will process your request within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-3">
            If you have questions about this privacy policy, please contact us
            at{" "}
            <a
              href="mailto:support@textmyfreetime.com"
              className="text-primary underline hover:text-primary-hover"
            >
              support@textmyfreetime.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
