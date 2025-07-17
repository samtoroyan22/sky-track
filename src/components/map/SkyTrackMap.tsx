import Map, { Layer, Marker, Source } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapRef } from "react-map-gl/maplibre";
import { useCurrentFlight } from "@/hooks/useCurrentFlight";
import { useEffect, useMemo, useRef } from "react";
import { Plane } from "lucide-react";
import { FLIGHTS } from "../flight-list/flights.data";
import { dashedStyle, solidStyle } from "./sky-track-map.utils";

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

  const solidGeoJson: GeoJSON.FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: solidCoords,
        },
        properties: {},
      },
    ],
  };

  const dashedGeoJson: GeoJSON.FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: dashedCoords,
        },
        properties: {},
      },
    ],
  };

  const initialLat = flight?.currentLocation?.coordinates?.[0] ?? 37.5;
  const initialLng = flight?.currentLocation?.coordinates?.[1] ?? -122.5;

  return (
    <Map
      ref={ref}
      initialViewState={{
        latitude: initialLat,
        longitude: initialLng,
        zoom: 6,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    >
      {solidCoords.length > 1 && (
        <Source id="route-solid" type="geojson" data={solidGeoJson}>
          <Layer {...solidStyle} />
        </Source>
      )}

      {dashedCoords.length > 1 && (
        <Source id="route-dashed" type="geojson" data={dashedGeoJson}>
          <Layer {...dashedStyle} />
        </Source>
      )}

      {flight?.currentLocation.coordinates?.length &&
        flight.currentLocation.coordinates.length > 1 && (
          <Marker
            latitude={flight.currentLocation.coordinates[0]}
            longitude={flight.currentLocation.coordinates[1]}
          >
            <Plane
              fill="currentColor"
              stroke=""
              size={26}
              className="absolute -right-2 top-1/2 -translate-y-1/2 dark:text-neutral-200 text-neutral-900"
            />
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
