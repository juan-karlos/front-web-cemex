import { Component, OnInit } from '@angular/core';
import {UnidadOperativaService} from 'src/app/services/unidad-operativa.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-planmobilinactivo',
  templateUrl: './planmobilinactivo.component.html',
  styleUrls: ['./planmobilinactivo.component.css']
})
export class PlanmobilinactivoComponent {
  constructor(public unidad:UnidadOperativaService){}
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


}
