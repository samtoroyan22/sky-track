import { FlightCard } from "./FlightCard";
import { FLIGHTS } from "./flights.data";

export function FlightList() {
  return (
    <div className="w-sm m-7 space-y-4">
      {FLIGHTS.map((flight) => (
        <FlightCard key={flight.airline} flight={flight} />
      ))}
    </div>
  );
}
