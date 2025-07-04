import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Heading({ children }: Props) {
  return (
    <h1 className="text-center text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 animate-in fade-in zoom-in-95 duration-700">
      {children}
    </h1>
  );
}
