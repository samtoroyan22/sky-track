import type { IFlight } from "../../types/flight.types";

export function FlightSchedule({ flight }: { flight: IFlight }) {
  return <div>{flight?.id}</div>;
}
