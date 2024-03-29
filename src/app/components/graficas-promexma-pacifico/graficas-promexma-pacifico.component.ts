import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { HistorialService } from 'src/app/services/historial.service';
import { LogicaService } from 'src/app/services/logica.service';
import { ViewChildren, QueryList } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
@Component({
  selector: 'app-graficas-promexma-pacifico',
  templateUrl: './graficas-promexma-pacifico.component.html',
  styleUrls: ['./graficas-promexma-pacifico.component.css']
})
export class GraficasPromexmaPacificoComponent implements OnInit {
 
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective> | undefined;

  @ViewChild('chart1') chart1: BaseChartDirective | undefined;
  @ViewChild('chart2') chart2: BaseChartDirective | undefined;
  @ViewChild('chart3') chart3: BaseChartDirective | undefined;

  zona: string = "Pacifico";
  segmento: string = "Promexma";
  cumplimientomesanterior: number[] = new Array(4).fill(0);
  seg = {
    "segmento":"Promexma"
  }
  totalPacifico: number = 0;

  constructor(private historialService: HistorialService,  private logicaService : LogicaService, private registroService: RegistrosService){}
  ngOnInit(): void {
    
    this.Graficarmesactual(this.body);
    this.GraficarMesAnterior();
    this.GraficarRiesgo(this.seg);
    this.DatosNoTramitable(this.body2);
    
  }
  ngAfterViewInit(): void {
   
  }

//Aqui comienzan los metodos para la graficación
public barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {
    },
    y: {
      min: 0,
      max: 100,

    },
  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {
      formatter: (value: any) => {
        // Asegúrate de que el valor sea un número antes de intentar formatearlo
        const numericValue = parseFloat(value);
        return !isNaN(numericValue) ? numericValue.toFixed(2) : 'N/A';
      },

    },
  },
};

public stackedBarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {stacked: true},
    y: {
      min: 0,
      max: 20,
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
  labels: ['PACIFICO'],
  datasets: [
    { data: [], label: this.getMesAnteriorLabel(), backgroundColor: '#B0E2FF' },
    { data: [], label: this.getMesActualLabel(), backgroundColor: '#49BBFC' },
  ],
};


public stackedBarData: ChartData<'bar'> = {
  labels: ['PACIFICO'],
  datasets: [
    { data: [], label: 'Clausura', backgroundColor: '#FF1B1B'},
    { data: [], label: 'Multa', backgroundColor: '#E5FF0E' },
    { data: [], label: 'Optimas', backgroundColor: '#32FF00'  },
    { data: [], label: 'No Tramitables', backgroundColor: '#A9A9A9'  },
    { data: [], label: '', backgroundColor: '#00FF0000'  },
  ],
};

private GraficarRiesgo(segmento:any){
  this.registroService.obtenerRiesgo(segmento).subscribe(
    (datos) => {
     console.log('Estos sol los datos que obtengo de RIESGO', datos)
     this.DatosVerdes(datos);
     this.DatosRojos(datos);
     this.DatosAmarillos(datos);
     this.DatosGrices(datos);
     this.DatosDeArriba();
     this.DatosOptimos();
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}
private DatosVerdes(datos: any){
 
  const pacifico = datos[3].optimaspas;
  this.totalPacifico += pacifico;
  this.totalOptimas += pacifico;
}
private DatosRojos(datos: any){
  
  const pacifico = datos[3].clausuradaspas;
  this.totalPacifico += pacifico;
   this.stackedBarData.datasets[0].data = [pacifico];
  this.actualizarGrafico();
}
private DatosAmarillos(datos: any){
 
  const pacifico = datos[3].multaspas;
  this.totalPacifico += pacifico;
  this.stackedBarData.datasets[1].data = [pacifico];
  this.actualizarGrafico();
}
private DatosGrices(datos: any){
 
  const pacifico = datos[3].administrativaspas;
  this.totalPacifico += pacifico;
  this.totalOptimas += pacifico;
}


private Graficarmesactual(body:any) {
  this.logicaService.getProcentajeCumplimietoZonasSegmentos2(body).subscribe(
    (datos) => {
      this.actualizarGrafica1mesactualConDatos(datos);
     console.log('DATOS QUE SE MANDAN A GRAFICAR MES ACTUAL', datos)
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}

GraficarMesAnterior() {
  
  this.historialService.getMesPasado(this.segmento).subscribe(
    (datos) => {
     this.actualizarGrafica1mesAnteriorConDatos(datos);
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}

actualizarGrafica1mesactualConDatos(datos: any) {
  // Asigna los datos al conjunto de datos, 
  const data = datos.zonaporcentaje;
  this.barChartData.datasets[1].data = [data];
  this.actualizarGrafico();
}


 body = {
    "nombrezona": this.zona,
    "segmento": this.segmento
  }


actualizarGrafica1mesAnteriorConDatos(datos: any) {
 
  const pacificoData = datos.find((item: any) => item.zona === 'Pacífico');
  
  const pacifico = pacificoData ? +pacificoData.cumplimiento : 0;
    this.barChartData.datasets[0].data = [pacifico];
  this.actualizarGrafico();
}

private getMesAnteriorLabel(): string {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);
  return currentDate.toLocaleString('default', { month: 'long' });
}

private getMesActualLabel(): string {
  return new Date().toLocaleString('default', { month: 'long' });
}


actualizarGrafico() {
  if (this.charts) {
    this.charts.forEach(chart => chart.chart?.update());
  }
}

esMismoMes(fecha1: Date, fecha2: Date): boolean {
  return fecha1.getFullYear() === fecha2.getFullYear() && fecha1.getMonth() === fecha2.getMonth();
}

private DatosDeArriba(){
  this.stackedBarData.datasets[4].data =[this.totalPacifico]
  this.actualizarGrafico();
}

totalOptimas: number = 0;

private DatosOptimos(){
  this.stackedBarData.datasets[2].data = [ this.totalOptimas];
  this.actualizarGrafico();
}

private DatosNoTramitable(body : any){
  this.logicaService.getDatosNoTramitables(body).subscribe(
    (datos) => {
     this.stackedBarData.datasets[3].data = [ datos[0].cantidad_plantas];
      this.actualizarGrafico();
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}
 body2 = {
    "zona": this.zona,
    "segmento": this.segmento
  }


}


