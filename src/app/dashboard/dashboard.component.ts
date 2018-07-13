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
  chartOptions = {
    title: {
      text: 'Dashboard'
    },
    series: [
      {
        name: 'Wind',
        data: []
      }
    ]
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getSevenDayForecast().subscribe(res => {
      console.log('res: ', JSON.stringify(res));
      this.chartOptions = {
        // rangeSelector: {
        //   selected: 1
        // },
        title: {
          text: 'Dashboard'
        },
        series: [
          {
            name: 'Wind',
            data: res // [[1468416600000, 1], [1470835800000, 2], [1531498700000, 10]],
            // tooltip: {
            //   valueDecimals: 2
            // }
          }
        ]
      };
    });
  }
}
