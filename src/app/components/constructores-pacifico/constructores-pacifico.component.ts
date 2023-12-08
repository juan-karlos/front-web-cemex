import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ZonaPasificoService } from 'src/app/services/zona-pasifico.service';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-constructores-pacifico',
  templateUrl: './constructores-pacifico.component.html',
  styleUrls: ['./constructores-pacifico.component.css']
})
export class ConstructoresPacificoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(
    public perPlan: ZonaPasificoService,
    private router: Router,
    private historialService: HistorialService) { }

  zona: string = "Pacífico";
  segmento: string = "Constructores";
  cumplimientoAnioActual: number[] = new Array(12).fill(0);
  cumplimientoAnioAnterior: number[] = new Array(12).fill(0);

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
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
    scales: {
      x: {},
      y: {
        position: 'left',
        min: 60,
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

  public barChartType: ChartType = 'bar';
  public graficalineas: ChartType = 'line';
  public barChartPlugins = [DataLabelsPlugin];

  public datoslineas: ChartData<'line'> = {
    labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
    datasets: [
      { data: [], label: (new Date().getFullYear() - 1).toString() },
      { data: [], label: new Date().getFullYear().toString() },
    ],
  };

  ngOnInit(): void {
    this.obtenerNacional();
    this.ontenerZonas();
    this.obtenerHistorial(this.zona, this.segmento);
  }

  obtenerHistorial(zona: string, segmento: string) {
    this.historialService.getHistorialZonaSegmento(zona, segmento).subscribe(
      (datos) => {
        this.procesarDatosHistorial(datos, this.cumplimientoAnioActual, this.cumplimientoAnioAnterior);
        this.actualizarGrafico();
      },
      (error) => {
        console.error('Error al obtener el historial:', error);
      }
    );
  }

  procesarDatosHistorial(datos: { [key: string]: any }, cumplimientoAnioActual: number[], cumplimientoAnioAnterior: number[]) {
    const arrayDeDatos = Object.values(datos);

    arrayDeDatos.forEach((dato: any) => {
      const fecha = new Date(dato.fecha);
      const mes = fecha.getMonth();

      if (fecha.getFullYear() === new Date().getFullYear()) {
        cumplimientoAnioActual[mes] = parseFloat(dato.cumplimiento);
      } else {
        cumplimientoAnioAnterior[mes] = parseFloat(dato.cumplimiento);
      }
    });

    this.datoslineas.datasets[0].data = [...cumplimientoAnioAnterior];
    this.datoslineas.datasets[1].data = [...cumplimientoAnioActual];
  }

  actualizarGrafico() {
    if (this.chart) {
      this.chart.chart?.update();
    }
  }

  obtenerNacional() {
    this.perPlan.conteonacional().subscribe(
      res => this.perPlan.permiso_plan = res,
      err => console.log(err)
    );
  }

  ontenerZonas() {
    this.perPlan.conteoZon().subscribe(
      res => this.perPlan.zonasConteo = res,
      err => console.log(err)
    );
  }
}
