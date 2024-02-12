import { Component, OnInit } from '@angular/core';
import {RegistrosService} from 'src/app/services/registros.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-centro',
  templateUrl: './registros-centro.component.html',
  styleUrls: ['./registros-centro.component.css']
})
export class RegistrosCentroComponent implements OnInit{

  ngOnInit(): void {
    
  } 

  constructor(public registro:RegistrosService,private router: Router){}

  filterPost ='';
  selectedSegmento: string = '';
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

  obtenerregistros(){
    this.registro.obtenerRegistro().subscribe(
      
      res=>{
        this.registro.Registro=res
        console.log('esto me devuelve los registros totales ', res);
      },
      err=>console.error(err),
    
    )
   
  }

}
