import type { ComponentProps, ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/helpers/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",

        secondary:
          "border border-border bg-surface text-foreground hover:bg-section-muted",

        ghost: "bg-transparent text-foreground hover:bg-section-muted",
      },

      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    icon?: ReactNode;
  };

function Button({
  children,
  className,
  variant,
  size,
  loading = false,
  disabled,
  icon,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {loading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        icon
      )}

      {children}
    </button>
  );
}

export default Button;
