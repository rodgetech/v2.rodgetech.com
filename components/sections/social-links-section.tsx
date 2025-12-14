import Link from "next/link";
import { Github, Linkedin, Youtube } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/site";

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-zinc-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="h-5 w-5 text-white dark:text-zinc-900"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SocialLinksSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Links
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Connect with me on social media and other platforms.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* X (formerly Twitter) */}
        <Link
          href={SOCIAL_LINKS.x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-zinc-900 dark:bg-zinc-50">
            <XIcon />
          </div>
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {SOCIAL_LINKS.x.name}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
              {SOCIAL_LINKS.x.username}
            </span>
          </div>
          <ExternalLinkIcon />
        </Link>

        {/* LinkedIn */}
        <Link
          href={SOCIAL_LINKS.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#0077b5]">
            <Linkedin className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {SOCIAL_LINKS.linkedin.name}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
              {SOCIAL_LINKS.linkedin.username}
            </span>
          </div>
          <ExternalLinkIcon />
        </Link>

        {/* YouTube */}
        <Link
          href={SOCIAL_LINKS.youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#FF0000]">
            <Youtube className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {SOCIAL_LINKS.youtube.name}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
              {SOCIAL_LINKS.youtube.username}
            </span>
          </div>
          <ExternalLinkIcon />
        </Link>

        {/* GitHub */}
        <Link
          href={SOCIAL_LINKS.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-zinc-900 dark:bg-zinc-50">
            <Github className="h-5 w-5 text-white dark:text-zinc-900" />
          </div>
          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {SOCIAL_LINKS.github.name}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
              {SOCIAL_LINKS.github.username}
            </span>
          </div>
          <ExternalLinkIcon />
        </Link>
      </div>
    </div>
  );
}
