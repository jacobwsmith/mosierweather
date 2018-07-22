(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"!chartOptions\"></app-loading>\n<highcharts-chart *ngIf=\"chartOptions\" [Highcharts]=\"Highcharts\" [options]=\"chartOptions\" constructorType=\"stockChart\" style=\"width: 100%; height: 650px; display: block;\"></highcharts-chart>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as Highcharts from 'highcharts';

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getSevenDayForecast().subscribe(function (_a) {
            var windSpeed = _a.windSpeed, temperature = _a.temperature;
            // console.log('res: ', JSON.stringify(windSpeed));
            _this.chartOptions = {
                title: {
                    text: 'Mosier Weather 7 Day Forecast',
                    align: 'left'
                },
                credits: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                time: {
                    timezoneOffset: 8 * 60
                },
                xAxis: {
                    // tickmarkPlacement: 'on',
                    // alternateGridColor: '#f7f7f7', // TODO: this needs to be sunrise/sunset
                    dateTimeLabelFormats: {
                        // second: '%Y-%m-%d<br/>%H:%M:%S',
                        // minute: '%Y-%m-%d<br/>%H:%M',
                        // hour: '%Y-%m-%d<br/>%H:%M',
                        day: '%Y<br/>%m-%d',
                        week: '%Y<br/>%m-%d',
                        month: '%Y-%m',
                        year: '%Y'
                    }
                },
                yAxis: [
                    {
                        labels: {
                            format: '{value} mph',
                            style: {
                                color: highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]
                            }
                        },
                        title: {
                            text: 'Wind',
                            style: {
                                color: highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]
                            }
                        },
                        height: 300,
                        // plotBands: [{
                        //   color: '#FCFFC5', // Color value
                        //   from: 15, // Start of the plot band
                        //   to: 40, // End of the plot band
                        //   label: {
                        //     text: 'Kiteable', // Content of the label.
                        //     align: 'left', // Positioning of the label.
                        //     // Default to center. x: +10 // Amount of pixels the label will be repositioned according to the alignment.
                        //   }
                        // }],
                        plotLines: [{
                                color: 'red',
                                dashStyle: 'dash',
                                value: 15,
                                width: 2,
                            }],
                        minRange: 20
                    },
                    {
                        labels: {
                            format: '{value} F',
                            style: {
                                color: highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[2]
                            }
                        },
                        title: {
                            text: 'Temperature',
                            style: {
                                color: highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[2]
                            }
                        },
                        top: 400,
                        height: 100,
                        offset: 0
                    }
                ],
                series: [
                    {
                        name: 'Wind',
                        data: windSpeed,
                        yAxis: 0,
                        // type: 'column'
                        color: highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]
                    },
                    {
                        name: 'Temperature',
                        data: temperature,
                        yAxis: 1,
                        // type: 'column'
                        color: highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[2]
                    }
                ]
            };
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getSevenDayForecast = function () {
        var _this = this;
        var url = 'https://forecast.weather.gov/MapClick.php?lat=45.6834528&lon=-121.397295&FcstType=digitalJSON';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // data = TEST_DATA;
            return {
                windSpeed: Object.entries(data.PeriodNameList)
                    .map(function (_a) {
                    var index = _a[0], name = _a[1];
                    return _this.extractItem(data[name], 'windSpeed');
                })
                    .reduce(function (a, b) { return a.concat(b); }, []),
                temperature: Object.entries(data.PeriodNameList)
                    .map(function (_a) {
                    var index = _a[0], name = _a[1];
                    return _this.extractItem(data[name], 'temperature');
                })
                    .reduce(function (a, b) { return a.concat(b); }, [])
            };
        }));
    };
    DashboardService.prototype.extractItem = function (item, type) {
        // console.log('item: ', item)
        return item.unixtime.map(function (time, index, arr) {
            // NOTE: unixtime is missing digits and windSpeed need to be a number
            return [+(time + '000'), +item[type][index]];
        });
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());

var TEST_ITEM = {
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
var TEST_DATA = {
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


/***/ }),

/***/ "./src/app/shared/loading/loading.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root-spinner {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.spinner {\n  -webkit-animation: rotator 1.4s linear infinite;\n          animation: rotator 1.4s linear infinite;\n}\n\n@-webkit-keyframes rotator {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n}\n\n@keyframes rotator {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n}\n\n.path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-animation: dash 1.4s ease-in-out infinite,\n  colors 5.6s ease-in-out infinite;\n          animation: dash 1.4s ease-in-out infinite,\n  colors 5.6s ease-in-out infinite;\n}\n\n@-webkit-keyframes colors {\n  0% {\n    stroke: #4285F4;\n  }\n  25% {\n    stroke: #DE3E35;\n  }\n  50% {\n    stroke: #F7C223;\n  }\n  75% {\n    stroke: #1B9A59;\n  }\n  100% {\n    stroke: #4285F4;\n  }\n}\n\n@keyframes colors {\n  0% {\n    stroke: #4285F4;\n  }\n  25% {\n    stroke: #DE3E35;\n  }\n  50% {\n    stroke: #F7C223;\n  }\n  75% {\n    stroke: #1B9A59;\n  }\n  100% {\n    stroke: #4285F4;\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dashoffset: 187;\n  }\n  50% {\n    stroke-dashoffset: 46.75;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 187;\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 187;\n  }\n  50% {\n    stroke-dashoffset: 46.75;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 187;\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg);\n  }\n}\n"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root-spinner\">\n  <svg class=\"spinner\" width=\"65px\" height=\"65px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\n  </svg>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/shared/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jacobsmith/github/mosierweather/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map