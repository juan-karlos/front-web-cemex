import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {
 URL_API='http://localhost:3200/api/logica';


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
}
