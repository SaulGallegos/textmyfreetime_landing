import { Chrome } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gray-50/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <Chrome className="h-5 w-5 text-primary" />
            TextMyFreeTime
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted">
            <a href="/privacy" className="transition-colors hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Chrome Web Store
            </a>
            <a
              href="mailto:support@textmyfreetime.com"
              className="transition-colors hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} TextMyFreeTime. All rights
            reserved.
          </p>
          <p className="mt-1">
            TextMyFreeTime is not affiliated with Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
