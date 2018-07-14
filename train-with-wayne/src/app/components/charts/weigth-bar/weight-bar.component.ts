import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-bar',
  templateUrl: './weight-bar.component.html'
})
export class WeightBarComponent {
  constructor() {}

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      animation: false,
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0,
            suggestedMax: 200
          }
        }
      ]
    }
  };
  public weightChartLabels: string[] = ['07/08', '07/09', '07/09'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartColor = [{ backgroundColor: 'green' }];

  public barChartData: any[] = [
    { data: [180, 178, 178], label: 'Weight' },
    { data: [150, 150, 150], label: 'Goal' }
  ];
}
