import { unstable_cache } from "next/cache";
import {
  HeroSection,
  BioSection,
  SocialLinksSection,
  WorkExperienceSection,
  GitHubActivitySection,
  TechStackSection,
  ProjectsSection,
  LetsTalkSection,
} from "@/components/sections";
import { USER } from "@/config/site";
import { PageSection } from "@/components/ui/page-section";

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
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 sm:px-12">
        <PageSection hideGrid className="mt-8">
          <BioSection />
        </PageSection>

        <PageSection>
          <SocialLinksSection />
        </PageSection>

        <PageSection id="work-experience">
          <WorkExperienceSection />
        </PageSection>

        <PageSection>
          <GitHubActivitySection contributions={contributions} total={total} />
        </PageSection>

        <PageSection>
          <TechStackSection />
        </PageSection>

        <PageSection id="projects">
          <ProjectsSection />
        </PageSection>

        <PageSection id="lets-chat">
          <LetsTalkSection />
        </PageSection>

        {/* Footer */}
        <PageSection showBottomSeparator hideGrid>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} {USER.displayName}. All rights
              reserved.
            </p>
            <a
              href={`mailto:${USER.email}`}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {USER.email}
            </a>
          </div>
        </PageSection>
      </main>
    </div>
  );
}
