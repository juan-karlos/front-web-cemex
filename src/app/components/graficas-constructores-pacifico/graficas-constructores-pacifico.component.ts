import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { HistorialService } from 'src/app/services/historial.service';
import { LogicaService } from 'src/app/services/logica.service';
@Component({
  selector: 'app-graficas-constructores-pacifico',
  templateUrl: './graficas-constructores-pacifico.component.html',
  styleUrls: ['./graficas-constructores-pacifico.component.css']
})
export class GraficasConstructoresPacificoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  zona: string = "Pacífico";
  segmento: string = "Constructores";
  cumplimientomesanterior: number[] = new Array(4).fill(0);
  


  constructor(private router: Router, private historialService: HistorialService,  private logicaService : LogicaService){}
  ngOnInit(): void {
    
    this.Graficarmesactual();
    this.GraficarMesAnterior();
    this.Fijas();
    this.Moviles();
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
public barChartOptions2: ChartConfiguration['options'] = {
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
public barChartType2: ChartType = 'bar';
public barChartPlugins = [DataLabelsPlugin];
public barChartPlugins2 = [DataLabelsPlugin];
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
    { data: [34, 59, 56, 55, 40], label: 'Clausura', backgroundColor: '#FF1B1B'},
    { data: [ 40, 19, 26, 27, 34], label: 'Multa', backgroundColor: '#E5FF0E' },
    { data: [ 20, 19, 26, 27, 34], label: 'Optimas', backgroundColor: '#32FF00'  },
    { data: [ 10, 23, 6, 7, 3], label: 'No tramitables', backgroundColor: '#A9A9A9'  },
  ],
};



private Graficarmesactual() {
  this.logicaService.getProcentajeCumplimietoZonasSegmentos().subscribe(
    (datos) => {
      console.log('Esto se va a mes actual que es en tiempo real: ', datos);
      this.actualizarGrafica1mesactualConDatos(datos);
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}


GraficarMesAnterior() {
  const segmento = 'Constructores'; // Reemplaza 'tu_segmento' con el valor adecuado

  this.historialService.getMesPasado(segmento).subscribe(
    (datos) => {
     this.actualizarGrafica1mesAnteriorConDatos(datos);
    },
    (error) => {
      console.error('Error al obtener el porcentaje:', error);
    }
  );
}


actualizarGrafica1mesactualConDatos(datos: any) {
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  const pacifico = datos[1].Pacífico;
  const norte = datos[1].Noreste;
  const sur = datos[1].Sureste;
  const centro = datos[1].Centro;
  const nacional = ((pacifico+centro+sur+norte)/4);
  console.log('Estos son los datos quese deberian actualizar en el mes actual: ','nacional:',nacional,' centro: ',centro,' norte:', norte,' pacifico', pacifico,' sur:', sur);
  // Asigna los datos al conjunto de datos, 
  this.barChartData.datasets[1].data = [nacional, centro, norte, pacifico, sur];

  // Verifica si la gráfica se actualiza automáticamente al cambiar los datos
  if (this.chart) {

    this.chart.update();

  }

  
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


  const nacional = ((pacifico+centro+sur+norte)/4);
  console.log('Estos son los datos quese deberian actualizar en el mes anterior: ','nacional:',nacional,' centro: ',centro,' norte:', norte,' pacifico', pacifico,' sur:', sur);
  // Asigna los datos al conjunto de datos, 
  this.barChartData.datasets[0].data = [nacional, centro, norte, pacifico, sur];

  // Verifica si la gráfica se actualiza automáticamente al cambiar los datos
  if (this.chart) {
    this.chart.update();
  }

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
  const pacificoData = datos.find((item: any) => item.zona === 'Pacífico');
  const centroData = datos.find((item: any) => item.zona === 'Centro');
  const norteData = datos.find((item: any) => item.zona === 'Noreste');
  const surData = datos.find((item: any) => item.zona === 'Sureste');

  // Obtiene el valor de cumplimiento o establece en cero si no existe
  const pacifico = pacificoData ? +pacificoData.porcentaje_cumplimiento_promedio : 0;
  const centro = centroData ? +centroData.porcentaje_cumplimiento_promedio : 0;
  const norte = norteData ? +norteData.porcentaje_cumplimiento_promedio : 0;
  const sur = surData ? +surData.porcentaje_cumplimiento_promedio : 0;

  // Calcula el total (opcional, dependiendo de tus necesidades)
  const nacional = ((pacifico + centro + sur + norte)/4);

  console.log('Estos son los datos que debe graficar en fijas:', nacional, pacifico, norte, sur, centro);

  // Asigna los datos al conjunto de datos
  this.barChartData2.datasets[0].data = [nacional, pacifico, norte, sur, centro];

  // Verifica si la gráfica se actualiza automáticamente al cambiar los datos
  if (this.chart) {
    console.log('Se actualizo fijas');
    this.chart.update();
  } else {
    console.log('this.chart es undefined. No se puede actualizar la gráfica.');
  }
}

private GraficarMoviles(datos: any) {
  // Busca el objeto con la zona específica
  const pacificoData = datos.find((item: any) => item.zona === 'Pacífico');
  const centroData = datos.find((item: any) => item.zona === 'Centro');
  const norteData = datos.find((item: any) => item.zona === 'Noreste');
  const surData = datos.find((item: any) => item.zona === 'Sureste');

  // Obtiene el valor de cumplimiento o establece en cero si no existe
  const pacifico = pacificoData ? +pacificoData.porcentaje_cumplimiento_promedio : 0;
  const centro = centroData ? +centroData.porcentaje_cumplimiento_promedio : 0;
  const norte = norteData ? +norteData.porcentaje_cumplimiento_promedio : 0;
  const sur = surData ? +surData.porcentaje_cumplimiento_promedio : 0;

  // Calcula el total (opcional, dependiendo de tus necesidades)
  const nacional = ((pacifico + centro + sur + norte)/4);

  console.log('Estos son los datos que debe graficar en moviles:', nacional, pacifico, norte, sur, centro);

  // Asigna los datos al conjunto de datos
  this.barChartData2.datasets[1].data = [nacional, pacifico, norte, sur, centro];

  // Verifica si la gráfica se actualiza automáticamente al cambiar los datos
  if (this.chart) {
    console.log('Se actualizo moviles');
    this.chart.update();
  } else {
    console.log('this.chart es undefined. No se puede actualizar la gráfica.');
  }
}





esMismoMes(fecha1: Date, fecha2: Date): boolean {
  return fecha1.getFullYear() === fecha2.getFullYear() && fecha1.getMonth() === fecha2.getMonth();
}

}


