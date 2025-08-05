import { Heading } from "@/components/custom-ui/Heading";
import { motion } from "framer-motion";
import { AboutHighlights } from "./AboutHighlights";

export function About() {
  return (
    <div className="m-10 sm:m-6 xs:m-4">
      <div className="text-center mb-8 sm:mb-6 xs:mb-4">
        <Heading>About Us</Heading>
      </div>

      <p className="text-xl 2xl:text-lg xl:text-base sm:text-sm xs:text-xs text-center mx-auto max-w-5xl text-foreground mt-7 sm:mt-5 xs:mt-4 leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-800">
        ✈️ <span className="font-bold">SkyTrack</span> — keeps you connected to
        the sky. Discover real-time flight data, explore destinations 🌍, and
        never miss a route that matters 🧭.
      </p>

      <motion.img
        src="/planes/about-airplane.png"
        alt="about-airplane"
        className="max-w-[60%] 2xl:max-w-[70%] xl:max-w-[75%] lg:max-w-[80%] md:max-w-[85%] sm:max-w-[90%] xs:max-w-full h-auto mx-auto mt-10 sm:mt-6"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 sm:mt-10 xs:mt-8"
      >
        <AboutHighlights />
      </motion.div>
    </div>
  );
}
