import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ZonaPasificoService } from 'src/app/services/zona-pasifico.service';
import { HistorialService } from 'src/app/services/historial.service';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-no-operativos-noreste',
  templateUrl: './no-operativos-noreste.component.html',
  styleUrls: ['./no-operativos-noreste.component.css']
})
export class NoOperativosNoresteComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(
    public perPlan: ZonaPasificoService,
    private historialService: HistorialService,
    private logicaService : LogicaService) { }
   
  zona: string = "Noreste";
  segmento: string = "Inmuebles no opertivos";
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
        min: 0,
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
        formatter: (value: any) => {
          // Asegúrate de que el valor sea un número antes de intentar formatearlo
          const numericValue = parseFloat(value);
          return !isNaN(numericValue) ? numericValue.toFixed(2) : 'N/A';
        },
      },
    },
  };

  
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
    this.obtenerNacional(this.seg);
    this.obtenerZonas(this.seg);
    this.obtenerPorcentajeZonaSegmentos();
  }

  obtenerHistorial(zona: string, segmento: string, PorcentajeEnTiempoReal: number) {
    this.historialService.getHistorialZonaSegmento(zona, segmento).subscribe(
      (datos) => {
       
        this.procesarDatosHistorial(datos, this.cumplimientoAnioActual, this.cumplimientoAnioAnterior, PorcentajeEnTiempoReal);
        this.actualizarGrafico();
      },
      (error) => {
        console.error('Error al obtener el historial:', error);
      }
    );
  }
 
  procesarDatosHistorial(datos: { [key: string]: any }, cumplimientoAnioActual: number[], cumplimientoAnioAnterior: number[], PorcentajeEnTiempoReal: number) {
    const arrayDeDatos = Object.values(datos);
    
    arrayDeDatos.forEach((dato: any) => {
      const fecha = new Date(dato.fecha);
      const mes = fecha.getMonth();

      if (fecha.getFullYear() === new Date().getFullYear()) {
        cumplimientoAnioActual[mes] = parseFloat(dato.cumplimiento);
    } else if (fecha.getFullYear() === new Date().getFullYear() - 1) {
        cumplimientoAnioAnterior[mes] = parseFloat(dato.cumplimiento);
    }
    });
    
    const mesActual = new Date().getMonth();
    cumplimientoAnioActual[mesActual] = PorcentajeEnTiempoReal;


    this.datoslineas.datasets[0].data = [...cumplimientoAnioAnterior];
    this.datoslineas.datasets[1].data = [...cumplimientoAnioActual];
  }

  actualizarGrafico() {
    if (this.chart) {
      this.chart.chart?.update();
    }
  }


  obtenerPorcentajeZonaSegmentos(){
    this.logicaService.getProcentajeCumplimietoZonasSegmentos().subscribe(
      
      (datos) => {
        console.log
        ('Esto me devuelve el obtener historial: ', datos);
       const PorcentajeEnTiempoReal =datos[3].Noreste;
       this.obtenerHistorial(this.zona, this.segmento, PorcentajeEnTiempoReal);
      },
      (error) => {
        console.error('Error al obtener el porcentaje:', error);
      }
    )
  }


  obtenerPorcentajeTotalActual(){
    this.logicaService.getProcentajeCumplimietoZonasSegmentos().subscribe(
      
      (datos) => {
        console.log
        ('Esto me devuelve el porcentaje de cumplimiento total: ', datos);
      //  const PorcentajeEnTiempoReal =datos[1].Pacífico
      //  this.obtenerHistorial(this.zona, this.segmento, PorcentajeEnTiempoReal);
      },
      (error) => {
        console.error('Error al obtener el porcentaje:', error);
      }
    )
  }

  obtenerNacional(segmento:any) {
    this.perPlan.conteonacional2(segmento).subscribe(
      (res) => {
        console.log
        ('Esto me devuelve el obtener nacional: ', res);
        this.perPlan.permiso_plan = res
      },
      (error) => {
        console.error('Error que arrja el obtener nacional:', error);
      }
    );
  }
 
  obtenerZonas(segmento:any) {
    this.perPlan.conteoZon2(segmento).subscribe(
      (res) => {
        console.log
        ('Esto me devuelve el obtener nacional: ', res);
        this.perPlan.zonasConteo = res
      },
      (error) => {
        console.error('Error que arrja el conteo por zonas:', error);
      }
    );
  }

  seg = {
    "segmento":"Inmuebles no opertivos"
  }
}
