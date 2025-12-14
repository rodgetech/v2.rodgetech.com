import Image from "next/image";
import Link from "next/link";
import { USER } from "@/config/site";

export function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 py-6">
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-12 flex justify-end">
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
      <div className="relative -mt-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
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
  );
}
