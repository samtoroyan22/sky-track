import type { LayerProps } from "react-map-gl/maplibre";

export const solidStyle: LayerProps = {
  id: "route-line",
  type: "line",
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": "#4daccc",
    "line-width": 2,
    "line-opacity": 1,
  },
};

export const dashedStyle: LayerProps = {
  id: "route-dashed",
  type: "line",
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": "#9b9b9b",
    "line-width": 2,
    "line-dasharray": [3, 4],
    "line-opacity": 0.5,
  },
};
