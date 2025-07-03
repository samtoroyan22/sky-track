import { useSearchParams } from "react-router";
import type { IFlight } from "../../types/flight.types";
import { QUERY_PARAM_FLIGHT } from "./flights.constants";
import { cn } from "@/lib/utils";
import { FlightCardActions } from "./actions/FlightCardActions";

interface Props {
  flight: IFlight;
}

export function FlightCard({ flight }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const isActive = selectedFlight === flight.id;
  return (
    <div
      className={cn(
        "relative rounded-lg p-0.5 w-full transition-colors ease-in group",
        isActive
          ? "bg-gradient-to-r from-sky-800 to-cyan-600"
          : "bg-transparent"
      )}
    >
      <FlightCardActions flightId={flight.id} />
      <button
        onClick={() => {
          setSearchParams({
            [QUERY_PARAM_FLIGHT]: flight.id,
          });
        }}
        className="bg-neutral-900 rounded-lg p-5 block w-full h-full"
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
            <span className="bg-neutral-800 rounded-xl py-1 px-2">
              {flight.aircraftReg}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-0.5 text-left">
            <div>{flight.from.city}</div>
            <div className="font-semibold text-3xl">{flight.from.code}</div>
          </div>
          <div>{/* PROGRESS BAR */}</div>
          <div>
            <div>{flight.to.city}</div>
            <div className="font-semibold text-3xl">{flight.to.code}</div>
          </div>
        </div>
      </button>
    </div>
  );
}
