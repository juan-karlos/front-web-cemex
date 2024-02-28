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
  selector: 'app-graficas-industriales-sureste',
  templateUrl: './graficas-industriales-sureste.component.html',
  styleUrls: ['./graficas-industriales-sureste.component.css']
})
export class GraficasIndustrialesSuresteComponent implements OnInit {
 
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective> | undefined;

  @ViewChild('chart1') chart1: BaseChartDirective | undefined;
  @ViewChild('chart2') chart2: BaseChartDirective | undefined;
  @ViewChild('chart3') chart3: BaseChartDirective | undefined;

  zona: string = "Sureste";
  segmento: string = "Industriales";
  cumplimientomesanterior: number[] = new Array(4).fill(0);
  seg = {
    "segmento":"Industriales"
  }
  totalSureste: number = 0;
  

  constructor(private historialService: HistorialService,  private logicaService : LogicaService, private registroService: RegistrosService){}
  ngOnInit(): void {
    
    this.Graficarmesactual();
    this.GraficarMesAnterior();
    this.GraficarRiesgo(this.seg);
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
  labels: ['SURESTE'],
  datasets: [
    { data: [], label: this.getMesAnteriorLabel(), backgroundColor: '#B0E2FF' },
    { data: [], label: this.getMesActualLabel(), backgroundColor: '#49BBFC' },
  ],
};
public barChartData2: ChartData<'bar'> = {
  labels: ['SURESTE'],
  datasets: [
    { data: [], label: 'Fíjas', backgroundColor: '#B0E2FF' },
    { data: [], label: 'Móviles', backgroundColor: '#49BBFC' },
  ],
};

public stackedBarData: ChartData<'bar'> = {
  labels: ['SURESTE'],
  datasets: [
    { data: [], label: 'Clausura', backgroundColor: '#FF1B1B'},
    { data: [], label: 'Multa', backgroundColor: '#E5FF0E' },
    { data: [], label: 'Optimas', backgroundColor: '#32FF00'  },
    { data: [], label: 'Administrativos', backgroundColor: '#A9A9A9'  },
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
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}
private DatosVerdes(datos: any){
  
  const sur = datos[4].optimaspassur;
  this.totalSureste += sur;
  this.stackedBarData.datasets[2].data = [sur];
  this.actualizarGrafico();
}
private DatosRojos(datos: any){
  
  const sur = datos[4].clausuradassur;
  this.totalSureste += sur;
  this.stackedBarData.datasets[0].data = [sur];
  this.actualizarGrafico();
}
private DatosAmarillos(datos: any){
  
 
  const sur = datos[4].multaspassur;
  this.totalSureste += sur;
  this.stackedBarData.datasets[1].data = [ sur];
  this.actualizarGrafico();
}
private DatosGrices(datos: any){
 
  const sur = datos[4].administrativassur;
  this.totalSureste += sur;
  this.stackedBarData.datasets[3].data = [sur];
  this.actualizarGrafico();
}


private Graficarmesactual() {
  this.logicaService.getProcentajeCumplimietoZonasSegmentos().subscribe(
    (datos) => {
      // console.log('2222222 estos son los datos que me estadevolviendo el servicio de logica en el metodo de zonas', datos)
      this.actualizarGrafica1mesactualConDatos(datos);
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

  const sur = datos[2].Sureste;
  this.barChartData.datasets[1].data = [sur];
  this.actualizarGrafico();
}

actualizarGrafica1mesAnteriorConDatos(datos: any) {
  
  const surData = datos.find((item: any) => item.zona === 'Sureste');

  const sur = surData ? +surData.cumplimiento : 0;

  this.barChartData.datasets[0].data = [sur];
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
  this.stackedBarData.datasets[4].data =[this.totalSureste ]
  this.actualizarGrafico();
}

}


