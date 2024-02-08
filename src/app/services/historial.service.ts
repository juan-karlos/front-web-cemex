import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  // URL_API='http://localhost:3200/api/historial';
  URL_API='http://86.38.204.102:3200/api/historial';

  constructor(private http:HttpClient) { }


   getHistorialZonaSegmento(zona: string, segmento: string) {
    // Enviar los datos en el cuerpo de la solicitud (en lugar de parámetros de consulta)
    const data = { zona, segmento };
    // Realizar la solicitud POST al servidor
    return this.http.post(`${this.URL_API}/ZonaSegmento`, data);
  }

  getMesPasado(segmento: string) {
    // Enviar los datos en el cuerpo de la solicitud (en lugar de parámetros de consulta)
    const data = { segmento: segmento };
    // Realizar la solicitud POST al servidor
    return this.http.post(`${this.URL_API}/ObtenerMesPasadoPorSegmento`, data);
  }
  

}
