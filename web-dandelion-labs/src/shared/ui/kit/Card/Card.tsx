import type { ComponentProps, PropsWithChildren } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/helpers/cn";

const cardVariants = cva("rounded-card border transition-colors", {
  variants: {
    variant: {
      default: "border-border bg-surface shadow-card",

      muted: "border-border-muted bg-section-muted",

      highlight: "border-transparent bg-surface-highlight shadow-card-lg",
    },

    padding: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },

  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

type CardProps = PropsWithChildren<
  ComponentProps<"div"> & VariantProps<typeof cardVariants>
>;

function Card({ children, className, variant, padding, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
