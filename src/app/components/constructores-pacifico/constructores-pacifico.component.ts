import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ZonaPasificoService } from 'src/app/services/zona-pasifico.service';
@Component({
  selector: 'app-constructores-pacifico',
  templateUrl: './constructores-pacifico.component.html',
  styleUrls: ['./constructores-pacifico.component.css']
})
export class ConstructoresPacificoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(public perPlan:ZonaPasificoService,private router: Router){}
  ngOnInit(): void {
    this.obtenerNacional();
    this.ontenerZonas();
  }
  //Aqui comienzan los metodos para la graficación
public barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.

  scales: {
    x: {},
    y: {
      min: 10,
      max: 100
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
    },
  },
};
public barChartOptionsLine: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {},
    y: {
      position: 'left',
      min: 60,
      max:100
    },

  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
    },
  },
};

public barChartType: ChartType = 'bar';
public graficalineas: ChartType = 'line';
public barChartPlugins = [DataLabelsPlugin];


public barChartData: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { data: [23, 59, 80, 81, 56], label: 'Mayo',  backgroundColor: '#0048FB'},
    { data: [28, 48, 40, 19, 86], label: 'Junio'  },
  ],
};
public barChartData2: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { data: [65, 59, 56, 55, 40], label: 'Mayo', backgroundColor: '#0048FB'},
    { data: [ 40, 19, 86, 27, 90], label: 'Junio' },
  ],
};
public datoslineas: ChartData<'line'> = {
  labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO'
  , 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
  datasets: [
    { data: [62, 60, 70, 70, 75, 77,78,74, 78, 80, 82, 83,], label: '2022'  },
    { data: [64, 71, 74, 74, 77,78,90], label: '2023'},
  ],
};

obtenerNacional(){
  this.perPlan.conteonacional().subscribe(
    res=>this.perPlan.permiso_plan=res,
    err=>console.log(err)
  )
}
ontenerZonas(){
  this.perPlan.conteoZon().subscribe(
    res=> this.perPlan.zonasConteo=res,
    err=>console.log(err)
  )
}

}



