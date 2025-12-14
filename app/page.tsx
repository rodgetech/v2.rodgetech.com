import { unstable_cache } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Youtube } from "lucide-react";
import ContributionGraphClient from "./contribution-graph-client";
import TechStackCarousel from "./tech-stack-carousel";
import { USER, SOCIAL_LINKS, WORK_EXPERIENCE } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type Response = {
  total: Record<number, number>;
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
};

const username = "rodgetech";

const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(
      `/v4/${username}`,
      "https://github-contributions-api.jogruber.de"
    );
    const response = await fetch(url);
    const data = (await response.json()) as Response;
    const currentYear = new Date().getFullYear();
    const total = data.total[currentYear];

    // Filter contributions to only include current year
    const contributions = data.contributions.filter((contribution) => {
      return contribution.date.startsWith(String(currentYear));
    });

    return { contributions, total };
  },
  ["github-contributions-rodgetech"],
  { revalidate: 60 * 60 * 24 }
);

export default async function Home() {
  const { contributions, total } = await getCachedContributions();

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section with Cover Image */}
      <div className="relative w-full">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-6 sm:px-12">
          <div className="mx-auto w-full max-w-4xl flex justify-end">
            <div className="flex items-center gap-6">
              <Link
                href="#work-experience"
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                Work experience
              </Link>
              <Link
                href="#lets-chat"
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                Let&apos;s chat
              </Link>
            </div>
          </div>
        </nav>

        <div className="relative h-64 w-full overflow-hidden sm:h-80">
          <Image
            src="/cover.jpeg"
            alt="Cover"
            fill
            className="object-cover object-bottom"
            priority
          />
          {/* Gradient fade overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-zinc-50/50 to-zinc-50 dark:via-zinc-950/50 dark:to-zinc-950" />
        </div>

        {/* Profile Section */}
        <div className="relative -mt-16 px-6 sm:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
              {/* Profile Picture */}
              <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40">
                <Image
                  src="/me.png"
                  alt="Luis Rodriguez"
                  fill
                  className="rounded-full border-4 border-zinc-50 object-cover dark:border-zinc-950"
                  priority
                />
              </div>

              {/* Name and Title */}
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex items-center gap-2">
                  <h1 className="font-heading text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {USER.displayName}
                  </h1>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {USER.jobTitle}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {USER.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-12">
        <div className="w-full flex flex-col gap-12">
          {/* Long Bio Section */}
          <div className="flex flex-col gap-8 py-8">
            <Separator />
            <p className="leading-8 text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
              {USER.longBio.trim()}
            </p>
            <Separator />
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* X (formerly Twitter) */}
              <Link
                href={SOCIAL_LINKS.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-zinc-900 dark:bg-zinc-50">
                  <svg
                    className="h-5 w-5 text-white dark:text-zinc-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    {SOCIAL_LINKS.x.name}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
                    {SOCIAL_LINKS.x.username}
                  </span>
                </div>
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
              </Link>
            </div>
          </div>

          {/* Work Experience Section */}
          <div
            id="work-experience"
            className="flex flex-col gap-4 scroll-mt-12"
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Previously @
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                To see all my work experience,{" "}
                <Link
                  href={WORK_EXPERIENCE.resumeUrl}
                  className="underline hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  download resume
                </Link>
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
              <div className="flex flex-col gap-4">
                {/* Company Header */}
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={WORK_EXPERIENCE.mostRecent.logo}
                      alt={WORK_EXPERIENCE.mostRecent.company}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                        {WORK_EXPERIENCE.mostRecent.company}
                      </h3>
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                        {WORK_EXPERIENCE.mostRecent.startDate} -{" "}
                        {WORK_EXPERIENCE.mostRecent.endDate}
                      </span>
                    </div>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {WORK_EXPERIENCE.mostRecent.title}
                    </p>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="flex flex-col gap-2 pl-2">
                  {WORK_EXPERIENCE.mostRecent.responsibilities.map(
                    (responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        <span>{responsibility}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* GitHub Activity Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              GitHub Activity
            </h2>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
              <ContributionGraphClient
                contributions={contributions}
                total={total}
              />
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Tech Stack
            </h2>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
              <TechStackCarousel />
            </div>
          </div>

          {/* Book a Call Section */}
          <div id="lets-chat" className="flex flex-col gap-4 scroll-mt-12">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Let&apos;s Talk
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                If my work caught your interest, book a time and let&apos;s
                talk. We can discuss projects, MVPs, or even full-time
                opportunities.
              </p>
            </div>
            <Button asChild size="lg" className="w-fit">
              <Link
                href="https://cal.com/luisrodge/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free call
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="mx-auto w-full max-w-4xl px-6 py-8 sm:px-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} {USER.firstName} {USER.lastName}. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={SOCIAL_LINKS.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={SOCIAL_LINKS.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
