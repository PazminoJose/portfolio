import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export default function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        `flex items-center gap-1 rounded-full  bg-blue-100 py-0.5 pl-1 pr-0 text-xs font-medium text-white sm:gap-2
    sm:px-2.5 dark:bg-blue-900 dark:text-white`,
        className
      )}
    >
      {children}
    </span>
  );
}
