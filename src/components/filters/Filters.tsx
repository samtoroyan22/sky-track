import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Filter } from "lucide-react";
import { FLIGHTS } from "../flight-list/flights.data";

const fromCountries = [
  ...new Set(FLIGHTS.map((flight) => flight.from.country)),
];

interface Props {
  fromCountry: string | null;
  setFromCountry: (country: string | null) => void;
}

export function Filters({ fromCountry, setFromCountry }: Props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-5 py-2.5 mb-7 w-full rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white flex items-center justify-between focus:outline-none focus:ring-0">
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4" />
          {fromCountry ? fromCountry : "Select country"}
        </div>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={8}
        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-2 min-w-[180px] shadow-md dark:shadow-lg animate-in fade-in slide-in-from-top-1"
      >
        {fromCountry && (
          <>
            <DropdownMenu.Item
              onSelect={() => setFromCountry(null)}
              className="p-3 rounded-lg text-sm font-bold hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-0"
            >
              All
            </DropdownMenu.Item>
            <div className="m-2 border-b-2 border-neutral-700"></div>
          </>
        )}
        {fromCountries.map((country) => (
          <DropdownMenu.Item
            key={country}
            onSelect={() => setFromCountry(country)}
            className={`p-3 rounded-lg text-sm text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-0 ${
              fromCountry === country
                ? "bg-neutral-200 dark:bg-neutral-700 font-medium"
                : ""
            }`}
          >
            {country}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
