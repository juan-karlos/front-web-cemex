import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { RegistrosService } from 'src/app/services/registros.service';
import { HttpResponse } from '@angular/common/http';
import { RequerimientoService } from 'src/app/services/requerimiento.service';

@Component({
  selector: 'app-descarga-archivos',
  templateUrl: './descarga-archivos.component.html',
  styleUrls: ['./descarga-archivos.component.css']
})
export class DescargaArchivosComponent implements OnInit{
  arregloRequerimientos: string[] = [];
  requerimiento: string = "";
  fecha_inicio: string | null = null;
  fecha_vencimiento: string | null = null;
  zona: string ="";
  segmento: string ="";

  constructor(public permiso: RequerimientoService,public registro: RegistrosService) {}
  ngOnInit(): void {
    this.obtenerpermisos();
  }

  onSubmit() {
  
    // const bod={
    //   fecha1:moment(this.fecha_inicio).format('YYYY/MM/DD'),
    //   fecha2:moment(this.fecha_vencimiento).format('YYYY/MM/DD')
    // }
    const bod = {
      requerimiento: this.requerimiento,
      zona: this.zona,
      segmento: this.segmento
    };

    console.log('Esto es lo que se envía: ', bod);

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

}