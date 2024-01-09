import type { IconProps } from "./interfaces/IconProps";

export default function ChevronDown({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
}
