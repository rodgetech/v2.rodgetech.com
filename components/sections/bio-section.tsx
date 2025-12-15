import { USER } from "@/config/site";

export function BioSection() {
  return (
    <p className="leading-8 text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
      Hi internet stranger,
      <br />
      {USER.longBio.trim()}
    </p>
  );
}
