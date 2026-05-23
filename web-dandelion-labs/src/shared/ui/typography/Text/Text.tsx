import type { JSX, PropsWithChildren } from "react";

import { cn } from "@/shared/lib/helpers/cn";

type TextProps = PropsWithChildren<{
  className?: string;
  variant?: "body" | "muted" | "caption";
  as?: "p" | "span";
}>;

const variants = {
  body: "typo-body text-primary",
  muted: "typo-body text-muted",
  caption: "typo-caption text-muted",
} satisfies Record<NonNullable<TextProps["variant"]>, string>;

function Text({ children, className, variant = "body", as = "p" }: TextProps) {
  const Component = as as keyof JSX.IntrinsicElements;

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}

export default Text;
