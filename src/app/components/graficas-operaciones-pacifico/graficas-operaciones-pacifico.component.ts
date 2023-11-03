import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-graficas-operaciones-pacifico',
  templateUrl: './graficas-operaciones-pacifico.component.html',
  styleUrls: ['./graficas-operaciones-pacifico.component.css']
})
export class GraficasOperacionesPacificoComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor(private router: Router){}
  ngOnInit(): void {

  }


//Aqui comienzan los metodos para la graficación
public barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {
    },
    y: {
      min: 10,
      max: 100,

    },
  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {

    },
  },
};
public stackedBarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {stacked: true},
    y: {
      min: 10,
      max: 150,
      stacked: true
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {

    },
  },
};

public barChartType: ChartType = 'bar';

public barChartPlugins = [DataLabelsPlugin];
public barChartData: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { data: [65, 59, 80, 81, 56], label: 'Mayo',  backgroundColor: '#0048FB'},
    { data: [28, 48, 40, 19, 86], label: 'Junio'  },
  ],
};
public datosFijasMoviles: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { data: [65, 59, 80, 81, 56], label: 'Mayo',  backgroundColor: '#0048FB'},
    { data: [28, 48, 40, 19, 86], label: 'Junio'  },
  ],
};
public stackedBarData: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { data: [34, 59, 56, 55, 40], label: 'Clausura', backgroundColor: '#FF1B1B'},
    { data: [ 40, 19, 26, 27, 34], label: 'Multa', backgroundColor: '#E5FF0E' },
    { data: [ 40, 19, 26, 27, 34], label: 'Optimas', backgroundColor: '#32FF00'  },
    { data: [ 4, 9, 6, 7, 3], label: 'No tramitables', backgroundColor: '#A9A9A9'  },
  ],
};
}
