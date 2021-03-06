import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RootObject } from './dashboard';
import { of } from 'rxjs';

// var SunCalc = require('suncalc');
import { getTimes } from 'suncalc';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getSevenDayForecast() {
    const url = 'https://forecast.weather.gov/MapClick.php?lat=45.6834528&lon=-121.397295&FcstType=digitalJSON';
    return this.http.get<RootObject>(url).pipe(
      map(data => {
        // data = TEST_DATA;
        return {
          windSpeed: Object.entries(data.PeriodNameList)
            .map(([index, name]) => {
              return this.extractItem(data[name], 'windSpeed');
            })
            .reduce((a, b) => a.concat(b), []),
          temperature: Object.entries(data.PeriodNameList)
            .map(([index, name]) => {
              return this.extractItem(data[name], 'temperature');
            })
            .reduce((a, b) => a.concat(b), [])
        };
      })
    );
  }

  private extractItem(item, type: 'windSpeed' | 'temperature') {
    // console.log('item: ', item)
    return item.unixtime.map((time, index, arr) => {
      // NOTE: unixtime is missing digits and windSpeed need to be a number
      return [+(time + '000'), +item[type][index]];
    });
  }

  getSunsetSunrise(arr) {
    return arr
      .filter(res => {
        // TODO: Test me. This could be an issue if looking at this from a
        // different timezone...?
        const hour = new Date(res[0]).getHours();
        return hour === 23;
      })
      .map(res => {
        // TODO: Test me. Seems to be some bugs around timezones in sunCalc package
        const { sunrise, sunset } = getTimes(res[0], 45.6834528, -121.397295);
        const to = sunrise;
        const from = sunset;
        return {
          from,
          to,
          color: '#ffffed', // Light yellow
          label: {
            text: 'Daylight',
            style: {
              color: 'orange',
              fontSize: '10px'
            }
          }
        };
      });
  }
}

const TEST_ITEM = {
  cloudAmount: ['1', '1', '1'],
  iconLink: ['skc.png', 'skc.png', 'skc.png'],
  periodName: 'This Afternoon',
  pop: ['0', '0', '0'],
  relativeHumidity: ['21', '21', '23'],
  temperature: ['94', '96', '96'],
  time: ['3 pm', '4 pm', '5 pm'],
  unixtime: ['1531432800', '1531436400', '1531440000'],
  weather: ['Sunny', 'Sunny', 'Sunny'],
  windDirection: ['40', '40', '310'],
  windDirectionCardinal: ['NE', 'NE', 'NW'],
  windGust: ['null', 'null', 'null'],
  windSpeed: ['6', '6', '7']
};

const TEST_DATA = {
  operationalMode: 'developmental',
  srsName: 'WGS 1984',
  creationDate: '2018-07-12T14:51:06-07:00',
  productionCenter: 'Pendleton, OR',
  credit: 'https://www.weather.gov/pdt',
  moreInformation: 'http://weather.gov',
  location: {
    latitude: '45.68',
    longitude: '-121.41',
    elevation: '331',
    locationType: 'land',
    areaDescription: 'Mosier OR and Mosier OR',
    'city-state': 'Mosier OR'
  },
  PeriodNumberList: {
    ThisAfternoon: '0',
    Tonight: '1',
    Friday: '2',
    FridayNight: '3',
    Saturday: '4',
    SaturdayNight: '5',
    Sunday: '6',
    SundayNight: '7',
    Monday: '8',
    MondayNight: '9',
    Tuesday: '10',
    TuesdayNight: '11',
    Wednesday: '12',
    WednesdayNight: '13'
  },
  PeriodNameList: {
    '0': 'ThisAfternoon',
    '1': 'Tonight',
    '2': 'Friday',
    '3': 'FridayNight',
    '4': 'Saturday',
    '5': 'SaturdayNight',
    '6': 'Sunday',
    '7': 'SundayNight',
    '8': 'Monday',
    '9': 'MondayNight',
    '10': 'Tuesday',
    '11': 'TuesdayNight',
    '12': 'Wednesday',
    '13': 'WednesdayNight'
  },
  ThisAfternoon: {
    periodName: 'This Afternoon',
    time: ['3 pm', '4 pm', '5 pm'],
    unixtime: ['1531432800', '1531436400', '1531440000'],
    windSpeed: ['6', '6', '7'],
    cloudAmount: ['1', '1', '1'],
    pop: ['0', '0', '0'],
    relativeHumidity: ['21', '21', '23'],
    windGust: ['null', 'null', 'null'],
    temperature: ['94', '96', '96'],
    windDirectionCardinal: ['NE', 'NE', 'NW'],
    windDirection: ['40', '40', '310'],
    iconLink: ['skc.png', 'skc.png', 'skc.png'],
    weather: ['Sunny', 'Sunny', 'Sunny']
  },
  Tonight: {
    periodName: 'Tonight',
    time: ['6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am', '1 am', '2 am', '3 am', '4 am', '5 am'],
    unixtime: [
      '1531443600',
      '1531447200',
      '1531450800',
      '1531454400',
      '1531458000',
      '1531461600',
      '1531465200',
      '1531468800',
      '1531472400',
      '1531476000',
      '1531479600',
      '1531483200'
    ],
    windSpeed: ['7', '7', '6', '6', '6', '5', '5', '5', '5', '5', '5', '5'],
    cloudAmount: ['1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['25', '28', '32', '35', '39', '45', '51', '58', '63', '67', '69', '70'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['94', '91', '87', '83', '79', '75', '72', '69', '66', '63', '61', '60'],
    windDirectionCardinal: ['NW', 'NW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'W'],
    windDirection: ['310', '310', '290', '290', '290', '300', '300', '300', '290', '290', '290', '280'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear'
    ]
  },
  Friday: {
    periodName: 'Friday',
    time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
    unixtime: [
      '1531486800',
      '1531490400',
      '1531494000',
      '1531497600',
      '1531501200',
      '1531504800',
      '1531508400',
      '1531512000',
      '1531515600',
      '1531519200',
      '1531522800',
      '1531526400'
    ],
    windSpeed: ['5', '5', '6', '6', '6', '9', '9', '9', '16', '16', '16', '21'],
    cloudAmount: ['1', '1', '1', '1', '1', '4', '4', '4', '4', '4', '4', '8'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['70', '69', '65', '59', '50', '42', '35', '30', '27', '25', '25', '26'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '22', '22', '22', '29'],
    temperature: ['61', '64', '68', '74', '79', '84', '88', '91', '93', '94', '94', '93'],
    windDirectionCardinal: ['W', 'W', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'W'],
    windDirection: ['280', '280', '290', '290', '290', '290', '290', '290', '290', '290', '290', '280'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'few.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny'
    ]
  },
  FridayNight: {
    periodName: 'Friday Night',
    time: ['6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am', '1 am', '2 am', '3 am', '4 am', '5 am'],
    unixtime: [
      '1531530000',
      '1531533600',
      '1531537200',
      '1531540800',
      '1531544400',
      '1531548000',
      '1531551600',
      '1531555200',
      '1531558800',
      '1531562400',
      '1531566000',
      '1531569600'
    ],
    windSpeed: ['21', '21', '21', '21', '21', '13', '13', '13', '13', '13', '13', '8'],
    cloudAmount: ['8', '8', '8', '8', '8', '10', '10', '10', '10', '10', '10', '7'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['29', '32', '36', '41', '47', '51', '55', '58', '60', '63', '65', '66'],
    windGust: ['29', '29', '29', '29', '29', '18', '18', '18', '18', '18', '18', 'null'],
    temperature: ['91', '87', '83', '80', '77', '74', '71', '69', '67', '65', '63', '62'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    windDirection: ['280', '280', '280', '280', '280', '280', '280', '280', '280', '280', '280', '280'],
    iconLink: [
      'few.png',
      'few.png',
      'few.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear'
    ]
  },
  Saturday: {
    periodName: 'Saturday',
    time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
    unixtime: [
      '1531573200',
      '1531576800',
      '1531580400',
      '1531584000',
      '1531587600',
      '1531591200',
      '1531594800',
      '1531598400',
      '1531602000',
      '1531605600',
      '1531609200',
      '1531612800'
    ],
    windSpeed: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '9'],
    cloudAmount: ['7', '7', '7', '7', '7', '6', '6', '6', '6', '6', '6', '5'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['65', '63', '58', '53', '47', '40', '35', '30', '27', '25', '25', '26'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['62', '63', '65', '70', '75', '80', '84', '87', '89', '90', '91', '91'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW'],
    windDirection: ['280', '280', '280', '280', '280', '290', '290', '290', '290', '290', '290', '290'],
    iconLink: [
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'skc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny'
    ]
  },
  SaturdayNight: {
    periodName: 'Saturday Night',
    time: ['6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am', '1 am', '2 am', '3 am', '4 am', '5 am'],
    unixtime: [
      '1531616400',
      '1531620000',
      '1531623600',
      '1531627200',
      '1531630800',
      '1531634400',
      '1531638000',
      '1531641600',
      '1531645200',
      '1531648800',
      '1531652400',
      '1531656000'
    ],
    windSpeed: ['9', '9', '9', '9', '9', '7', '7', '7', '7', '7', '7', '6'],
    cloudAmount: ['5', '5', '5', '5', '5', '4', '4', '4', '4', '4', '4', '2'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['29', '33', '37', '43', '48', '53', '57', '61', '64', '66', '67', '68'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['88', '85', '82', '79', '75', '72', '68', '65', '62', '61', '61', '61'],
    windDirectionCardinal: ['WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'NNW', 'NNW', 'NNW', 'NNW', 'NNW', 'NNW', 'WNW'],
    windDirection: ['290', '290', '290', '290', '290', '330', '330', '330', '330', '330', '330', '300'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear'
    ]
  },
  Sunday: {
    periodName: 'Sunday',
    time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
    unixtime: [
      '1531659600',
      '1531663200',
      '1531666800',
      '1531670400',
      '1531674000',
      '1531677600',
      '1531681200',
      '1531684800',
      '1531688400',
      '1531692000',
      '1531695600',
      '1531699200'
    ],
    windSpeed: ['6', '6', '6', '6', '6', '3', '3', '3', '3', '3', '3', '9'],
    cloudAmount: ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['68', '66', '60', '51', '41', '31', '26', '23', '22', '21', '20', '20'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['61', '62', '66', '73', '82', '90', '94', '96', '97', '98', '99', '99'],
    windDirectionCardinal: ['WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'W'],
    windDirection: ['300', '300', '300', '300', '300', '290', '290', '290', '290', '290', '290', '280'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny'
    ]
  },
  SundayNight: {
    periodName: 'Sunday Night',
    time: ['6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am', '1 am', '2 am', '3 am', '4 am', '5 am'],
    unixtime: [
      '1531702800',
      '1531706400',
      '1531710000',
      '1531713600',
      '1531717200',
      '1531720800',
      '1531724400',
      '1531728000',
      '1531731600',
      '1531735200',
      '1531738800',
      '1531742400'
    ],
    windSpeed: ['9', '9', '9', '9', '9', '3', '3', '3', '3', '3', '3', '6'],
    cloudAmount: ['2', '2', '2', '2', '2', '3', '3', '3', '3', '3', '3', '3'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['22', '25', '29', '33', '38', '44', '49', '55', '59', '63', '65', '65'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['97', '94', '91', '86', '82', '77', '73', '70', '67', '65', '64', '64'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    windDirection: ['280', '280', '280', '280', '280', '270', '270', '270', '270', '270', '270', '260'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear'
    ]
  },
  Monday: {
    periodName: 'Monday',
    time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
    unixtime: [
      '1531746000',
      '1531749600',
      '1531753200',
      '1531756800',
      '1531760400',
      '1531764000',
      '1531767600',
      '1531771200',
      '1531774800',
      '1531778400',
      '1531782000',
      '1531785600'
    ],
    windSpeed: ['6', '6', '6', '6', '6', '5', '5', '5', '5', '5', '5', '11'],
    cloudAmount: ['3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '4', '4'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['63', '59', '54', '48', '42', '36', '31', '27', '24', '22', '22', '23'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['66', '69', '73', '77', '81', '85', '89', '92', '94', '95', '96', '96'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    windDirection: ['260', '260', '260', '260', '260', '280', '280', '280', '280', '280', '280', '280'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny'
    ]
  },
  MondayNight: {
    periodName: 'Monday Night',
    time: ['6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am', '1 am', '2 am', '3 am', '4 am', '5 am'],
    unixtime: [
      '1531789200',
      '1531792800',
      '1531796400',
      '1531800000',
      '1531803600',
      '1531807200',
      '1531810800',
      '1531814400',
      '1531818000',
      '1531821600',
      '1531825200',
      '1531828800'
    ],
    windSpeed: ['11', '11', '11', '11', '11', '5', '5', '5', '5', '5', '5', '8'],
    cloudAmount: ['4', '4', '4', '4', '4', '1', '1', '1', '1', '1', '1', '1'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['27', '31', '37', '43', '50', '55', '60', '64', '67', '69', '70', '70'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['94', '92', '89', '85', '81', '77', '73', '69', '66', '64', '62', '62'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'W'],
    windDirection: ['280', '280', '280', '280', '280', '290', '290', '290', '290', '290', '290', '270'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear'
    ]
  },
  Tuesday: {
    periodName: 'Tuesday',
    time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
    unixtime: [
      '1531832400',
      '1531836000',
      '1531839600',
      '1531843200',
      '1531846800',
      '1531850400',
      '1531854000',
      '1531857600',
      '1531861200',
      '1531864800',
      '1531868400',
      '1531872000'
    ],
    windSpeed: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '13'],
    cloudAmount: ['1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['68', '65', '61', '56', '51', '46', '40', '34', '29', '25', '23', '23'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['63', '66', '69', '73', '78', '82', '86', '89', '92', '94', '95', '95'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    windDirection: ['270', '270', '270', '270', '270', '270', '270', '270', '270', '270', '270', '270'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png',
      'skc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny'
    ]
  },
  TuesdayNight: {
    periodName: 'Tuesday Night',
    time: ['6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am', '1 am', '2 am', '3 am', '4 am', '5 am'],
    unixtime: [
      '1531875600',
      '1531879200',
      '1531882800',
      '1531886400',
      '1531890000',
      '1531893600',
      '1531897200',
      '1531900800',
      '1531904400',
      '1531908000',
      '1531911600',
      '1531915200'
    ],
    windSpeed: ['13', '13', '13', '13', '13', '7', '7', '7', '7', '7', '7', '8'],
    cloudAmount: ['2', '2', '2', '2', '2', '17', '17', '17', '17', '17', '17', '17'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['25', '28', '33', '38', '44', '49', '55', '59', '63', '66', '67', '67'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['93', '91', '87', '84', '80', '76', '72', '69', '66', '64', '63', '63'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'W'],
    windDirection: ['270', '270', '270', '270', '270', '290', '290', '290', '290', '290', '290', '280'],
    iconLink: [
      'skc.png',
      'skc.png',
      'skc.png',
      'nskc.png',
      'nskc.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png',
      'nfew.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Clear',
      'Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear',
      'Mostly Clear'
    ]
  },
  Wednesday: {
    periodName: 'Wednesday',
    time: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
    unixtime: [
      '1531918800',
      '1531922400',
      '1531926000',
      '1531929600',
      '1531933200',
      '1531936800',
      '1531940400',
      '1531944000',
      '1531947600',
      '1531951200',
      '1531954800',
      '1531958400'
    ],
    windSpeed: ['8', '8', '8', '8', '8', '7', '7', '7', '7', '7', '7', '13'],
    cloudAmount: ['17', '17', '17', '17', '17', '13', '13', '13', '13', '13', '13', '13'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['64', '60', '55', '50', '44', '38', '33', '29', '26', '24', '23', '24'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['64', '67', '70', '73', '77', '81', '85', '88', '91', '93', '94', '94'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    windDirection: ['280', '280', '280', '280', '280', '280', '280', '280', '280', '280', '280', '280'],
    iconLink: [
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png',
      'few.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny',
      'Sunny'
    ]
  },
  WednesdayNight: {
    periodName: 'Wednesday Night',
    time: ['6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm', '12 am', '1 am', '2 am', '3 am', '4 am', '5 am'],
    unixtime: [
      '1531962000',
      '1531965600',
      '1531969200',
      '1531972800',
      '1531976400',
      '1531980000',
      '1531983600',
      '1531987200',
      '1531990800',
      '1531994400',
      '1531998000',
      '1532001600'
    ],
    windSpeed: ['13', '13', '13', '13', '13', '6', '6', '6', '6', '6', '6', '8'],
    cloudAmount: ['13', '13', '13', '13', '13', '5', '5', '5', '5', '5', '5', '5'],
    pop: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    relativeHumidity: ['27', '31', '36', '42', '49', '55', '61', '67', '71', '74', '75', '74'],
    windGust: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    temperature: ['92', '90', '86', '83', '79', '74', '71', '67', '65', '63', '62', '63'],
    windDirectionCardinal: ['W', 'W', 'W', 'W', 'W', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'WNW', 'W'],
    windDirection: ['280', '280', '280', '280', '280', '290', '290', '290', '290', '290', '290', '280'],
    iconLink: [
      'few.png',
      'few.png',
      'few.png',
      'nfew.png',
      'nfew.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png',
      'nskc.png'
    ],
    weather: [
      'Sunny',
      'Sunny',
      'Sunny',
      'Mostly Clear',
      'Mostly Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear',
      'Clear'
    ]
  }
};
