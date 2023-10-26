import { Component, OnInit } from '@angular/core';
import {RegistrosService} from 'src/app/services/registros.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-permiso',
  templateUrl: './registro-permiso.component.html',
  styleUrls: ['./registro-permiso.component.css']
})
export class RegistroPermisoComponent implements OnInit {
  constructor(public registro:RegistrosService,private router: Router){}
  filterPost ='';
  ngOnInit(): void {
    this.obtenerregistros();
  }



  obtenerregistros(){
    this.registro.obtenerRegistro().subscribe(
      res=>this.registro.Registro=res,
      err=>console.error(err),
    )
  }


  Actualizar(id: number) {
    this.router.navigate(['actualizar-planta', id]);
  }

  recortarTexto(cadena: string, longitud: number): string {
    if(cadena==null){
      return "fecha Unica"
    }
    return cadena.slice(0, longitud);
  }
}


