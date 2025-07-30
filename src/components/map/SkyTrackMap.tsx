import Map, { Layer, Marker, Source } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapRef } from "react-map-gl/maplibre";
import { useCurrentFlight } from "@/hooks/useCurrentFlight";
import { useEffect, useMemo, useRef } from "react";
import { Plane } from "lucide-react";
import {
  createSplitGreatCircle,
  dashedStyle,
  solidStyle,
} from "./sky-track-map.utils";
import { useTheme } from "@/providers/theme/useTheme";
import type { IOpenskyState } from "@/services/opensky/opensky.types";
import { getAirportCoordinatesByICAO } from "./get-airport-coordinates";

interface Props {
  flights: IOpenskyState[];
}

export function SkyTrackMap({ flights }: Props) {
  const { flight } = useCurrentFlight();

  const currnetFlightCoordinates = useMemo(() => {
    return flights
      .filter((f) => f.icao24 !== flight?.flight.icao)
      .filter((f) => f.latitude !== null && f.longitude !== null)
      .map((f) => [f.latitude!, f.longitude!] as [number, number]);
  }, [flights, flight]);

  const flightAdditionalData = useMemo(() => {
    return flights.find((f) => f.callsign === flight?.flight.icao);
  }, [flight?.flight.icao, flights]);

  const ref = useRef<MapRef>(null);

  useEffect(() => {
    if (
      ref.current &&
      flightAdditionalData &&
      flightAdditionalData.latitude &&
      flightAdditionalData.longitude
    ) {
      ref.current.setCenter({
        lat: flightAdditionalData.latitude,
        lng: flightAdditionalData.longitude,
      });
      ref.current.setZoom(6);
    }
  }, [flight, flightAdditionalData]);

  const coordinatesDeparture = useMemo(
    () => getAirportCoordinatesByICAO(flight?.departure.icao),
    [flight?.departure.icao]
  );

  const coordinatesArrival = useMemo(
    () => getAirportCoordinatesByICAO(flight?.arrival.icao),
    [flight?.arrival.icao]
  );

  const [solidCoords, dashedCoords] = useMemo(() => {
    if (!flightAdditionalData?.latitude || !flightAdditionalData?.longitude) {
      return [[], []];
    }

    const all = [
      [coordinatesDeparture?.lon, coordinatesDeparture?.lat],
      [flightAdditionalData.longitude, flightAdditionalData.latitude],
      [coordinatesArrival?.lon, coordinatesArrival?.lat],
    ];

    return [all.slice(0, 2), all.slice(1)];
  }, [
    coordinatesArrival?.lat,
    coordinatesArrival?.lon,
    coordinatesDeparture?.lat,
    coordinatesDeparture?.lon,
    flightAdditionalData?.latitude,
    flightAdditionalData?.longitude,
  ]);

  const { solidFeature, dashedFeature, snappedPoint, bearing } = useMemo(() => {
    if (
      !flight?.arrival.icao ||
      !flight?.departure.icao ||
      !flightAdditionalData?.latitude ||
      !flightAdditionalData?.longitude
    ) {
      return {
        solidFeature: null,
        dashedFeature: null,
        snappedPoint: null,
        bearing: 0,
      };
    }

    if (coordinatesDeparture === null || coordinatesArrival === null) {
      return {
        solidFeature: null,
        dashedFeature: null,
        snappedPoint: null,
        bearing: 0,
      };
    }

    const from: [number, number] = [
      coordinatesDeparture?.lon,
      coordinatesDeparture?.lat,
    ];

    const to: [number, number] = [
      coordinatesArrival?.lon,
      coordinatesArrival?.lat,
    ];

    const current: [number, number] = [
      flightAdditionalData.longitude,
      flightAdditionalData.latitude,
    ];

    return createSplitGreatCircle(from, to, current);
  }, [
    flight?.arrival.icao,
    flight?.departure.icao,
    flightAdditionalData?.latitude,
    flightAdditionalData?.longitude,
  ]);

  const initialLat = flightAdditionalData?.latitude ?? 37.5;
  const initialLng = flightAdditionalData?.longitude ?? -122.5;

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

      {coordinatesDeparture && (
        <Marker
          latitude={coordinatesDeparture.lat}
          longitude={coordinatesDeparture.lon}
        />
      )}

      {coordinatesArrival && (
        <Marker
          latitude={coordinatesArrival.lat}
          longitude={coordinatesArrival.lon}
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
