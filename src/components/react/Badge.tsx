import { cn } from "@/lib/utils";
import type React from "react";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export default function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        `flex items-center gap-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium
      text-white dark:bg-blue-900 dark:text-white`,
        className
      )}
    >
      {children}
    </span>
  );
}
