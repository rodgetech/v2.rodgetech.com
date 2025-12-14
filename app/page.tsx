import { unstable_cache } from "next/cache";
import {
  HeroSection,
  BioSection,
  SocialLinksSection,
  WorkExperienceSection,
  GitHubActivitySection,
  TechStackSection,
  LetsTalkSection,
} from "@/components/sections";
import { FlickeringFooter } from "@/components/ui/flickering-footer";

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
      <HeroSection />

      {/* Main Content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-12">
        <div className="w-full flex flex-col gap-12">
          <BioSection />
          <SocialLinksSection />
          <WorkExperienceSection />
          <GitHubActivitySection contributions={contributions} total={total} />
          <TechStackSection />
          <LetsTalkSection />
        </div>
      </main>

      {/* Footer */}
      <FlickeringFooter />
    </div>
  );
}
