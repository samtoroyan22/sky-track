import type { IFlight } from "../../types/flight.types";

export function FlightInformation({ flight }: { flight: IFlight }) {
  return (
    <div className="my-3.5 text-sm sm:text-sm">
      <div className="font-medium mb-1 bg-[#212121] p-mini-element rounded-tl-xl rounded-tr-xl">
        Flight information
      </div>

      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card p-mini-element flex items-center justify-between">
          <p>{flight.airline.name}</p>
        </div>
        <div className="bg-card p-mini-element flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={`/flags/${flight?.airline.country.toLowerCase()}.svg`}
              alt={flight?.airline.country}
              width={24}
              height={18}
              className="inline-block mr-1"
            />
            <span>{flight?.airline.country}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-card p-mini-element flex items-center justify-between rounded-bl-xl">
          <p className="text-muted-foreground">Speed</p>
          <p>870 km/h</p>
        </div>
        <div className="bg-card p-mini-element flex items-center justify-between rounded-br-xl">
          <p className="text-muted-foreground">Attitude</p>
          <p>11 300 m</p>
        </div>
      </div>
    </div>
  );
}
