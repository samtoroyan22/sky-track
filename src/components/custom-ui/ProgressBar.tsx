import { Plane } from "lucide-react";

interface Props {
  persentage: number;
}

export function ProgressBar({ persentage }: Props) {
  return (
    <div className="w-full bg-neutral-300 rounded-full h-1 dark:bg-neutral-800">
      <div
        className="relative bg-gradient-to-r dark:from-sky-800 dark:to-cyan-600 from-sky-600 to-cyan-500 h-full rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${persentage}%` }}
      >
        <Plane
          fill="currentColor"
          stroke=""
          size={26}
          className="absolute -right-2 top-1/2 -translate-y-1/2 rotate-45 dark:text-neutral-200 text-neutral-900"
        />
      </div>
    </div>
  );
}
