import { FlightCard } from "./FlightCard";
import { FLIGHTS } from "./flights.data";

export function FlightList() {
  return (
    <div className="w-sm space-y-3">
      {FLIGHTS.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}
