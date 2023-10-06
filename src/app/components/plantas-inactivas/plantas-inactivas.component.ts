import { Component, OnInit } from '@angular/core';
import {UnidadOperativaService} from 'src/app/services/unidad-operativa.service';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-plantas-inactivas',
  templateUrl: './plantas-inactivas.component.html',
  styleUrls: ['./plantas-inactivas.component.css']
})
export class PlantasInactivasComponent implements OnInit{

  constructor(public unidad:UnidadOperativaService){}
  filterPost ='';
  
  ngOnInit(): void {
    this.obtenerplantas();
    
  }


  obtenerplantas(){
    this.unidad.obtenerplanta().subscribe(
      res=>this.unidad.Plantas=res,
      err=>console.error(err),
      
    )
    
  }

}
