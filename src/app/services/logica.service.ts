import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { riesgo } from '../components/models/tablas';
import { optimas } from '../components/models/tablas';
@Injectable({
  providedIn: 'root'
})
export class LogicaService {
 URL_API='http://localhost:3200/api/logica';
// URL_API='http://86.38.204.102:3200/api/logica';


 DatosRiesgoMulta:riesgo[]=[];
 DatosRiesgoClausura:riesgo[]=[];
 DatosRiesgoAdmin:riesgo[]=[];
 DatosRiesgoNoTramitables:riesgo[]=[];
 DatosOptimas:optimas[]=[];

 

  constructor(private http:HttpClient) { }


  getPesoEnPorcentajeEstatus(nomPlanta: string, estatus: string) {
    return this.http.get<any>(`${this.URL_API}/pesoEnPorcentajeEstatus?nomPlanta=${nomPlanta}&estatus=${estatus}`);
  }

  getTotalPlantas(zona: string, segmento: string) {
    return this.http.get<any>(`${this.URL_API}/totalPlantas?zona=${zona}&segmento=${segmento}`);
  }

  getSumTotalZonaSegmento(zona: string, segmento: string) {
    return this.http.get<any>(`${this.URL_API}/sumTotalZonaSegmento?zona=${zona}&segmento=${segmento}`);
  }
  
  getProcentajeCumplimietoZonasSegmentos(){
    return this.http.get<any>(`${this.URL_API}/zonas`);
  }
  getProcentajeCumplimietoZonasSegmentos2(body:any){
    return this.http.post<any>(`${this.URL_API}/estadistica`, body);
  }
   
  getFijas(){
    return this.http.get<any>(`${this.URL_API}/fijas`);
  }

  getMoviles(){
      return this.http.get<any>(`${this.URL_API}/moviles`);
  }

  getDatosRiesgo(cuerpo:any){
      return this.http.post<any>(`${this.URL_API}/vencidas`, cuerpo)
  }
  getDatosOptimas(cuerpo:any){
    return this.http.post<any>(`${this.URL_API}/vigentes`, cuerpo)
}

getDatosNoTramitables(cuerpo:any){
  return this.http.post<any>(`${this.URL_API}/NoTramitables`, cuerpo)
}
}
