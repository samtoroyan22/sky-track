import { FlightHeader } from "./FlightHeader";
import { FlightImage } from "./FlightImage";
import { FlightInformation } from "./FlightInformation";
import { FlightRoute } from "./FlightRoute";
import { FlightStatus } from "./FlightStatus";
import { FlightActions } from "./FlightActions";
import { FlightSchedule } from "./FlightSchedule";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrentFlight } from "@/hooks/useCurrentFlight";

export function FlightDetails() {
  const { flight } = useCurrentFlight();

  return (
    <AnimatePresence>
      {flight && (
        <>
          <motion.aside
            key={flight.id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-7 right-7 w-sm rounded-lg shadow-xl overflow-hidden dark:bg-black bg-white z-50
                       2xl:top-34 md:top-29.5 md:right-3 sm:top-27.5 
                       xs:top-38 xs:right-0 xs:w-full xs:h-full"
          >
            <FlightHeader flight={flight} />
            <FlightImage flight={flight} />

            <div className="p-3.5 overflow-y-auto max-h-full">
              <FlightRoute flight={flight} />
              <FlightStatus progress={flight.progress} />
              <FlightSchedule />
              <FlightInformation flight={flight} />
              <FlightActions
                onRoute={() => {}}
                onFollow={() => {}}
                onShare={() => {}}
                onMore={() => {}}
              />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
