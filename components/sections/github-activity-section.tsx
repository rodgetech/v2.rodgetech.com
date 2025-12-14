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
      <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        GitHub Activity
      </h2>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
        <ContributionGraphClient contributions={contributions} total={total} />
      </div>
    </div>
  );
}
