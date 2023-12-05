import { Component, OnInit } from '@angular/core';
import {UnidadOperativaService} from 'src/app/services/unidad-operativa.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plantas-inactivas',
  templateUrl: './plantas-inactivas.component.html',
  styleUrls: ['./plantas-inactivas.component.css']
})
export class PlantasInactivasComponent implements OnInit{

  constructor(public unidad:UnidadOperativaService, private router: Router){}
  filterPost ='';

  ngOnInit(): void {
    // this.obtenerplantas();
    this.obtenerplantasfalse();

  }

  obtenerplantasfalse(){
    this.unidad.planActivaFlase().subscribe(
      res=>this.unidad.Plantas=res,
      err=>console.error(err)
    )
  }
  Actualizar(id: number) {
    this.router.navigate(['actualizar-planta', id]);
  }
  recortarTexto(cadena: string) {
    if(cadena=="NaN"){
      return "0"
    }
     return cadena
  }


  // obtenerplantas(){
  //   this.unidad.obtenerplanta().subscribe(
  //     res=>this.unidad.Plantas=res,
  //     err=>console.error(err)
  //   )
  // }

}
