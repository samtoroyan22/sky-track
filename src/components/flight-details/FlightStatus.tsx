import { ProgressBar } from "../custom-ui/ProgressBar";

interface Props {
  progress: number;
}

export function FlightStatus({ progress }: Props) {
  return (
    <div className="bg-card p-mini-element mb-1">
      <div className="mt-3 mb-3.5">
        <ProgressBar persentage={progress} />
      </div>
      <div className="flex justify-between text-sm opacity-50">
        <div>
          <span>2 715 km</span>
          <span className="mx-2">•</span>
          <span>3h 1m</span>
        </div>
        <div>
          <span>881 km</span>
          <span className="mx-2">•</span>
          <span>59m</span>
        </div>
      </div>
    </div>
  );
}
