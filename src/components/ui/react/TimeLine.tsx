import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TimeLineProps {
  className: string;
  children?: ReactNode;
}

export default function TimeLine({ className, children }: TimeLineProps) {
  return (
    <ol className={cn("relative border-s border-gray-200 dark:border-gray-700", className)}>{children}</ol>
  );
}
