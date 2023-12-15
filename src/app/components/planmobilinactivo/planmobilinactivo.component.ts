import { Component, OnInit } from '@angular/core';
import {UnidadOperativaService} from 'src/app/services/unidad-operativa.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-planmobilinactivo',
  templateUrl: './planmobilinactivo.component.html',
  styleUrls: ['./planmobilinactivo.component.css']
})
export class PlanmobilinactivoComponent {
  constructor(public unidad:UnidadOperativaService, private router: Router){}
  filterPost ='';

  ngOnInit(): void {
    // this.obtenerplantas();
    this.obtenerplantasfalse();

  }

  obtenerplantasfalse(){
    this.unidad.obtenermovilfalse().subscribe(
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
     return cadena.slice(0,5);
  }


}
