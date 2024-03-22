import { Component, OnInit, SecurityContext } from '@angular/core';
import {RegistrosService} from 'src/app/services/registros.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as saveAs from 'file-saver';
import { SafeUrl } from '@angular/platform-browser';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-registro-permiso',
  templateUrl: './registro-permiso.component.html',
  styleUrls: ['./registro-permiso.component.css']
})
export class RegistroPermisoComponent implements OnInit {
  constructor(public registro:RegistrosService,private router: Router, private sanitizer: DomSanitizer){}
  filterPost ='';
  excelUrl: SafeUrl | undefined;
  descargando: boolean = false;
  ngOnInit(): void {
    this.obtenerregistros();
  }
  abrirUrl(url: string) {
    // Aquí puedes implementar la lógica para abrir la URL, por ejemplo:
    window.open(url, '_blank');
  }

  formatearObservaciones(observaciones: string): string {
    if (!observaciones) {
      return '';
    }
    // Agregar saltos de línea manualmente
    return observaciones.replace(/(.{1,30})/g, "$1\n");
  }

  obtenerregistros(){
    this.registro.obtenerRegistro().subscribe(
      
      res=>{
        this.registro.Registro=res
        console.log('esto me devuelve los registros totales ', res);
      },
      err=>console.error(err),
    
    )
   
  }

  Actualizar(id: number) {
    this.router.navigate(['actualizar-registro', id]);
  }
  

  recortarTexto(cadena: string, longitud: number): string {
    if(cadena==null){
      return "fecha Unica"
    }
    return cadena.slice(0, longitud);
  }

  descargarExcel(): void {
    this.descargando = true;
    this.registro.descargarExcel()
      .then((response: any) => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0,10); // Formato YYYY-MM-DD
        const filename = 'EXCEL_' + formattedDate + '.xlsx'; // Nombre del archivo: EXCEL_YYYY-MM-DD.xlsx
        const blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.download = filename;
        anchor.href = url;
        anchor.click();
        Swal.fire({
          icon: 'success',
          title: 'Descarga Exitosa',
          text: 'El archivo se ha descargado con éxito.',
        });
        this.verEnNavegador(); // Abrir en el navegador automáticamente después de la descarga
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al descargar: '+ error.message,
        });
      })
      .finally(() => {
        this.descargando = false;
      });
  }

  verEnNavegador(): void {
    if (this.excelUrl) {
      const url: string = this.sanitizer.sanitize(SecurityContext.URL, this.excelUrl) || '';
      const newWindow = window.open(url, '_blank');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.error('No se pudo abrir la ventana del navegador. Las ventanas emergentes pueden estar bloqueadas.');
        // Mostrar un mensaje al usuario indicando que las ventanas emergentes están bloqueadas
        alert('No se pudo abrir la ventana del navegador. Las ventanas emergentes pueden estar bloqueadas. Por favor, habilite las ventanas emergentes para este sitio.');
      }
    }
  }
  
}


