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
        // Ajusta la precisión de los números a dos decimales si el valor no es nulo o indefinido
        return value != null ? value.toFixed(2) : 'N/A';
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

public barChartPlugins = [DataLabelsPlugin];

public barChartData: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { data: [], label: this.getMesAnteriorLabel(), backgroundColor: '#0048FB' },
    { data: [], label: this.getMesActualLabel() },
  ],
};

public datosFijas: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { 
      data: [28, 48, 40, 19, 86], 
      label: this.getMesAnteriorLabel(), // Mes anterior
      backgroundColor: '#0048FB'
    },
    { 
      data: [65, 59, 80, 81, 56], 
      label: this.getMesActualLabel(),  // Mes actual
    },
  ],
};

public datosMoviles: ChartData<'bar'> = {
  labels: ['NACIONAL', 'CENTRO', 'NORESTE', 'PACIFICO', 'SURESTE'],
  datasets: [
    { 
      data: [28, 48, 40, 19, 86], 
      label: this.getMesAnteriorLabel(), // Mes anterior
      backgroundColor: '#0048FB'
    },
    { 
      data: [65, 59, 80, 81, 56], 
      label: this.getMesActualLabel(),  // Mes actual
    },
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


actualizarGrafica1mesactualConDatos(datos: any) {
  
  // Asegúrate de que las propiedades sean correctas y coincidan con las reales
  const pacifico = datos[1].Pacífico;
  const norte = datos[1].Noreste;
  const sur = datos[1].Sureste;
  const centro = datos[1].Centro;
  const nacional = ((pacifico+centro+sur+norte)/4);
  console.log('Estos son los datos quese deberian actualizar en el mes actual: ',nacional,pacifico, norte, sur, centro);
  // Asigna los datos al conjunto de datos, 
  this.barChartData.datasets[1].data = [nacional, pacifico, norte, sur, centro];

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



esMismoMes(fecha1: Date, fecha2: Date): boolean {
  return fecha1.getFullYear() === fecha2.getFullYear() && fecha1.getMonth() === fecha2.getMonth();
}

}


