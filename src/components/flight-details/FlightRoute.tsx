import type { IFlight } from "../../types/flight.types";

export function FlightRoute({ flight }: { flight: IFlight }) {
  return <div>{flight?.from.country}</div>;
}
