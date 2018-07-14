import { Component } from '@angular/core';

@Component({
  selector: 'app-body-polar-area',
  templateUrl: './body-polar-area.component.html'
})
export class BodyPolarAreaComponent {
  constructor() {}

  // PolarArea
  public polarAreaChartLabels = [
    'Bicepts',
    'Abs',
    'Chest',
    'Back',
    'Shoulders',
    'Tricepts',
    'Legs'
  ];
  public polarAreaChartColor = [
    {
      backgroundColor: [
        'red',
        'blue',
        'yello',
        'green',
        'pink',
        'blueviolet',
        'aqua'
      ]
    }
  ];
  public polarAreaChartData = [200, 100, 300, 100, 200, 200, 80];
  public polarAreaLegend = true;
  public polarAreaChartType = 'polarArea';
}
