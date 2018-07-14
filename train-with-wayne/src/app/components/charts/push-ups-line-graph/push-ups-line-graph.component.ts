import { Component } from '@angular/core';

@Component({
  selector: 'app-push-ups-line-graph',
  templateUrl: './push-ups-line-graph.component.html'
})
export class PushUpsLineGraphComponent {
  constructor() {}

  public lineChartData: Array<any> = [
    { data: [50, 50, 50, 60], label: 'Goal', backgroundColor: 'red' },
    { data: [28, 48, 40], label: 'Achieved', backgroundColor: 'blue' }
  ];
  public lineChartLabels: Array<any> = ['7/8', '7/9', '7/10'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'red',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
}
