export const metadata = {
  title: "Terms of Service — TextMyFreeTime",
  description:
    "Terms of Service for TextMyFreeTime, a Chrome extension for copying your Outlook calendar availability as plain text.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-muted">
        Last updated: March 18, 2026
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            1. Service description
          </h2>
          <p className="mt-3">
            TextMyFreeTime (&ldquo;the Service&rdquo;) is a Chrome browser
            extension that connects to your Microsoft Outlook calendar via
            Microsoft Graph API and generates formatted plain-text
            representations of your calendar availability. The Service includes a
            companion website for account management and subscription billing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            2. Free and paid tiers
          </h2>
          <p className="mt-3">
            The Service offers two tiers:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Free</strong> — includes all formatting options and date
              ranges, limited to 2 copies per day.
            </li>
            <li>
              <strong>Pro ($4/month)</strong> — includes unlimited copies, all
              formatting options, priority support, and access to all future
              features.
            </li>
          </ul>
          <p className="mt-3">
            We reserve the right to modify pricing or feature availability with
            reasonable notice to existing subscribers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            3. Account & authentication
          </h2>
          <p className="mt-3">
            You authenticate using your existing Microsoft account. By signing
            in, you authorize us to access your calendar in read-only mode
            solely for the purpose of generating availability text. You are
            responsible for maintaining the security of your Microsoft account
            credentials.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            4. Acceptable use
          </h2>
          <p className="mt-3">You agree not to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Use the Service for any unlawful purpose or in violation of any
              applicable laws.
            </li>
            <li>
              Attempt to reverse-engineer, decompile, or disassemble the
              extension or its backend services.
            </li>
            <li>
              Abuse the Service by circumventing rate limits or automating
              usage beyond normal personal or professional use.
            </li>
            <li>
              Resell, redistribute, or sublicense access to the Service without
              our written consent.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            5. Limitation of liability
          </h2>
          <p className="mt-3">
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, either express or
            implied. We do not guarantee that the Service will be uninterrupted,
            error-free, or that calendar data will always be accurate.
          </p>
          <p className="mt-3">
            To the maximum extent permitted by law, TextMyFreeTime and its
            operators shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of or
            inability to use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            6. Cancellation & refunds
          </h2>
          <p className="mt-3">
            You may cancel your Pro subscription at any time. Upon cancellation,
            you will retain access to Pro features until the end of your current
            billing period, after which your account will revert to the Free
            tier.
          </p>
          <p className="mt-3">
            We do not offer refunds for partial billing periods. If you cancel
            mid-cycle, you will not be charged for the following period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            7. Changes to these terms
          </h2>
          <p className="mt-3">
            We may update these Terms of Service from time to time. If we make
            material changes, we will notify you by updating the &ldquo;Last
            updated&rdquo; date at the top of this page. Your continued use of
            the Service after changes are posted constitutes your acceptance of
            the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-3">
            If you have questions about these terms, please contact us at{" "}
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
