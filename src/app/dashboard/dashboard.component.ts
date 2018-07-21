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
      console.log('res: ', JSON.stringify(windSpeed));
      this.chartOptions = {
        title: {
          text: 'Mosier Weather 7 Day Forecast',
          align: 'left'
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
                color: Highcharts.getOptions().colors[0]
              }
            },
            title: {
              text: 'Wind',
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            height: 300
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
            // type: 'column'
            color: Highcharts.getOptions().colors[0]
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
