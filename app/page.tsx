import { unstable_cache } from "next/cache";
import Image from "next/image";
import ContributionGraphClient from "./contribution-graph-client";
import { USER } from "@/config/site";

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
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      {/* Hero Section with Cover Image */}
      <div className="relative w-full">
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
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
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
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            GitHub Activity
          </h2>
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
            <ContributionGraphClient
              contributions={contributions}
              total={total}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
