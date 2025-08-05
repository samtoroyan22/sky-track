import type { IHighlightItem } from "@/types/highlights.types";
import { MapPinned, Plane, Clock } from "lucide-react";

export const highlightsData: IHighlightItem[] = [
  {
    icon: Plane,
    title: "All Available Flights",
    description:
      "Find connections that suit your route and schedule — all in one place.",
  },
  {
    icon: MapPinned,
    title: "Live Route Tracking",
    description: "View detailed flight routes, departure and arrival points",
  },
  {
    icon: Clock,
    title: "Up-to-Date Information",
    description:
      "Stay informed with accurate flight data including delays, changes, and airline updates.",
  },
];
