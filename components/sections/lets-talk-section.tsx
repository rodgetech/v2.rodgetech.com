import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LetsTalkSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Let&apos;s Talk
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          If my work caught your interest, book a time and let&apos;s talk. We
          can discuss projects, MVPs, or even full-time opportunities.
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
  );
}
