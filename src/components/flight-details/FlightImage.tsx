import type { IFlight } from "../../types/flight.types";

export function FlightImage({ flight }: { flight: IFlight }) {
  return (
    <div
      className="w-full h-72 xs:h-65 xs:pt-20 pt-28"
      style={{
        background: `linear-gradient(to bottom, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
      }}
    >
      <img
        src={flight?.airplane.image}
        alt={flight?.airplane.name}
        className="max-w-[95%] h-auto mx-auto xs:max-w-[80%]"
      />
    </div>
  );
}
