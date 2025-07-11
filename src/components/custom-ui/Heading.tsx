import { GradientText } from "../animate-ui/text/gradient";

interface Props {
  children: string;
}

export function Heading({ children }: Props) {
  const text = children;
  return (
    <div>
      <GradientText
        className="text-5xl text-center sm:text-4xl font-extrabold animate-in fade-in slide-in-from-top-2 duration-800"
        text={text}
      />
    </div>
  );
}
