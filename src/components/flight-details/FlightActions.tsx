import type { IFlight } from "../../types/flight.types";

export function FlightActions({ flight }: { flight: IFlight }) {
  return <div>FlightActions {flight?.id}</div>;
}
