import Image from "next/image";
import Link from "next/link";
import { WORK_EXPERIENCE, USER } from "@/config/site";
import { Button } from "@/components/ui/button";

export function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
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
        <Button asChild>
          <Link href={`mailto:${USER.email}`}>Hire Me</Link>
        </Button>
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
  );
}
