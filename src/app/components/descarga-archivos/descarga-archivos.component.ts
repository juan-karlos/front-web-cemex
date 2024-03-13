import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { RegistrosService } from 'src/app/services/registros.service';
import { HttpResponse } from '@angular/common/http';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-descarga-archivos',
  templateUrl: './descarga-archivos.component.html',
  styleUrls: ['./descarga-archivos.component.css']
})
export class DescargaArchivosComponent implements OnInit{
  arregloRequerimientos: string[] = [];
  requerimiento: string = "";
  rango1: string | null = null;
  rango2: string | null = null;
  zona: string ="";
  segmento: string ="";
  public fechaHabilitada = false; // Inicia deshabilitado
  // public checkboxActivado = false; 
  mostrar: boolean = false;

  constructor(public permiso: RequerimientoService,public registro: RegistrosService) {}
  ngOnInit(): void {
    this.obtenerpermisos();
  }

  onSubmit() {
    const bod = {
      requerimiento: this.requerimiento,
      zona: this.zona,
      segmento: this.segmento,
      rango1: this.rango1 ? moment(this.rango1).format('YYYY-MM-DD') : null,
      rango2: this.rango2 ? moment(this.rango2).format('YYYY-MM-DD') : null,
      banfech: this.fechaHabilitada
    };
  
    console.log('Esto es lo que se envía: ', bod);
  
    this.registro.descarga(bod).then((response: any) => {
      if (response instanceof Blob) {
        const blob = new Blob([response], { type: 'application/zip' });
  
        if (blob.size > 0) {
          // La descarga se realizó con éxito
          saveAs(blob, 'descarga-masiva.zip');
          Swal.fire({
            icon: 'success',
            title: 'Descarga Exitosa',
            text: 'El archivo se ha descargado con éxito.',
          });
        } else {
          // Mostrar mensaje de error si el archivo está vacío
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No hay archivos para descargar.',
          });
        }
      } else if (response === undefined || response === null) {
        // Mostrar mensaje de error si la respuesta es undefined o null
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al descargar el archivo.',
        });
      } else {
        // Mostrar mensaje de error si la respuesta no es un Blob
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al descargar el archivo. Respuesta inesperada.',
        });
      }
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
    if (!this.requerimiento || !this.zona || !this.segmento) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
      });
      return;
    } 
    this.onSubmit(); // Llamar a onSubmit después de la validación
  }



  obtenerpermisos() {
    this.permiso.obtenerpermiso().subscribe(
      (datos) => {
        this.permiso.Permiso = datos;
        this.arregloRequerimientos = datos.map((item: any) => item.nombre_requerimiento);
      },
      (err) => console.error(err)
    );
  }

  mostrarFechas() {
    this.mostrar = !this.mostrar;
  }
 
toggleDatepickers() {
  this.fechaHabilitada = !this.fechaHabilitada;
}
}