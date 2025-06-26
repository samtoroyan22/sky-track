import type { IFlight } from "../../types/flight.types";

export function FlightStatus({ flight }: { flight: IFlight }) {
  return <div>{flight?.id}</div>;
}
