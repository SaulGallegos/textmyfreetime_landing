export const metadata = {
  title: "Privacy Policy — TextMyFreeTime",
  description:
    "TextMyFreeTime Privacy Policy. Calendar data is processed entirely in your browser and is never stored or transmitted. Full Google API Limited Use disclosure included.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: May 31, 2026</p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-gray-700">

        {/* ── OVERVIEW ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
          <p className="mt-3">
            TextMyFreeTime (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
            is a Chrome browser extension that reads your Google Calendar or
            Microsoft Outlook calendar, identifies your free time slots, and
            formats them as plain text you can paste into emails, Slack messages,
            or any other communication tool. All calendar processing happens
            entirely inside your browser. We are committed to protecting your
            privacy and being fully transparent about how your information is
            handled.
          </p>
        </section>

        {/* ── GOOGLE API DISCLOSURE ── */}
        <section className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Google API Services — User Data Policy &amp; Limited Use Disclosure
          </h2>
          <p className="mt-3">
            TextMyFreeTime uses the Google Calendar API with the
            restricted OAuth scope{" "}
            <code className="rounded bg-blue-100 px-1.5 py-0.5 text-[13px] font-mono text-blue-800">
              https://www.googleapis.com/auth/calendar.events.readonly
            </code>{" "}
            solely to read your calendar event start and end times, calculate
            your available free time, and display that availability as
            copyable plain text within the extension popup. No calendar data
            is ever transmitted to, processed by, or stored on any server
            operated by TextMyFreeTime or any third party.
          </p>

          <p className="mt-4 font-semibold text-gray-900">
            The following statements govern our use of Google user data and
            are required by Google&rsquo;s verification process:
          </p>

          <ul className="mt-3 list-disc space-y-3 pl-6">
            <li>
              <strong>Limited Use.</strong> TextMyFreeTime&rsquo;s use of
              information received from Google APIs is limited to providing
              and improving the features described to the user at the time of
              authorization (displaying formatted calendar availability). We
              do not use Google user data for any other purpose.
            </li>
            <li>
              <strong>No Data Transfer.</strong> We do not transfer Google
              user data to any third party. Calendar data never leaves your
              browser.
            </li>
            <li>
              <strong>No Advertising.</strong> We do not use Google user data
              to serve advertisements, create advertising profiles, or
              otherwise target ads of any kind.
            </li>
            <li>
              <strong>No AI / ML Training.</strong> We do not use Google user
              data to train machine-learning models, large language models,
              or any other artificial intelligence systems.
            </li>
            <li>
              <strong>No Data Sale.</strong> We do not sell, rent, license,
              or otherwise monetize Google user data.
            </li>
            <li>
              <strong>No Human Review.</strong> We do not allow any human to
              read your Google Calendar data. Processing occurs exclusively
              in your local browser environment via client-side JavaScript
              with no server-side component.
            </li>
            <li>
              <strong>Minimum Scope.</strong> We request only the
              minimum OAuth scope necessary —{" "}
              <code className="rounded bg-blue-100 px-1.5 py-0.5 text-[13px] font-mono text-blue-800">
                calendar.events.readonly
              </code>{" "}
              — which permits reading event metadata (start/end times) but
              does not grant access to event descriptions, attendees, video
              links, or the ability to modify your calendar in any way.
            </li>
            <li>
              <strong>Revocable Access.</strong> You can revoke
              TextMyFreeTime&rsquo;s access to your Google account at any
              time via{" "}
              <a
                href="https://myaccount.google.com/permissions"
                className="text-primary underline hover:text-primary-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                myaccount.google.com/permissions
              </a>
              .
            </li>
          </ul>

          <p className="mt-4 rounded-lg bg-white p-4 text-[14px] italic text-gray-600 border border-blue-200">
            TextMyFreeTime&rsquo;s use and transfer to any other app of
            information received from Google APIs will adhere to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className="text-primary underline hover:text-primary-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </section>

        {/* ── WHAT DATA WE ACCESS ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            What data the extension accesses
          </h2>
          <p className="mt-3">
            When you authorize the extension, it temporarily reads calendar
            event data in your browser to identify free time slots. This data
            is:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Processed <strong>only in memory</strong> within your browser tab
              or extension service worker.
            </li>
            <li>
              <strong>Never written to disk,</strong> a database, a cookie, or
              any form of persistent local storage.
            </li>
            <li>
              <strong>Never sent over the network</strong> to TextMyFreeTime
              servers or any third-party server.
            </li>
            <li>
              Discarded immediately after the formatted text is generated and
              displayed.
            </li>
          </ul>
        </section>

        {/* ── WHAT DATA WE STORE ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            What data we store
          </h2>
          <p className="mt-3">
            TextMyFreeTime stores only the minimum account data needed to
            manage your subscription:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Email address</strong> — to identify your account and
              manage your subscription tier.
            </li>
            <li>
              <strong>Subscription status</strong> — whether you are on the
              Free or Pro plan.
            </li>
            <li>
              <strong>Stripe customer ID</strong> — a reference token used to
              link your account to Stripe for payment processing. We do not
              store any payment card data.
            </li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> store any Google Calendar data, Microsoft
            Outlook data, event titles, meeting attendees, calendar IDs, or any
            other calendar metadata.
          </p>
        </section>

        {/* ── GOOGLE CALENDAR ACCESS ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Google Calendar OAuth access
          </h2>
          <p className="mt-3">
            To read Google Calendar availability, the extension requests
            authorization via Google OAuth 2.0. The only scope requested is:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[13px] font-mono">
                https://www.googleapis.com/auth/calendar.events.readonly
              </code>{" "}
              — permits read-only access to your calendar event start and end
              times. It does not permit writing, editing, deleting, or sharing
              any calendar data.
            </li>
          </ul>
          <p className="mt-3">
            This access token is stored only in your browser&rsquo;s secure
            extension storage (
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[13px] font-mono">
              chrome.storage.local
            </code>
            ) and is used exclusively to make API calls from your browser to
            Google&rsquo;s servers on your behalf. It is never transmitted to
            TextMyFreeTime servers.
          </p>
        </section>

        {/* ── MICROSOFT OAUTH ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Microsoft Outlook OAuth access
          </h2>
          <p className="mt-3">
            For Outlook users, the extension requests read-only access to
            your Outlook calendar via Microsoft OAuth. The same local-only
            processing applies: calendar data is read from Microsoft&rsquo;s API
            directly into your browser, used to generate formatted text, and
            never transmitted to our servers. We request only the minimum scope
            necessary to determine your free time slots.
          </p>
        </section>

        {/* ── PAYMENT ── */}
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
            . We do not store credit card numbers, billing addresses, CVV codes,
            or any other payment details.{" "}
            <a
              href="https://stripe.com/privacy"
              className="text-primary underline hover:text-primary-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe&rsquo;s Privacy Policy
            </a>{" "}
            governs how your payment information is handled.
          </p>
        </section>

        {/* ── ANALYTICS ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Website analytics
          </h2>
          <p className="mt-3">
            The TextMyFreeTime marketing website (textmyfreetime.com) uses
            Vercel Analytics to collect aggregate, anonymized page-view data
            (e.g., page URL, browser type, country). No personally identifiable
            information is collected, and this data is not linked to any
            individual user. The Chrome extension itself does not use any
            analytics or tracking.
          </p>
        </section>

        {/* ── DATA SECURITY ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Data security
          </h2>
          <p className="mt-3">
            Account data (email, subscription status, Stripe customer ID) is
            stored in a MongoDB database hosted on encrypted, access-controlled
            infrastructure. All data in transit is protected by TLS/HTTPS. We
            retain account data only as long as your account is active.
          </p>
        </section>

        {/* ── DATA DELETION ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Data deletion
          </h2>
          <p className="mt-3">
            You may request complete deletion of your account and all
            associated data at any time by emailing{" "}
            <a
              href="mailto:support@textmyfreetime.com"
              className="text-primary underline hover:text-primary-hover"
            >
              support@textmyfreetime.com
            </a>
            . We will process your request within 30 days. Because calendar data
            is never stored, there is no calendar data to delete.
          </p>
          <p className="mt-3">
            To revoke the extension&rsquo;s access to your Google account
            independently of your TextMyFreeTime account, visit{" "}
            <a
              href="https://myaccount.google.com/permissions"
              className="text-primary underline hover:text-primary-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              myaccount.google.com/permissions
            </a>{" "}
            and remove TextMyFreeTime from the list of authorized applications.
          </p>
        </section>

        {/* ── CHILDREN ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Children&rsquo;s privacy
          </h2>
          <p className="mt-3">
            TextMyFreeTime is not directed at children under the age of 13. We
            do not knowingly collect personal information from children. If you
            believe we have inadvertently collected such information, please
            contact us and we will promptly delete it.
          </p>
        </section>

        {/* ── CHANGES ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. When we do,
            we will update the &ldquo;Last updated&rdquo; date at the top of
            this page. Continued use of the extension after changes are posted
            constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* ── CONTACT ── */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-3">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
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
