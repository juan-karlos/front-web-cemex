import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { HistorialService } from 'src/app/services/historial.service';
import { LogicaService } from 'src/app/services/logica.service';
import { ViewChildren, QueryList } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';

@Component({
  selector: 'app-graficas-operaciones-nacional',
  templateUrl: './graficas-operaciones-nacional.component.html',
  styleUrls: ['./graficas-operaciones-nacional.component.css']
})

export class GraficasOperacionesNacionalComponent implements OnInit {
 
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective> | undefined;

  @ViewChild('chart1') chart1: BaseChartDirective | undefined;
  @ViewChild('chart2') chart2: BaseChartDirective | undefined;
  @ViewChild('chart3') chart3: BaseChartDirective | undefined;

  zona: string = "Centro";
  segmento: string = "Operaciones";
  segmento2: string = "Operaciones ";
  cumplimientomesanterior: number[] = new Array(4).fill(0);
  seg = {
    "segmento":"Operaciones"
  }
  totalNacional: number = 0;
  totalCentro: number = 0;
  totalNoreste: number = 0;
  totalPacifico: number = 0;
  totalSureste: number = 0;

  constructor(private historialService: HistorialService,private unidad : UnidadOperativaService,  private logicaService : LogicaService, private registroService: RegistrosService){}
  ngOnInit(): void {
    
    this.GetPorcentajes();

    this.GraficarMesAnterior();
    this.GraficarRiesgo(this.seg);
    this.getNoTramitablesNacional(this.seg);
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
      max: 40,
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
    { data: [], label: this.getMesAnteriorLabel(), backgroundColor: '#B0E2FF' },
    { data: [], label: this.getMesActualLabel(), backgroundColor: '#49BBFC' },
  ],
};
public barChartData2: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { data: [], label: 'Fíjas', backgroundColor: '#B0E2FF' },
    { data: [], label: 'Móviles', backgroundColor: '#49BBFC' },
  ],
};

public stackedBarData: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
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
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}
private DatosVerdes(datos: any){
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  const nacional = datos[0].optimasnas;
  const norte = datos[2].optimasnor;
  const sur = datos[4].optimaspassur;
  const centro = datos[1].optimascen;
  const pacifico = datos[3].optimaspas;
  this.totalNacional += nacional;
  this.totalCentro += centro;
  this.totalNoreste += norte;
  this.totalPacifico += pacifico;
  this.totalSureste += sur;
  console.log('Estos son los datos que se iran a optimas: ','nacional:',nacional,' centro: ',centro,' norte:', norte,' pacifico', pacifico,' sur:', sur);
  // Asigna los datos al conjunto de datos, 
  this.stackedBarData.datasets[2].data = [nacional, centro, norte, pacifico, sur];
  this.actualizarGrafico();
}
private DatosRojos(datos: any){
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  const nacional = datos[0].clausuradasnas;
  const norte = datos[2].clausuradasnor;
  const sur = datos[4].clausuradassur;
  const centro = datos[1].clausuradascen;
  const pacifico = datos[3].clausuradaspas;
  this.totalNacional += nacional;
  this.totalCentro += centro;
  this.totalNoreste += norte;
  this.totalPacifico += pacifico;
  this.totalSureste += sur;
  console.log('Estos son los datos que se iran a clausuradas: ','nacional:',nacional,' centro: ',centro,' norte:', norte,' pacifico', pacifico,' sur:', sur);
  // Asigna los datos al conjunto de datos, 
  this.stackedBarData.datasets[0].data = [nacional, centro, norte, pacifico, sur];
  this.actualizarGrafico();
}
private DatosAmarillos(datos: any){
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  const nacional = datos[0].multasnas;
  const norte = datos[2].multasnor;
  const sur = datos[4].multaspassur;
  const centro = datos[1].multascen;
  const pacifico = datos[3].multaspas;
  this.totalNacional += nacional;
  this.totalCentro += centro;
  this.totalNoreste += norte;
  this.totalPacifico += pacifico;
  this.totalSureste += sur;
  console.log('Estos son los datos que se iran a multas: ','nacional:',nacional,' centro: ',centro,' norte:', norte,' pacifico', pacifico,' sur:', sur);
  // Asigna los datos al conjunto de datos, 
  this.stackedBarData.datasets[1].data = [nacional, centro, norte, pacifico, sur];
  this.actualizarGrafico();
}
private DatosGrices(datos: any){
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  const nacional = datos[0].administrativasnas;
  const norte = datos[2].administrativasnor;
  const sur = datos[4].administrativassur;
  const centro = datos[1].administrativascen;
  const pacifico = datos[3].administrativaspas;
  this.totalNacional += nacional;
  this.totalCentro += centro;
  this.totalNoreste += norte;
  this.totalPacifico += pacifico;
  this.totalSureste += sur;
  console.log('Estos son los datos que se iran a grices: ','nacional:',nacional,' centro: ',centro,' norte:', norte,' pacifico', pacifico,' sur:', sur);
  // Asigna los datos al conjunto de datos, 
  this.stackedBarData.datasets[3].data = [nacional, centro, norte, pacifico, sur];
  this.actualizarGrafico();
}


private GetPorcentajes() {
  this.unidad.getProcentajeCumplimietoNacional().subscribe(
    (datos) => {
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

// actualizarGrafica1mesactualConDatos(datos: any) {
  
//   // Asegúrate de que las propiedades sean correctas y coincidan con las reales
//   const pacifico = datos[14].zona;
//   const norte = datos[12].zona;
//   const sur = datos[13].zona;
//   const centro = datos[15].zona;
//   const nacional = datos[15].nacional;
//   this.barChartData.datasets[1].data = [nacional, centro, norte, pacifico, sur];
//   this.actualizarGrafico();
// }

actualizarGrafica1mesactualConDatos(datos: any[]) {
  console.log('DATOS NUEVOS', datos);

  // Filtrar datos por segmento "Constructores"
  const datosConstructores = datos.filter(dato => dato.segmento === this.segmento2);

  // Filtrar los datos filtrados por nomzona
  const datosFiltrados = datosConstructores.filter(dato =>
    dato.nomzona === 'Nacional' ||
    dato.nomzona === 'Centro' ||
    dato.nomzona === 'Noreste' ||
    dato.nomzona === 'Pacífico' ||
    dato.nomzona === 'Sureste'
  );

  // Inicializar variables para almacenar los datos de las diferentes zonas
  let nacional: number | null = null;
  let centro: number | null = null;
  let noreste: number | null = null;
  let pacifico: number | null = null;
  let sureste: number | null = null;

  // Recorrer los datos filtrados para obtener los valores de las zonas específicas
  datosFiltrados.forEach(dato => {
    switch (dato.nomzona) {
      case 'Centro':
        centro = dato.zona;
        nacional = dato.nacional;
        break;
      case 'Noreste':
        noreste = dato.zona;
        break;
      case 'Pacífico':
        pacifico = dato.zona;
        break;
      case 'Sureste':
        sureste = dato.zona;
        break;
      default:
        break;
    }
  });

  console.log('Estos son los datos que se deberían actualizar en el mes actual:', 'nacional:', nacional, ' centro:', centro, ' noreste:', noreste, ' pacifico:', pacifico, ' sureste:', sureste);

  // Verificar si alguna de las variables sigue siendo null
  if (nacional === null || centro === null || noreste === null || pacifico === null || sureste === null) {
    console.log('Algunas variables no se han inicializado correctamente.');
    return; // Salir del método si hay variables sin inicializar
  }

  // Asignar los datos al conjunto de datos
  this.barChartData.datasets[1].data = [nacional, centro, noreste, pacifico, sureste];
  this.actualizarGrafico();
}




actualizarGrafica1mesAnteriorConDatos(datos: any) {
  
  console.log('estos son los atosque se recben del mes pasado', datos);

  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  const pacificoData = datos.find((item: any) => item.zona === 'Pacífico');
  const centroData = datos.find((item: any) => item.zona === 'Centro');
  const norteData = datos.find((item: any) => item.zona === 'Noreste');
  const surData = datos.find((item: any) => item.zona === 'Sureste');

  // Obtiene el valor de cumplimiento o establece en cero si no existe
  const pacifico = pacificoData ? +pacificoData.cumplimiento : 0;
  const centro = centroData ? +centroData.cumplimiento : 0;
  const norte = norteData ? +norteData.cumplimiento : 0;
  const sur = surData ? +surData.cumplimiento : 0;
  const nacionalData = datos.find((item: any) => item.zona === 'Nacional');
  const nacional = nacionalData ? +nacionalData.cumplimiento :0;
  console.log('Estos son los datos quese deberian actualizar en el mes anterior: ','nacional:',nacional,' centro: ',centro,' norte:', norte,' pacifico', pacifico,' sur:', sur);
  // Asigna los datos al conjunto de datos, 
  this.barChartData.datasets[0].data = [nacional, centro, norte, pacifico, sur];
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
  this.stackedBarData.datasets[4].data =[this.totalNacional,this.totalCentro,this.totalNoreste, this.totalPacifico,this.totalSureste ]
  this.actualizarGrafico();
 }

 
 private getNoTramitablesNacional(body : any){
  this.registroService.obtenerNoTramitablesNacional(body).subscribe(
    (datos) => {
     console.log('NOT QUE RECIBE', datos)
     this.GraficarNoTramitablesNacional(datos);
     this.actualizarGrafico();
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}

private GraficarNoTramitablesNacional(datos:any){
 
  const nacional = datos[0].nacional;
  const pacifico = datos[0].pacifico;
  const centro = datos[0].centro;
  const norte = datos[0].norte;
  const sur = datos[0].sur;
  console.log('DATOS NOT',nacional, centro, norte,pacifico, sur )
  this.stackedBarData.datasets[3].data = [nacional, centro, norte,pacifico, sur];
  this.actualizarGrafico();
}

}



