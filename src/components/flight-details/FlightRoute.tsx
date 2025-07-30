import type { IFlightData } from "@/services/aviation/aviation.types";

import { Plane } from "lucide-react";
import { useMemo } from "react";
import { getAirportAdditionalData } from "../map/get-airport-coordinates";
import { getUtcOffsetFromTimezone } from "./getAirportUtc";

export function FlightRoute({ flight }: { flight: IFlightData }) {
  const departureAirport = useMemo(
    () => getAirportAdditionalData(flight.departure.icao),
    [flight.departure.icao]
  );

  const arrivalAirport = useMemo(
    () => getAirportAdditionalData(flight.arrival.icao),
    [flight.arrival.icao]
  );

  return (
    <div className="grid grid-cols-2 gap-1 mb-1 relative">
      <div className="bg-details p-element xs:p-4 rounded-tl-xl text-center">
        <h3 className="-text-card xs:text-3xl text-4xl font-semibold mb-1.5">
          {flight.departure.iata}
        </h3>
        <p className="-text-card text-lg xs:text-base font-medium">
          {departureAirport?.municipality}
        </p>
        <p className="text-neutral-500 text-sm font-medium">
          {getUtcOffsetFromTimezone(flight.departure.timezone)}
        </p>
      </div>

      <div
        className="flex items-center justify-center mb-2
      bg-white dark:bg-black rounded-full w-12 h-12 absolute 
        top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        <Plane className="text-sky-400 xs:size-5" size={22} />
      </div>

      <div className="bg-details p-element xs:p-4 rounded-tr-xl text-center">
        <h3 className="-text-card xs:text-3xl text-4xl font-semibold mb-1.5">
          {flight.arrival.iata}
        </h3>
        <p className="-text-card text-lg xs:text-base font-medium">
          {arrivalAirport?.municipality}
        </p>
        <p className="text-neutral-500 text-sm font-medium">
          {getUtcOffsetFromTimezone(flight.arrival.timezone)}
        </p>
      </div>
    </div>
  );
}
