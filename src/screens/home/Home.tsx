import { SkyTrackMap } from "@/components/map/SkyTrackMap";
import { FlightDetails } from "../../components/flight-details/FlightDetails";
import { FlightList } from "../../components/flight-list/FlightList";

function Home() {
  return (
    <div>
      <FlightList />
      <FlightDetails />
      <div className="absolute inset-0 z-0">
        <SkyTrackMap />
      </div>
    </div>
  );
}

export default Home;
