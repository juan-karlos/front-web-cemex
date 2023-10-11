import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {planta} from '../components/models/tablas'

@Injectable({
  providedIn: 'root'
})
export class UnidadOperativaService {

constructor(private http:HttpClient) { }

// URL_API = 'http://192.168.100.62:3200/api/unidad/'
URL_API = 'http://localhost:2300/api/unidad/'


Plantas:planta[]=[];

PlantaSelect :planta={
  id_planta:0,
  nombre_planta:'',
  segmento:'',
  zona:'',
  estado:'',
  porcentaje_cumplimiento: 0,
  fija:true,
  activa: true
  }


  obtenerplanta(){
    return this.http.get<planta[]>(this.URL_API);
  }
  obtenerPlantaPorId(id_planta:number){
    const url = `${this.URL_API}${'uno'}/${id_planta}`; // Agrega el ID al final de la URL
    return this.http.get(url);
  }
  Actualizar(updateplanta:planta){
    return this.http.put(this.URL_API+"actualizar",updateplanta);
  }
  insertar(insplanta:planta){
    return this.http.post(this.URL_API+"insertar",insplanta);
  }
}
