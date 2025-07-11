"use client";

import { FLIGHTS } from "../flight-list/flights.data";
import { FilterSearchSelect } from "./FilterSearchSelect";

const fromCountries = [
  { value: "all", label: "All" },
  ...[...new Set(FLIGHTS.map((flight) => flight.from.country))].map(
    (country) => ({
      value: country.toLowerCase(),
      label: country,
    })
  ),
];

const airlines = [
  { value: "all", label: "All" },
  ...[...new Set(FLIGHTS.map((flight) => flight.airline.name))].map(
    (airline) => ({
      value: airline.toLowerCase(),
      label: airline,
    })
  ),
];

interface Props {
  fromCountry: string | null;
  setFromCountry: (country: string | null) => void;
  currentAirline: string | null;
  setCurrentAirline: (airline: string | null) => void;
}

export function Filters({
  fromCountry,
  setFromCountry,
  currentAirline,
  setCurrentAirline,
}: Props) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <FilterSearchSelect
        data={fromCountries}
        entityName="country"
        value={fromCountry}
        onChange={setFromCountry}
      />

      <FilterSearchSelect
        data={airlines}
        entityName="airline"
        value={currentAirline}
        onChange={setCurrentAirline}
      />
    </div>
  );
}
