import { ArrowIcon, WhatsAppIcon, PhoneIcon, CheckIcon } from "./Icons";
import { siteConfig, waLink } from "./SiteConfig";

/**
 * Clear, action-oriented conversion buttons for service pages.
 * The primary button states exactly what happens ("Start a conversation"),
 * and a short helper line removes ambiguity ("Free initial chat · No obligation").
 */

interface CtaButtonsProps {
  /** WhatsApp pre-fill message */
  message?: string;
  /** Override the primary anchor href (default: scroll to #contact on page) */
  href?: string;
}

export function CtaButtons({
  message = "Hello Jurigeek, I'd like to start a conversation.",
  href = "#contact",
}: CtaButtonsProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <a href={href} className="group btn-lime !px-6 !py-3.5">
          <WhatsAppIcon className="h-4 w-4" />
          Start a conversation
          <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
        <a
          href={waLink(siteConfig.phones[0].wa, message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-light group !px-6 !py-3.5"
        >
          <PhoneIcon className="h-4 w-4 text-orange-400" />
          WhatsApp us instead
          <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>
      <p className="mt-3 flex items-center gap-2 text-sm text-ink-soft">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
          <CheckIcon className="h-2.5 w-2.5" />
        </span>
        Free initial chat · No obligation · We reply within 24 hours
      </p>
    </div>
  );
}
