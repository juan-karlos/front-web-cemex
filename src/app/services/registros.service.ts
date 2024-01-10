import { Injectable } from '@angular/core';
import { registro } from '../components/models/tablas';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
// URL_API='http://192.168.100.62:3200/api/regi/'
URL_API='http://localhost:3200/api/regi'

Registro:registro[]=[];


Segmento:'' | undefined;
RegistroSelect :registro={
id_registro:0,
nombre_planta: '',
nombre_requerimiento:'',
fecha_inicio: new Date(),
fecha_vencimiento: new Date(),
observaciones: '',
estatus: '',
url:'',
validez_unica: true,
}

  constructor(private http:HttpClient) { }

  obtenerRegistro(){
    return this.http.get<registro[]>(this.URL_API);
  }
  
  insertar(Registro:registro){
    return this.http.post(this.URL_API+"insertar",Registro)
  }

  obtenerRegistroPorId(id_registro:number){
    const url = `${this.URL_API}${'/permiso'}/${id_registro}`; // Agrega el ID al final de la URL
    return this.http.get(url);
  }

  obtenerRiesgo(Segmento: any){
    return this.http.post(`${this.URL_API}/grafica`,Segmento);
  }



  async descarga(body: any): Promise<void> {
    try {
      // Realiza la solicitud de descarga
      const response: any = await this.http.post(`${this.URL_API}/descargas`, body, { responseType: 'blob' as 'json' }).toPromise();

      // Guarda el archivo ZIP
      const blob = new Blob([response], { type: 'application/zip' });
      saveAs(blob, 'descarga-masiva.zip');
    } catch (error) {
      console.error('Error al descargar el archivo', error);
      // Manejar el error según tus necesidades
    }
  }

}
