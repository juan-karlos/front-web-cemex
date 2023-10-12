import { Component, OnInit } from '@angular/core';
import {UnidadOperativaService} from 'src/app/services/unidad-operativa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  constructor(public unidad:UnidadOperativaService,private router: Router){}
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


  Actualizar(id: number) {
    this.router.navigate(['actualizar-planta', id]);
  }
}

