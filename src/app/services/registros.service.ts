import { Injectable } from '@angular/core';
import { doc, registro } from '../components/models/tablas';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
URL_API='http://86.38.204.102:3200/api/regi'
// URL_API='http://localhost:3200/api/regi'
Segmento:'' | undefined;
Registro:registro[]=[];
Doc: doc[]=[];


DocSelect : doc = {
  fecha_inicio : new Date,
  fecha_vencimiento : new Date,
  impacto : '',
  zona :'',
  segmento :'',
  url: '',
  nombre_doc:''

}




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
impacto:'',
peso:0,
porcentaje_cumplimiento: '',
segmento:'',
siglas:'',
zona:''
}

  constructor(private http:HttpClient) { }

  obtenerRegistro(){
    return this.http.get<registro[]>(this.URL_API);
  }
  
  insertar(Registro:registro){
    return this.http.post(this.URL_API+"/insertar",Registro)
  }

  obtenerRegistroPorId(id_registro:number){
    const url = `${this.URL_API}${'/permiso'}/${id_registro}`; // Agrega el ID al final de la URL
    return this.http.get(url);
  }

  obtenerRiesgo(Segmento: any){
    return this.http.post(`${this.URL_API}/grafica`,Segmento);
  }

  obtenerRegistroZonaSegmento(body : any){
    return this.http.post<registro[]>(`${this.URL_API}/regisSeg`,body);

  }

  obtenerNoTramitablesNacional(body : any){
    return this.http.post(`${this.URL_API}/granacio`,body);

  }

  async descarga(body: any): Promise<any> {
    try {
      // Realiza la solicitud de descarga
      const response: any = await this.http.post(`${this.URL_API}/descargas`, body, { responseType: 'blob' as 'json' }).toPromise();
      
      // Devolver la respuesta para que el componente pueda manejarla
      return response;
    } catch (err) {
      console.error('Error al descargar el archivo', err);
      // Relanzar el error para que el componente pueda manejarlo
      throw err;
    }
  }

  public descargarExcel(): Promise<any> {
    const url = `${this.URL_API}/exel`;
    return new Promise((resolve, reject) => {
      this.http.get(url, {
        responseType: 'blob',
        observe: 'response'
      }).subscribe(
        (response: any) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }



  obtenerDocumentosPorRegistro(id_requerimiento:number){
    const url = `${this.URL_API}${'/doc'}/${id_requerimiento}`; // Agrega el ID al final de la URL
    return this.http.get(url);
  }

}
