import { Component, OnInit } from '@angular/core';
import {UnidadOperativaService} from 'src/app/services/unidad-operativa.service';
import { LogicaService } from 'src/app/services/logica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  constructor(public logica: LogicaService,public unidad:UnidadOperativaService,private router: Router){}
  filterPost ='';
  porcentajeCumplimiento = 0;
  itemId!: number;
  datos: any;
  FormRegistro: any;
  nombre_planta!: string
  segmento!: string
  zona!: string
  Estado!: string
  fija!: boolean;
  activo!: boolean;
  id_planta!: number;
  porcentajeCump!: number;

  ngOnInit(): void {
  
    this.obtenerplantas();

  }



obtener_planta_por_id(){
  this.itemId = 1;
      this.unidad.obtenerPlantaPorId(this.itemId).subscribe(objeto => {

        this.datos = objeto;

        this.nombre_planta = this.datos[0].nombre_planta;
        this.segmento = this.datos[0].segmento;
        this.zona = this.datos[0].zona;
        this.Estado = this.datos[0].Estado;
        this.fija = this.datos[0].fija;
        this.activo = this.datos[0].activo;
        this.id_planta = this.datos[0].id_planta;
        this.porcentajeCump = this.datos[0].porcentaje_cumplimiento;

        console.log(this.nombre_planta = this.datos[0].nombre_planta, this.datos[0].porcentaje_cumplimiento);
      });
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

  recortarTexto(cadena: string) {
    if (!cadena || cadena === "NaN" || cadena === "NULL") {
      return "0";
    }
    return cadena.slice(0, 5);
  }

}

