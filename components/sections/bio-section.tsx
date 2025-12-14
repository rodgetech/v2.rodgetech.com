import { Separator } from "@/components/ui/separator";
import { USER } from "@/config/site";

export function BioSection() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <Separator />
      <p className="leading-8 text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
        {USER.longBio.trim()}
      </p>
      <Separator />
    </div>
  );
}
