import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {planta} from '../components/models/tablas'
import { segmentos } from '../components/models/tablas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadOperativaService {

constructor(private http:HttpClient) { }

URL_API = 'http://86.38.204.102:3200/api/unidad/'
// URL_API = 'http://localhost:3200/api/unidad/'


Plantas:planta[]=[];
Segmentos:segmentos[]=[]

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

  Segmento:segmentos={
    cadena_suministro:'',
    industriales:'',
    inmuebles_no_operativos:'',
    operaciones:'',
    transporte:'',
    Promexma:'',
    constructores:''
  }


  obtenerplanta(){
    return this.http.get<planta[]>(this.URL_API+"plantastrue");
  }
  planActivaFlase(){
    return this.http.get<planta[]>(this.URL_API+"plantasfalse")
  }

  obtenerPasifico(){
    return this.http.get<segmentos[]>(this.URL_API+"pasifico")
  }
  obtenerNorte(){
    return this.http.get<segmentos[]>(this.URL_API+"norte")
  }
  obtenerCentro(){
    return this.http.get<segmentos[]>(this.URL_API+"centro")
  }

  obtenerSur(){
    return this.http.get<segmentos[]>(this.URL_API+"sur")
  }
  obtenermovil(){
    return this.http.get<planta[]>(this.URL_API+"movilestrue")
  }
  obtenermovilfalse(){
    return this.http.get<planta[]>(this.URL_API+"movilesfalse")
  }
  getProcentajeCumplimietoNacional(){
    return this.http.get<any>(`${this.URL_API}/Nacional`);
  }
  ContNacional(){
    return this.http.get<any>(`${this.URL_API}/conteoNacional`);
  }

  obtenerPlantaPorId(id_planta:number){
    const url = `${this.URL_API}${'uno'}/${id_planta}`; // Agrega el ID al final de la URL
    return this.http.get(url);
  }

  Actualizar(Planta:planta){
    // console.log("Esto es cuando se recibe", Planta)
    const url = `${this.URL_API}${'actualizar'}/${Planta.id_planta}`;
    // return this.http.put(this.URL_API+"actualizar"+"/"+Planta.id_planta,Planta);
    return this.http.patch(url,Planta);
  }
  insertar(insplanta:planta){
    return this.http.post(this.URL_API+"insertar",insplanta);
  }

  // obtenerSugerenciasNombresPlantas(query: string): Observable<string[]> {
  //   const url = `${this.URL_API}sugerenciasNombresPlantas?query=${query}`;
  //   return this.http.get<string[]>(url);
  // }
}
