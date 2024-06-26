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
  selector: 'app-graficas-constructores-centro',
  templateUrl: './graficas-constructores-centro.component.html',
  styleUrls: ['./graficas-constructores-centro.component.css']
})
export class GraficasConstructoresCentroComponent implements OnInit {
 
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective> | undefined;

  @ViewChild('chart1') chart1: BaseChartDirective | undefined;
  @ViewChild('chart2') chart2: BaseChartDirective | undefined;
  @ViewChild('chart3') chart3: BaseChartDirective | undefined;

  zona: string = "Centro";
  segmento: string = "Constructores";
  cumplimientomesanterior: number[] = new Array(4).fill(0);
  seg = {
    "segmento":"Constructores"
  }
  totalCentro: number = 0;
  totalOptimas: number = 0;

  constructor(private historialService: HistorialService,  private logicaService : LogicaService, private registroService: RegistrosService){}
  ngOnInit(): void {
    this.Graficarmesactual(this.body);
    this.GraficarMesAnterior();
    this.Fijas();
    this.Moviles();
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
      max: 70,
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
  labels: ['CENTRO'],
  datasets: [
    { data: [], label: this.getMesAnteriorLabel(), backgroundColor: '#B0E2FF' },
    { data: [], label: this.getMesActualLabel(), backgroundColor: '#49BBFC' },
  ],
};
public barChartData2: ChartData<'bar'> = {
  labels: ['CENTRO'],
  datasets: [
    { data: [], label: 'Fíjas', backgroundColor: '#B0E2FF' },
    { data: [], label: 'Móviles', backgroundColor: '#49BBFC' },
  ],
};

public stackedBarData: ChartData<'bar'> = {
  labels: ['CENTRO'],
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
 
  const centro = datos[1].optimascen;
  this.totalCentro += centro;
  this.totalOptimas += centro;
}
private DatosRojos(datos: any){
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
 
  const centro = datos[1].clausuradascen;
  this.totalCentro += centro;
  console.log('Estos son los datos que se iran a clausuradas: ',' centro: ',centro);
  // Asigna los datos al conjunto de datos, 
  this.stackedBarData.datasets[0].data = [ centro ];
  this.actualizarGrafico();
}
private DatosAmarillos(datos: any){
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  
  const centro = datos[1].multascen;
  this.totalCentro += centro;
  console.log('Estos son los datos que se iran a multas: ',' centro: ',centro,);
  // Asigna los datos al conjunto de datos, 
  this.stackedBarData.datasets[1].data = [ centro ];
  this.actualizarGrafico();
}
private DatosGrices(datos: any){
 
  const centro = datos[1].administrativascen;
  this.totalCentro += centro;
  this.totalOptimas += centro;
}
private DatosNoTramitable(body : any){
  this.logicaService.getDatosNoTramitables(body).subscribe(
    (datos) => {
      console.log('MI ENDPOINT ', datos)
      this.stackedBarData.datasets[3].data = [ datos[0].cantidad_plantas];
      this.actualizarGrafico();
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
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


 body = {
    "nombrezona": this.zona,
    "segmento": this.segmento
  }
  body2 = {
    "zona": this.zona,
    "segmento": this.segmento
  }

GraficarMesAnterior() {
  const segmento = 'Constructores'; // Reemplaza 'tu_segmento' con el valor adecuado

  this.historialService.getMesPasado(segmento).subscribe(
    (datos) => {
     this.actualizarGrafica1mesAnteriorConDatos(datos);
     console.log('DATOS DEL MES PASADO', datos)
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}

actualizarGrafica1mesactualConDatos(datos: any) {
  console.log('DATOS NUEVOS: ',datos)
  // Asigna los datos al conjunto de datos, 
  const data = datos.zonaporcentaje;
  this.barChartData.datasets[1].data = [data];
  this.actualizarGrafico();
}

actualizarGrafica1mesAnteriorConDatos(datos: any) {
  
  console.log('estos son los atosque se recben del mes pasado', datos);

  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
 
  const centroData = datos.find((item: any) => item.zona === 'Centro');
 

  // Obtiene el valor de cumplimiento o establece en cero si no existe
  
  const centro = centroData ? +centroData.cumplimiento : 0;
  
  console.log('Estos son los datos quese deberian actualizar en el mes anterior: ', datos);
  // Asigna los datos al conjunto de datos, 
  this.barChartData.datasets[0].data = [centro];
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

private Fijas() {
  this.logicaService.getFijas().subscribe(
    (datos) => {
      
      this.GraficarFijas(datos);
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}

private Moviles() {
  this.logicaService.getMoviles().subscribe(
    (datos) => {
     
      this.GraficarMoviles(datos);
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}

private GraficarFijas(datos: any) {
  // Busca el objeto con la zona específica
 
  const centroData = datos.find((item: any) => item.zona === 'Centro');
 

  // Obtiene el valor de cumplimiento o establece en cero si no existe

  const centro = centroData ? +centroData.porcentaje_cumplimiento_promedio : 0;

  console.log('Estos son los datos que debe graficar en fijas:', centro);

  // Asigna los datos al conjunto de datos
  this.barChartData2.datasets[0].data = [ centro];
  this.actualizarGrafico();
}
private GraficarMoviles(datos: any) {
  // Busca el objeto con la zona específica
  const centroData = datos.find((item: any) => item.zona === 'Centro');
 
  // Obtiene el valor de cumplimiento o establece en cero si no existe
 
  const centro = centroData ? +centroData.porcentaje_cumplimiento_promedio : 0;

  console.log('Estos son los datos que debe graficar en moviles:', centro);

  // Asigna los datos al conjunto de datos
  this.barChartData2.datasets[1].data = [ centro];
  this.actualizarGrafico();
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
  this.stackedBarData.datasets[4].data =[this.totalCentro]
  this.actualizarGrafico();
}

private DatosOptimos(){
  this.stackedBarData.datasets[2].data = [ this.totalOptimas];
  this.actualizarGrafico();
}
}


