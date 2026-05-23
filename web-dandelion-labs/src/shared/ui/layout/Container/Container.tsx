import type { PropsWithChildren } from "react";

import { cn } from "@/shared/lib/helpers/cn";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
