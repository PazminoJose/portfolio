import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function BadgeLink({ href, className, children }: BadgeLinkProps) {
  return (
    <a
      href={href}
      target="_blankA"
      className={cn(
        `me-2 inline-flex items-center justify-center gap-2 rounded border border-blue-400 bg-blue-100 
        px-2.5 py-0.5 text-xs font-semibold text-white hover:bg-blue-200/50 dark:bg-gray-700 dark:text-white`,
        className
      )}
    >
      {children}
    </a>
  );
}
