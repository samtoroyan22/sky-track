import { FlightCard } from "@/components/flight-list/FlightCard";
import { FLIGHTS } from "@/components/flight-list/flights.data";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useMemo } from "react";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearFavorites } from "@/store/favorites/favorites.slice";
import { Heading } from "@/components/custom-ui/Heading";
import { SubHeading } from "@/components/custom-ui/SubHeading";
import { motion } from "framer-motion";

export function Favorites() {
  const dispatch = useDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const flights = useMemo(
    () => FLIGHTS.filter((flight) => favorites.includes(flight.id)),
    [favorites]
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-8 relative z-0 min-h-screen">
      <div className="text-center mb-8">
        <Heading>Your Favorite Flights</Heading>
        <div className="mx-auto mt-2 w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-in slide-in-from-left duration-500" />
      </div>

      <SubHeading>
        Curate your dream journeys here. Explore your handpicked flights and
        plan your next adventure.
      </SubHeading>

      {flights.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="sticky top-2 z-10 mb-6 flex justify-end"
        >
          <button
            onClick={() => dispatch(clearFavorites())}
            className="px-5 py-2 text-xs font-medium text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-1 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-900 shadow-md"
            aria-label="Clear all favorite flights"
          >
            Clear Favorites
          </button>
        </motion.div>
      )}

      <div className="w-full">
        {flights.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-lg border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-xl"
          >
            <Heart className="w-12 h-12 text-neutral-400 dark:text-neutral-500 mx-auto mb-4 animate-pulse" />
            <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
              Your favorites list is empty
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-sm mx-auto">
              Add flights to your favorites to see them here.
            </p>
            <a
              href="/flights"
              className="mt-4 inline-block px-5 py-2 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-900"
            >
              Explore Flights
            </a>
          </motion.div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {flights.map((flight, index) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                <FlightCard flight={flight} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
