import { FlightHeader } from "./FlightHeader";
import { FlightImage } from "./FlightImage";
import { FlightInformation } from "./FlightInformation";
import { FlightRoute } from "./FlightRoute";
import { FlightStatus } from "./FlightStatus";
import { FlightActions } from "./FlightActions";
import { FlightSchedule } from "./FlightSchedule";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrentFlight } from "@/hooks/useCurrentFlight";
import { cn } from "@/lib/utils";

interface Props {
  isFavorite: boolean;
}

export function FlightDetails({ isFavorite }: Props) {
  const { flight } = useCurrentFlight();

  if (!flight) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={flight.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          isFavorite
            ? "fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            : "absolute top-0 right-7 z-50 md:right-3 xs:top-28 xs:right-0"
        )}
      >
        <motion.div
          initial={{
            y: isFavorite ? 50 : 0,
            x: isFavorite ? 0 : "100%",
            opacity: 0,
          }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{
            y: isFavorite ? 50 : 0,
            x: isFavorite ? 0 : "100%",
            opacity: 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "rounded-lg shadow-xl overflow-hidden dark:bg-black bg-white",
            isFavorite
              ? "w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto relative"
              : "w-sm md:w-[400px] h-full"
          )}
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
