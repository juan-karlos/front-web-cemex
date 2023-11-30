import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {
 URL_API='http://localhost:3200/api/logica';


  constructor(private http:HttpClient) { }

  
  getPesoTotal(nombre: string){
    return this.http.post<any>(`${this.URL_API}/pesoTotal`, { nombre });
  }

  getPesoParcial(estatu: string, nombre: string){
    return this.http.post<any>(`${this.URL_API}/pesoParcial`, { estatu, nombre });
  }

  getPesoEnPorcentajeEstatus(nomPlanta: string, estatus: string){
    return this.http.post<any>(`${this.URL_API}/pesoEnPorcentajeEstatus`, { nomPlanta, estatus });
  }

  getTotalPlantas(zona: string, segmento: string){
    return this.http.post<any>(`${this.URL_API}/totalPlantas`, { zona, segmento });
  }

  getSumTotalZonaSegmento(zona: string, segmento: string){
    return this.http.post<any>(`${this.URL_API}/sumTotalZonaSegmento`, { zona, segmento });
  }
}
