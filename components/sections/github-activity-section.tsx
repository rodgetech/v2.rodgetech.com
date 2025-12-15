import ContributionGraphClient from "@/app/contribution-graph-client";

type GitHubActivitySectionProps = {
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
  total: number;
};

export function GitHubActivitySection({
  contributions,
  total,
}: GitHubActivitySectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          GitHub Activity
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          A visual representation of my coding activity throughout the year.
        </p>
      </div>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
        <ContributionGraphClient contributions={contributions} total={total} />
      </div>
    </div>
  );
}
