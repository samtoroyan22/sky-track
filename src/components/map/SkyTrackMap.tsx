import Map, { Layer, Marker, Source } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapRef } from "react-map-gl/maplibre";
import { useCurrentFlight } from "@/hooks/useCurrentFlight";
import { useEffect, useMemo, useRef } from "react";
import { Plane } from "lucide-react";
import { FLIGHTS } from "../flight-list/flights.data";
import {
  createSplitGreatCircle,
  dashedStyle,
  solidStyle,
} from "./sky-track-map.utils";
import { useTheme } from "@/providers/theme/useTheme";

export function SkyTrackMap() {
  const { flight } = useCurrentFlight();

  const currnetFlightCoordinates = useMemo(
    () =>
      FLIGHTS.filter((f) => f.id !== flight?.id).map(
        (f) => f.currentLocation.coordinates
      ),
    [flight]
  );

  const ref = useRef<MapRef>(null);

  useEffect(() => {
    if (ref.current && flight) {
      ref.current.setCenter({
        lat: flight.currentLocation.coordinates[0],
        lng: flight.currentLocation.coordinates[1],
      });
      ref.current.setZoom(6);
    }
  }, [flight]);

  const [solidCoords, dashedCoords] = useMemo(() => {
    if (!flight?.from || !flight?.to || !flight.currentLocation)
      return [[], []];

    const all = [
      [flight.from.coordinates[1], flight.from.coordinates[0]],
      [
        flight.currentLocation.coordinates[1],
        flight.currentLocation.coordinates[0],
      ],
      [flight.to.coordinates[1], flight.to.coordinates[0]],
    ];

    return [all.slice(0, 2), all.slice(1)];
  }, [flight]);
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "LineString",
  //         coordinates: solidCoords,
  //       },
  //       properties: {},
  //     },
  //   ],
  // };

  // const dashedGeoJson: GeoJSON.FeatureCollection = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "LineString",
  //         coordinates: dashedCoords,
  //       },
  //       properties: {},
  //     },
  //   ],
  // };

  const { solidFeature, dashedFeature, snappedPoint, bearing } = useMemo(() => {
    if (!flight?.from || !flight?.to || !flight?.currentLocation) {
      return {
        solidFeature: null,
        dashedFeature: null,
        snappedPoint: null,
        bearing: 0,
      };
    }

    const from: [number, number] = [
      flight.from.coordinates[1],
      flight.from.coordinates[0],
    ];

    const to: [number, number] = [
      flight.to.coordinates[1],
      flight.to.coordinates[0],
    ];

    const current: [number, number] = [
      flight.currentLocation.coordinates[1],
      flight.currentLocation.coordinates[0],
    ];

    return createSplitGreatCircle(from, to, current);
  }, [flight]);

  const initialLat = flight?.currentLocation?.coordinates?.[0] ?? 37.5;
  const initialLng = flight?.currentLocation?.coordinates?.[1] ?? -122.5;

  const { theme } = useTheme();

  return (
    <Map
      ref={ref}
      initialViewState={{
        latitude: initialLat,
        longitude: initialLng,
        zoom: 6,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={
        theme === "dark"
          ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
          : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      }
    >
      {solidCoords.length > 1 && solidFeature && (
        <Source
          id="route-solid"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [solidFeature],
          }}
        >
          <Layer {...solidStyle(theme)} />
        </Source>
      )}

      {dashedCoords.length > 1 && dashedFeature && (
        <Source
          id="route-dashed"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [dashedFeature],
          }}
        >
          <Layer {...dashedStyle(theme)} />
        </Source>
      )}

      {snappedPoint && (
        <Marker latitude={snappedPoint[1]} longitude={snappedPoint[0]}>
          <div
            style={{
              transform: `rotate(${bearing - 45}deg)`,
              transformOrigin: "center",
              transition: "transform 0.3s ease",
            }}
          >
            <Plane
              fill="currentColor"
              stroke=""
              size={26}
              className="dark:text-neutral-200 text-neutral-900"
            />
          </div>
        </Marker>
      )}

      {flight?.from?.coordinates?.length &&
        flight.from.coordinates.length > 1 && (
          <Marker
            latitude={flight.from.coordinates[0]}
            longitude={flight.from.coordinates[1]}
          />
        )}

      {flight?.to?.coordinates?.length && flight.to.coordinates.length > 1 && (
        <Marker
          latitude={flight.to.coordinates[0]}
          longitude={flight.to.coordinates[1]}
        />
      )}

      {!!currnetFlightCoordinates.length &&
        currnetFlightCoordinates.map((coordinate) => (
          <Marker
            key={coordinate.join(",")}
            latitude={coordinate[0]}
            longitude={coordinate[1]}
          >
            <Plane
              fill="#9b9b9b"
              stroke=""
              size={20}
              className="absolute -right-2 top-1/2 -translate-y-1/2"
            />
          </Marker>
        ))}
    </Map>
  );
}
