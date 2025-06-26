import { useSearchParams } from "react-router";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import { FLIGHTS } from "../flight-list/flights.data";
import { useMemo } from "react";
import { FlightHeader } from "./FlightHeader";
import { FlightImage } from "./FlightImage";
import { FlightInformation } from "./FlightInformation";
import { FlightRoute } from "./FlightRoute";
import { FlightStatus } from "./FlightStatus";
import { FlightActions } from "./FlightActions";
import { FlightSchedule } from "./FlightSchedule";

export function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);

  const flight = useMemo(
    () => FLIGHTS.find((flight) => flight.id === selectedFlight),
    [selectedFlight]
  );

  if (!flight) return null;

  return (
    <aside
      className="absolute w-sm top-7 right-7 h-full rounded-xl overflow-hidden bg-[#101010]"
      style={{ height: "calc(100% - 56px)" }}
    >
      <FlightHeader flight={flight} />
      <FlightImage flight={flight} />

      <FlightRoute flight={flight} />
      <FlightStatus flight={flight} />
      <FlightSchedule flight={flight} />

      <FlightInformation flight={flight} />
      <FlightActions flight={flight} />
    </aside>
  );
}
