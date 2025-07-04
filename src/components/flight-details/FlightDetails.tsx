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
    <aside className="absolute w-md top-7 right-7 rounded-xl overflow-hidden bg-[#101010]">
      <FlightHeader flight={flight} />
      <FlightImage flight={flight} />

      <div className="p-3.5">
        <FlightRoute flight={flight} />
        <FlightStatus progress={flight.progress} />
        <FlightSchedule />

        <FlightInformation flight={flight} />

        <FlightActions
          onRoute={() => {}}
          onFollow={() => {}}
          onShare={() => {}}
          onMore={() => {}}
        />
      </div>
    </aside>
  );
}
