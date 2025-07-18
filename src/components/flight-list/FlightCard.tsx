import { useSearchParams } from "react-router";
import type { IFlight } from "../../types/flight.types";
import { QUERY_PARAM_FLIGHT } from "./flights.constants";
import { cn } from "@/lib/utils";
import { FlightCardActions } from "./actions/FlightCardActions";
import { ProgressBar } from "../custom-ui/ProgressBar";

interface Props {
  flight: IFlight;
}

export function FlightCard({ flight }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const isActive = selectedFlight === flight.id;

  return (
    <div className="flex flex-col gap-1 relative w-full shadow-xl transition-colors ease-in group animate-fadeIn">
      <FlightCardActions flightId={flight.id} />
      <div
        className={cn(
          "rounded-lg p-0.5",
          isActive
            ? "bg-gradient-to-r dark:from-sky-800 dark:to-cyan-600 from-sky-600 to-cyan-500"
            : "bg-transparent"
        )}
      >
        <button
          onClick={() => {
            setSearchParams({
              [QUERY_PARAM_FLIGHT]: flight.id,
            });
          }}
          className="bg-card rounded-lg p-5 block w-full h-full"
        >
          <div className="flex justify-between items-center mb-7">
            <div className="flex items-center gap-4">
              <img
                src={flight.logo}
                alt={flight.id}
                width={40}
                height={40}
                className="rounded-full bg-white"
              />
              <span>{flight.id}</span>
            </div>
            <div>
              <span className="bg-neutral-200 dark:bg-neutral-800 rounded-xl py-1 px-2">
                {flight.aircraftReg}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_5fr_1fr] items-end gap-4">
            <div className="space-y-0.5 text-left">
              <div>{flight.from.city}</div>
              <div className="font-semibold text-3xl">{flight.from.code}</div>
            </div>
            <div className="mb-4">
              <ProgressBar persentage={flight.progress} />
            </div>
            <div>
              <div>{flight.to.city}</div>
              <div className="font-semibold text-3xl">{flight.to.code}</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
