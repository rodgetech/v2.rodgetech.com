import { cn } from "@/lib/utils";
import { Separator } from "./separator";

type PageSectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  showTopSeparator?: boolean;
  showBottomSeparator?: boolean;
  /** When true, adds a solid background to hide the vertical grid lines behind this section's content */
  hideGrid?: boolean;
};

export function PageSection({
  children,
  id,
  className,
  showTopSeparator = true,
  showBottomSeparator = false,
  hideGrid = false,
}: PageSectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-12", className)}>
      {/* Vertical dashed grid lines */}
      {!hideGrid && (
        <div
          className="section-grid pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
      )}

      {showTopSeparator && <Separator />}
      <div
        className={cn(
          "relative py-16",
          hideGrid && "bg-zinc-50 dark:bg-zinc-950"
        )}
      >
        {children}
      </div>
      {showBottomSeparator && <Separator />}
    </section>
  );
}
