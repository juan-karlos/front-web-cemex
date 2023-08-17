import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-riesgo-constructores',
  templateUrl: './riesgo-constructores.component.html',
  styleUrls: ['./riesgo-constructores.component.css']
})
export class RiesgoConstructoresComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  public Opciones: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    
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
  public Tipo: ChartType = 'pie';
  public barChartPlugins = [DataLabelsPlugin];
  
  public datosmes1: ChartData<'pie'> = {
    labels: ['CLAUSURAS', 'MULTAS', 'OPTIMAS', 'NO TRAMITABLES'],
    datasets: [
      {
        data: [133, 86, 52, 51],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#8463FF",
                "#6384FF"
            ]
      }
   
    ],
  };

}
