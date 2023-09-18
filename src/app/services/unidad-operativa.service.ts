import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {planta} from '../components/models/tablas'
@Injectable({
  providedIn: 'root'
})
export class UnidadOperativaService {
URL_API = 'http://192.168.100.62:3200/api/unidad/'
Plantas:planta[]=[];

PlantaSelect :planta={
  id_planta:0,
  nombre_planta:'',
  segmento:'',
  zona:'',
  Estado:'',
  porcentaje_cumplimiento: 0,
  fija:true
  }
  constructor(private http:HttpClient) { }
  
  obtenerplanta(){
    return this.http.get<planta[]>(this.URL_API);
  }
  insertar(insplanta:planta){
    return this.http.post(this.URL_API+"insertar",insplanta);
  }
} 
