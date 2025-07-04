import { Plane } from "lucide-react";

interface Props {
  persentage: number;
}

export function ProgressBar({ persentage }: Props) {
  return (
    <div className="w-full bg-neutral-200 rounded-full h-1 dark:bg-neutral-800">
      <div
        className="relative bg-gradient-to-r from-sky-800 to-cyan-600 h-full rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${persentage}%` }}
      >
        <Plane
          fill="white"
          stroke=""
          size={26}
          className="absolute -right-2 top-1/2 -translate-y-1/2 rotate-45"
        />
      </div>
    </div>
  );
}
