import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/config/site";

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

export function ProjectsSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Projects
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Some recent personal projects I&apos;ve worked on.
        </p>
      </div>
      <div className="flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
          >
            {project.image && (
              <div className="relative w-full sm:w-48 h-48 shrink-0 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex items-start justify-between gap-4 flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                )}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <ExternalLinkIcon />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
