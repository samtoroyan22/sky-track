import type { IFlight } from "../../types/flight.types";

export function FlightImage({ flight }: { flight: IFlight }) {
  return (
    <div
      className="w-full h-60"
      style={{
        background: `linear-gradient(to bottom, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
      }}
    >
      <img
        src={flight?.airplane.image}
        alt={flight?.airplane.name}
        className="max-w-full h-auto"
      />
    </div>
  );
}
