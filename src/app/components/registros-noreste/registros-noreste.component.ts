import { Component, OnInit } from '@angular/core';
import {RegistrosService} from 'src/app/services/registros.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-noreste',
  templateUrl: './registros-noreste.component.html',
  styleUrls: ['./registros-noreste.component.css']
})


export class RegistrosNoresteComponent implements OnInit{

  ngOnInit(): void {
    this.obtenerregistros();
  } 

  

  constructor(public registro:RegistrosService,private router: Router){}

  
  filterPost = '';
  selectedSegmento: string = '';
  zona: string = 'Noreste';
  // body: any = {
  //   zona: this.zona
  // };


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
  Actualizar(id: number) {
    this.router.navigate(['actualizar-registro', id]);
  }
  
  recortarTexto(cadena: string, longitud: number): string {
    if(cadena==null){
      return "fecha Unica"
    }
    return cadena.slice(0, longitud);
  }

 

  // obtenerregistros() {

  //   if (this.selectedSegmento) {
  //     this.body['segmento'] = this.selectedSegmento;
  //   }

  //   this.registro.obtenerRegistroZonaSegmento(this.body).subscribe(
  //     (res) => { 
  //       this.registro.Registro = res;
  //       console.log('Esto me devuelve los registros totales ', res);
  //     },
  //     err => console.error(err)
  //   );
  // }

  obtenerregistros() {
    if (this.selectedSegmento) { // Verifica si se ha seleccionado un segmento
      const body = {
        "zona": 'Noreste',
        "segmento": this.selectedSegmento // Agrega el segmento seleccionado al cuerpo de la solicitud
      };
  
      this.registro.obtenerRegistroZonaSegmento(body).subscribe(
        (res) => {
          this.registro.Registro = res;
          console.log('Esto me devuelve los registros totales ', res);
        },
        err => console.error(err)
      );
    } else {
      // Si no se ha seleccionado un segmento, solo busca registros basados en la zona
      const body = {
        "zona": "Noreste"
      };
      console.log('Esto es lo que esta mandadno body sin segmento: ', body);
      this.registro.obtenerRegistroZonaSegmento(body).subscribe(
        (res) => {
          this.registro.Registro = res;
          console.log('Esto me devuelve los registros totales ', res);
        },
        err => console.error(err)
      );
    }
  }

}

