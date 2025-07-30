import airports from "./airports.json";

interface IAirportRaw {
  id: string;
  ident: string;
  type: string;
  name: string;
  latitude_deg: string;
  longitude_deg: string;
  elevation_ft: string;
  continent: string;
  iso_country: string;
  iso_region: string;
  municipality: string;
  scheduled_service: string;
  icao_code: string;
  iata_code: string;
  gps_code: string;
  local_code: string;
  home_link: string;
  wikipedia_link: string;
  keywords: string;
}

export function getAirportCoordinatesByICAO(icao?: string) {
  const airport = (airports as IAirportRaw[]).find(
    (a) => a.icao_code?.toLowerCase() === icao?.toLowerCase()
  );

  if (!airport || !airport.latitude_deg || !airport.longitude_deg) return null;

  return {
    lat: parseFloat(airport.latitude_deg),
    lon: parseFloat(airport.longitude_deg),
  };
}

export function getAirportAdditionalData(icao?: string) {
  const airport = (airports as IAirportRaw[]).find(
    (a) => a.icao_code?.toLowerCase() === icao?.toLowerCase()
  );
  return airport;
}
