import { FlightDetails } from "../../components/flight-details/FlightDetails";
import { Favorites } from "./Favorites";

function Main() {
  return (
    <div className="relative min-h-screen">
      <Favorites />
      <FlightDetails isFavorite={true} />
    </div>
  );
}

export default Main;
