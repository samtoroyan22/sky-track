"use client";

import { useEffect, useState } from "react";
import { Filters } from "../filters/Filters";
import { FlightCard } from "./FlightCard";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Button } from "../ui/button";
import { RefreshCw } from "../animate-ui/icons/refresh-cw";
import { formatDate } from "./format-date";
import { useFlightsInfor } from "@/hooks/useFlightInfo";

interface Props {
  flightIcaos: string[];
  isSuccess: boolean;
}

export function FlightList({ flightIcaos, isSuccess }: Props) {
  const [fromCountry, setFromCountry] = useState<string | null>(null);
  const [currentAirline, setCurrentAirline] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  const { data, refetch, isRefetching, isPending, lastUpdate } =
    useFlightsInfor(
      {
        flightIcaos,
        airline: currentAirline,
        fromCountry,
        limit: 15,
        offset: 0,
      },
      isSuccess
    );

  useEffect(() => {
    if (isSuccess) refetch();
  }, [isSuccess, refetch]);

  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof window !== "undefined") {
        setIsDark(document.documentElement.classList.contains("dark"));
      }
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const baseColor = isDark ? "#202020" : "#ebebeb";
  const highlightColor = isDark ? "#444" : "#fff";

  return (
    <div className="w-sm xs:w-full xs:px-0 md:w-xs relative z-10">
      <Filters
        fromCountry={fromCountry}
        setFromCountry={setFromCountry}
        currentAirline={currentAirline}
        setCurrentAirline={setCurrentAirline}
      />

      <div className="flex items-center justify-start mb-4">
        <Button
          className="rounded-lg p-0 bg-card"
          onClick={() => refetch()}
          disabled={isRefetching}
          variant="secondary"
        >
          <RefreshCw animateOnHover />
        </Button>

        {lastUpdate && (
          <div className="mb-0.5 ml-4 text-xs italic opacity-60">
            {isRefetching ? (
              <>Updating...</>
            ) : (
              <>Last update: {formatDate(lastUpdate)}</>
            )}
          </div>
        )}
      </div>

      <div className="space-y-3 w-sm xs:w-full xs:px-0 md:w-xs]">
        {isPending ? (
          <SkeletonTheme
            baseColor={baseColor}
            highlightColor={highlightColor}
            borderRadius="0.7rem"
            height={170}
          >
            <Skeleton count={5} className="mb-3 p-0.5" />
          </SkeletonTheme>
        ) : (
          !!data?.length &&
          data.map((flight) => (
            <FlightCard key={flight.flight.number} flight={flight} />
          ))
        )}
      </div>
    </div>
  );
}
