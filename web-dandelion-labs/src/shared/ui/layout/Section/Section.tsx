import type { PropsWithChildren } from "react";

import { cn } from "@/shared/lib/helpers/cn";

type SectionProps = PropsWithChildren<{
  className?: string;
  as?: "section" | "div";
}>;

function Section({ children, className, as = "section" }: SectionProps) {
  const Component = as;
  return (
    <Component
      className={cn("w-full py-[var(--spacing-section-y)]", className)}
    >
      {children}
    </Component>
  );
}

export default Section;
