import type { IFlight } from "../../types/flight.types";

export const FLIGHTS: IFlight[] = [
  {
    logo: "/logos/turkish.svg",
    id: "TK143",
    airline: {
      name: "Turkish Airlines",
      country: "Turkey",
    },
    aircraftReg: "TC-JFP",
    from: {
      city: "Sofia",
      country: "Bulgaria",
      countryCode: "BG",
      timezone: "UTC +3",
      code: "SOF",
      coordinates: [42.6977, 23.3219],
    },
    to: {
      city: "Beijing",
      country: "China",
      countryCode: "CN",
      timezone: "UTC +8",
      code: "PEK",
      coordinates: [39.9042, 116.4074],
    },
    airplane: {
      image: "/planes/turkish.png",
      name: "Airbus A330",
    },
    colorGradient: ["#F4A3A3", "#FFD6D6"],
    route: {
      speed: 870,
      altitude: 10600,
    },
    progress: 75,
    currentLocation: {
      coordinates: [41.30095, 69.86465],
    },
  },
  {
    logo: "/logos/ryanair.svg",
    id: "RN1782",
    airline: {
      name: "Ryanair",
      country: "Ireland",
    },
    aircraftReg: "D-AISP",
    from: {
      city: "Dublin",
      country: "Ireland",
      countryCode: "IE",
      timezone: "UTC +1",
      code: "DUB",
      coordinates: [53.4213, -6.2701],
    },
    to: {
      city: "Larnaca",
      country: "Cyprus",
      countryCode: "CY",
      timezone: "UTC +3",
      code: "LCA",
      coordinates: [34.8751, 33.6249],
    },
    airplane: {
      image: "/planes/ryanair.png",
      name: "Boeing 737-800",
    },
    colorGradient: ["#A3C1E0", "#D1E4F7"],
    route: {
      speed: 840,
      altitude: 11200,
    },
    progress: 95,
    currentLocation: {
      coordinates: [44.1482, 13.6774],
    },
  },
  {
    logo: "/logos/s7.svg",
    id: "S7124",
    airline: {
      name: "S7 Airlines",
      country: "Russia",
    },
    aircraftReg: "RA-73415",
    from: {
      city: "Nice",
      country: "France",
      countryCode: "FR",
      timezone: "UTC +2",
      code: "NCE",
      coordinates: [43.6653, 7.215],
    },
    to: {
      city: "Tbilisi",
      country: "Georgia",
      countryCode: "GE",
      timezone: "UTC +4",
      code: "TBS",
      coordinates: [41.6692, 44.9547],
    },
    airplane: {
      image: "/planes/s7.png",
      name: "Airbus A320neo",
    },
    colorGradient: ["#D1F8C4", "#E8FFE2"],
    route: {
      speed: 860,
      altitude: 10900,
    },
    progress: 10,
    currentLocation: {
      coordinates: [42.66725, 26.08485],
    },
  },
  {
    logo: "/logos/swiss.svg",
    id: "LX318",
    airline: {
      name: "SWISS IAL",
      country: "Switzerland",
    },
    aircraftReg: "HB-JHK",
    from: {
      city: "Porto",
      country: "Portugal",
      countryCode: "PT",
      timezone: "UTC +1",
      code: "OPO",
      coordinates: [41.2481, -8.6814],
    },
    to: {
      city: "Baku",
      country: "Azerbaijan",
      countryCode: "AZ",
      timezone: "UTC +4",
      code: "GYD",
      coordinates: [40.4675, 50.0467],
    },
    airplane: {
      image: "/planes/swiss.png",
      name: "Airbus A220-300",
    },
    colorGradient: ["#F4A3A3", "#FFD6D6"],
    route: {
      speed: 830,
      altitude: 10700,
    },
    progress: 55,
    currentLocation: {
      coordinates: [40.8578, 20.68265],
    },
  },
  {
    logo: "/logos/lufthansa.svg",
    id: "LH401",
    airline: {
      name: "Lufthansa",
      country: "Germany",
    },
    aircraftReg: "D-AIXD",
    from: {
      city: "Burgas",
      country: "Bulgaria",
      countryCode: "BG",
      timezone: "UTC +3",
      code: "BOJ",
      coordinates: [42.5696, 27.5152],
    },
    to: {
      city: "Muscat",
      country: "Oman",
      countryCode: "OM",
      timezone: "UTC +4",
      code: "MCT",
      coordinates: [23.5933, 58.2844],
    },
    airplane: {
      image: "/planes/lufthansa.png",
      name: "Airbus A350-900",
    },
    colorGradient: ["#A8C6E6", "#DCE6F7"],
    route: {
      speed: 890,
      altitude: 11300,
    },
    progress: 25,
    currentLocation: {
      coordinates: [33.08145, 42.8998],
    },
  },
];
