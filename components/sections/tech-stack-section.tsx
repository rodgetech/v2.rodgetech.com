import Image from "next/image";
import { TECH_STACK } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function TechStackSection() {
  // Group icons into rows of 4
  const rows: (typeof TECH_STACK)[] = [];
  for (let i = 0; i < TECH_STACK.length; i += 4) {
    rows.push(TECH_STACK.slice(i, i + 4));
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Tech Stack
      </h2>
      <div className="flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            {rowIndex > 0 && <Separator />}
            <div className="grid grid-cols-4 py-6">
              {row.map((tech) => (
                <div key={tech.name} className="flex justify-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                    title={tech.name}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
