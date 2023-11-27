import { Injectable } from '@angular/core';
import { registro } from '../components/models/tablas';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
// URL_API='http://192.168.100.62:3200/api/regi/'
URL_API='http://localhost:3200/api/regi'

Registro:registro[]=[];


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
}
