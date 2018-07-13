export interface RootObject {
  operationalMode: string;
  srsName: string;
  creationDate: string;
  productionCenter: string;
  credit: string;
  moreInformation: string;
  location: Location;
  PeriodNumberList: PeriodNumberList;
  PeriodNameList: PeriodNameList;
  LateAfternoon: LateAfternoon;
  Tonight: LateAfternoon;
  Friday: LateAfternoon;
  FridayNight: LateAfternoon;
  Saturday: LateAfternoon;
  SaturdayNight: LateAfternoon;
  Sunday: LateAfternoon;
  SundayNight: LateAfternoon;
  Monday: LateAfternoon;
  MondayNight: LateAfternoon;
  Tuesday: LateAfternoon;
  TuesdayNight: LateAfternoon;
  Wednesday: LateAfternoon;
  WednesdayNight: LateAfternoon;
}

interface LateAfternoon {
  periodName: string;
  time: string[];
  unixtime: string[];
  windSpeed: string[];
  cloudAmount: string[];
  pop: string[];
  relativeHumidity: string[];
  windGust: string[];
  temperature: string[];
  windDirectionCardinal: string[];
  windDirection: string[];
  iconLink: string[];
  weather: string[];
}

interface PeriodNameList {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
}

interface PeriodNumberList {
  LateAfternoon: string;
  Tonight: string;
  Friday: string;
  FridayNight: string;
  Saturday: string;
  SaturdayNight: string;
  Sunday: string;
  SundayNight: string;
  Monday: string;
  MondayNight: string;
  Tuesday: string;
  TuesdayNight: string;
  Wednesday: string;
  WednesdayNight: string;
}

interface Location {
  latitude: string;
  longitude: string;
  elevation: string;
  locationType: string;
  areaDescription: string;
  'city-state': string;
}
