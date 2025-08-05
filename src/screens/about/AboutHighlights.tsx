import { motion } from "framer-motion";
import { highlightsData } from "./data/highlights.data";

export function AboutHighlights() {
  return (
    <div className="grid grid-cols-3 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-5 sm:gap-4 xs:gap-3 mx-20 xl:mx-16 lg:mx-12 md:mx-8 sm:mx-4 xs:mx-2">
      {highlightsData.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-card p-6 xl:p-5 lg:p-4 sm:p-3 xs:p-2 rounded-xl shadow-lg"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-gradient-to-tl from-sky-600 to-cyan-500 rounded-full p-3 xl:p-2.5 sm:p-2 mb-4">
              <Icon className="w-10 h-10 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8 sm:w-7 sm:h-7 xs:w-6 xs:h-6 text-white" />
            </div>
            <h3 className="text-lg xl:text-base lg:text-sm font-semibold text-foreground mb-2 sm:mb-1">
              {item.title}
            </h3>
            <p className="text-sm xl:text-sm lg:text-xs sm:text-xs text-foreground/80">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
