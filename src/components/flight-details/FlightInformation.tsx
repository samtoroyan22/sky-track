import type { IFlight } from "../../types/flight.types";

export function FlightInformation({ flight }: { flight: IFlight }) {
  return (
    <div>
      <img
        src={`/flags/${flight?.airline.country.toLowerCase()}.svg`}
        alt={flight?.airline.country}
        width={24}
        height={18}
        className="inline-block"
      />
      <span>{flight?.airline.country}</span>
    </div>
  );
}
