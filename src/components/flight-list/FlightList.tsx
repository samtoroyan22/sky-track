"use client";

import { useEffect, useMemo, useState } from "react";
import { Filters } from "../filters/Filters";
import { FlightCard } from "./FlightCard";
import { FLIGHTS } from "./flights.data";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function FlightList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fromCountry, setFromCountry] = useState<string | null>(null);
  const [currentAirline, setCurrentAirline] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const checkDarkMode = () => {
      if (typeof window !== "undefined") {
        setIsDark(document.documentElement.classList.contains("dark"));
      }
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const filteredFlights = useMemo(() => {
    return FLIGHTS.filter((flight) => {
      const matchesCountry = fromCountry
        ? flight.from.country === fromCountry
        : true;
      const matchesAirline = currentAirline
        ? flight.airline.name === currentAirline
        : true;
      return matchesCountry && matchesAirline;
    });
  }, [fromCountry, currentAirline]);

  const baseColor = isDark ? "#202020" : "#ebebeb";
  const highlightColor = isDark ? "#444" : "#fff";

  return (
    <div className="w-sm xs:w-full xs:px-0 md:w-xs">
      <Filters
        fromCountry={fromCountry}
        setFromCountry={setFromCountry}
        currentAirline={currentAirline}
        setCurrentAirline={setCurrentAirline}
      />
      <div className="space-y-3 w-sm xs:w-full xs:px-0 md:w-xs">
        {isLoading ? (
          <SkeletonTheme
            baseColor={baseColor}
            highlightColor={highlightColor}
            borderRadius="0.7rem"
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
