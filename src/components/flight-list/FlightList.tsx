import { useEffect, useMemo, useState } from "react";
import { Filters } from "../filters/Filters";
import { FlightCard } from "./FlightCard";
import { FLIGHTS } from "./flights.data";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function FlightList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fromCountry, setFromCountry] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const filteredFlights = useMemo(() => {
    if (!fromCountry) return FLIGHTS;
    return FLIGHTS.filter((flight) => flight.from.country === fromCountry);
  }, [fromCountry]);

  return (
    <div className="w-sm xs:w-full xs:px-0 md:w-xs">
      <Filters fromCountry={fromCountry} setFromCountry={setFromCountry} />
      <div className="w-sm space-y-3 xs:w-full md:w-xs">
        {isLoading ? (
          <SkeletonTheme
            baseColor="#202020"
            highlightColor="#444"
            borderRadius="0.7rem"
            width={380}
            height={170}
          >
            <Skeleton count={5} className="mb-3 p-0.5" />
          </SkeletonTheme>
        ) : (
          !!filteredFlights.length &&
          filteredFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        )}
      </div>
    </div>
  );
}
