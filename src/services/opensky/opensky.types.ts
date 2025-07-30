export interface IOpenskyState {
  icao24: string;
  callsign: string | null;
  originCountry: string;
  timePosition: number | null;
  lastContact: number;
  longitude: number | null;
  latitude: number | null;
  baroAltitude: number | null;
  onGround: boolean;
  velocity: number | null;
  heading: number | null;
  verticalRate: number | null;

  geoAltitude: number | null;
  squawk: string | null;
  spi: boolean;
  positionSource: number;
}

export interface IOpenskyResponse {
  time: number;
  states: (Array<
    [
      string,
      string | null,
      string,
      number | null,
      number | null,
      number | null,
      number | null,
      number | null,
      boolean,
      number | null,
      number | null,
      number | null,
      null,
      number | null,
      string | null,
      boolean,
      number,
    ]
  > | null)[];
}
