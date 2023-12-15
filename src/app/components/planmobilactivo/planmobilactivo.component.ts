import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import { Router } from '@angular/router';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';

@Component({
  selector: 'app-planmobilactivo',
  templateUrl: './planmobilactivo.component.html',
  styleUrls: ['./planmobilactivo.component.css']
})
export class PlanmobilactivoComponent {
  constructor(public unidad:UnidadOperativaService,private router: Router){}
  filterPost ='';

  ngOnInit(): void {
    this.obtenerplantas();

  }

  obtenerplantas(){
    this.unidad.obtenermovil().subscribe(
      res=>this.unidad.Plantas=res,
      err=>console.error(err),
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
