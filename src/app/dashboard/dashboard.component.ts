import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';

// import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getSevenDayForecast().subscribe(({ windSpeed, temperature }) => {
      // console.log('res: ', JSON.stringify(windSpeed));

      const sunsetSunrise = this.dashboardService.getSunsetSunrise(windSpeed);

      this.chartOptions = {
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
          dateTimeLabelFormats: {
            day: '%Y<br/>%m-%d',
            week: '%Y<br/>%m-%d',
            month: '%Y-%m',
            year: '%Y'
          },
          // TODO: represents night time
          plotBands: sunsetSunrise,
        },
        yAxis: [
          {
            labels: {
              format: '{value} mph',
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            title: {
              text: 'Wind',
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            height: 300,
            plotLines: [
              {
                color: 'red', // Color value
                dashStyle: 'dash', // Style of the plot line. Default to solid
                value: 15, // Value of where the line will appear
                width: 2 // Width of the line
              }
            ],
            minRange: 20,
            min: 0
          },
          {
            labels: {
              format: '{value} F',
              style: {
                color: Highcharts.getOptions().colors[2]
              }
            },
            title: {
              text: 'Temperature',
              style: {
                color: Highcharts.getOptions().colors[2]
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
            type: 'area',
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                // [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')] // erroring out, hmmm!
                [1, 'white']
              ]
            },
          },
          {
            name: 'Temperature',
            data: temperature,
            yAxis: 1,
            // type: 'column'
            color: Highcharts.getOptions().colors[2]
          }
        ]
      };
    });
  }
}
