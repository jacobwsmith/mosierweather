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
    this.dashboardService.getSevenDayForecast().subscribe(res => {
      console.log('res: ', JSON.stringify(res));
      this.chartOptions = {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'Mosier Weather 7 Day Forecast',
          align: 'left'
        },
        xAxis: {
          // tickmarkPlacement: 'on',

          alternateGridColor: '#f7f7f7', // TODO: this needs to be sunrise/sunset
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
        yAxis: {
          // alternateGridColor: '#FDFFD5',
          labels: {
            format: '{value} mph'
          },

        },
        series: [
          {
            name: 'Wind',
            data: res
          }
          // {
          //   type: 'flags',
          //   data: [
          //     {
          //       x: 1531663200000,
          //       title: '1',
          //       text: 'Test Flag here'
          //     }
          //   ]
          // }
        ]
      };
    });
  }
}
