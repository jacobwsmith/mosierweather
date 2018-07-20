// Frontend Code Challenge - Converting a complex weather object to an array.

// Task: Create a method name "getForecast" that takes an object and returns an array of arrays
// Type: [[unixtime, windSpeed], [unixtime, windSpeed]]
// Example Response: [['1531432800', '6'], ['1531468800', '8']]

// Test Data
const TEST_DATA = {
  PeriodNameList: {
    '0': 'ThisAfternoon',
    '1': 'Tonight',
    '2': 'Friday',
    '3': 'FridayNight',
    '4': 'Saturday',
    '5': 'SaturdayNight',
    '6': 'Sunday'
  },
  ThisAfternoon: {
    periodName: 'This Afternoon',
    unixtime: ['1531432800', '1531436400', '1531440000'],
    windSpeed: ['6', '6', '7']
  },
  Tonight: {
    periodName: 'Tonight',
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
    windSpeed: ['7', '7', '6', '6', '6', '5', '5', '5', '5', '5', '5', '5']
  },
  Friday: {
    periodName: 'Friday',
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
    windSpeed: ['5', '5', '6', '6', '6', '9', '9', '9', '16', '16', '16', '21']
  },
  FridayNight: {
    periodName: 'Friday Night',
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
    windSpeed: ['21', '21', '21', '21', '21', '13', '13', '13', '13', '13', '13', '8']
  },
  Saturday: {
    periodName: 'Saturday',
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
    windSpeed: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '9']
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
    windSpeed: ['9', '9', '9', '9', '9', '7', '7', '7', '7', '7', '7', '6']
  },
  Sunday: {
    periodName: 'Sunday',
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
    windSpeed: ['6', '6', '6', '6', '6', '3', '3', '3', '3', '3', '3', '9']
  }
};

// Testing
{
  const result = getForecast(TEST_DATA);

  // Test First Array Values
  assert(result[0][0], '1531432800');
  assert(result[0][1], '6');

  // Test Middle Array Values
  assert(result[10][0], '1531468800');
  assert(result[10][1], '5');

  // Test Last Array Values
  assert(result[74][0], '1531699200');
  assert(result[74][1], '9');
  function assert(val1, val2) {
    const rv = val1 === val2;
    console.log(!rv ? `FAILED: ${val1} is suppose equal ${val2}` : 'PASS');
    return rv;
  }
}

// ==================
//  Jake's solution
// ==================
function getForecast(obj) {
  return Object.entries(obj.PeriodNameList)
    .map(([i, name]) => {
      return obj[name].unixtime.map((time, index) => {
        return [time, obj[name]['windSpeed'][index]];
      });
    })
    .reduce((a, b) => a.concat(b), []);
}
