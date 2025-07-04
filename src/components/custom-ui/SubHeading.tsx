import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function SubHeading({ children }: Props) {
  return (
    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-200 mb-10 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-800">
      {children}
    </p>
  );
}
