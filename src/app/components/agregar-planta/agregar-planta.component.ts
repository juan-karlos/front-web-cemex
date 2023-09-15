import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';

@Component({
  selector: 'app-agregar-planta',
  templateUrl: './agregar-planta.component.html',
  styleUrls: ['./agregar-planta.component.css']
})
export class AgregarPlantaComponent { 

  constructor(public servisplanta:UnidadOperativaService){}

  insertar_planta(form:NgForm){
    this.servisplanta.insertar(form.value).subscribe(
      res=>{
        form.reset()
        this.servisplanta.obtenerplanta().subscribe(
          res=>this.servisplanta.Plantas=res,
          err=>console.log(err)
        )
      }
    )
  }

}
