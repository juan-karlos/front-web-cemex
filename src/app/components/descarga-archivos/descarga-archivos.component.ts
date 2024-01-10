import { Component } from '@angular/core';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { RegistrosService } from 'src/app/services/registros.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-descarga-archivos',
  templateUrl: './descarga-archivos.component.html',
  styleUrls: ['./descarga-archivos.component.css']
})
export class DescargaArchivosComponent {

  fecha_inicio: string | null = null;
  fecha_vencimiento: string | null = null;

  constructor(public registro: RegistrosService) {}

  onSubmit() {
  
    const bod={
      fecha1:moment(this.fecha_inicio).format('YYYY/MM/DD'),
      fecha2:moment(this.fecha_vencimiento).format('YYYY/MM/DD')
    }
    console.log('Esto es lo que manda: ', bod)
  
    this.registro.descarga(bod).then(() => {
      // La descarga se realizó con éxito
      Swal.fire({
        icon: 'success',
        title: 'Descarga Exitosa',
        text: 'El archivo se ha descargado con éxito.',
      });
    }).catch(error => {
      // Manejar el error en caso de fallo en la descarga
      console.error('Error en la descarga: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al descargar el archivo.',
      });
    });
  }

  

  validacion() {
    if (!this.fecha_inicio) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, elige una fecha de inicio.',
      });
      return;
    }

    if (!this.fecha_vencimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, elige una fecha de limite.',
      });
      return;
    }

    this.onSubmit(); // Llamar a onSubmit después de la validación
  }

}