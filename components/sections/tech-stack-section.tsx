import TechStackCarousel from "@/app/tech-stack-carousel";

export function TechStackSection() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Tech Stack
      </h2>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
        <TechStackCarousel />
      </div>
    </div>
  );
}
