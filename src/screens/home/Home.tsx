import { SkyTrackMap } from "@/components/map/SkyTrackMap";
import { FlightDetails } from "../../components/flight-details/FlightDetails";
import { FlightList } from "../../components/flight-list/FlightList";

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <SkyTrackMap />
      </div>
      <FlightList />
      <FlightDetails isFavorite={false} />
    </div>
  );
}

export default Home;
