import { FlightDetails } from "../../components/flight-details/FlightDetails";
import { FlightList } from "../../components/flight-list/FlightList";

function Home() {
  return (
    <div>
      <FlightList />
      <FlightDetails />
    </div>
  );
}

export default Home;
