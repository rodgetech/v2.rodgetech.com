"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { USER } from "@/config/site";
import { TimeDisplay } from "@/components/ui/time-display";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function HeroSection() {
  const { scrollY } = useScroll();

  // Parallax effect: image moves slower than scroll (0.5x speed)
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    },
    []
  );

  return (
    <div className="relative w-full">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 py-5 sm:py-6">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-12 flex justify-end">
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="#work-experience"
              onClick={handleSmoothScroll}
              className="text-sm font-medium text-white transition-colors hover:text-white/80 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Work experience</span>
              <span className="sm:hidden">Work</span>
            </Link>
            <Link
              href="#projects"
              onClick={handleSmoothScroll}
              className="text-sm font-medium text-white transition-colors hover:text-white/80 whitespace-nowrap"
            >
              Projects
            </Link>
            <Link
              href="#lets-chat"
              onClick={handleSmoothScroll}
              className="text-sm font-medium text-white transition-colors hover:text-white/80 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Let&apos;s chat</span>
              <span className="sm:hidden">Chat</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="relative h-64 w-full overflow-hidden sm:h-80">
        <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
          <Image
            src="/cover.jpeg"
            alt="Cover"
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>
        {/* Gradient fade overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-zinc-50/50 to-zinc-50 dark:via-zinc-950/50 dark:to-zinc-950 z-[1]" />
      </div>

      {/* Profile Section */}
      <div className="relative -mt-16 z-10">
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
              <div className="text-sm text-zinc-500 dark:text-zinc-500 flex flex-col sm:flex-row sm:items-center gap-2">
                <span>Belize, Central America</span>
                <span className="text-zinc-300 dark:text-zinc-600 hidden sm:inline">
                  •
                </span>
                <TimeDisplay timeZone={USER.timeZone} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
