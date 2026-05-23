import type { PropsWithChildren, JSX } from "react";

import { cn } from "@/shared/lib/helpers/cn";

type HeadingProps = PropsWithChildren<{
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}>;

const variants = {
  1: "typo-h1",
  2: "typo-h2",
  3: "typo-h3",
  4: "typo-h4",
  5: "typo-h5",
  6: "typo-h6",
} satisfies Record<1 | 2 | 3 | 4 | 5 | 6, string>;

function Heading({ children, className, level = 1 }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Component className={cn(variants[level], className)}>{children}</Component>
  );
}

export default Heading;
