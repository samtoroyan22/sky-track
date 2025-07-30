import { X } from "../animate-ui/icons/x";
import { useSearchParams } from "react-router";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import type { IFlightData } from "@/services/aviation/aviation.types";

export function FlightHeader({ flight }: { flight: IFlightData }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className="bg-card rounded-t-xl px-6 py-4 flex items-center justify-between
    absolute top-3.5 left-1/2 -translate-x-1/2 w-11/12 rounded-xl h-max"
    >
      <div>
        <h2 className="text-sky-500 dark:text-sky-400  text-xl font-medium">
          {flight.flight.icao}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {flight.airline.name}
        </p>
      </div>
      <button
        onClick={() => {
          searchParams.delete(QUERY_PARAM_FLIGHT);
          setSearchParams(searchParams);
        }}
      >
        <X
          animateOnHover
          animateOnTap
          size={30}
          className="bg-neutral-300 dark:bg-neutral-800 -text-card transition-colors p-1 rounded-full"
        />
      </button>
    </div>
  );
}
