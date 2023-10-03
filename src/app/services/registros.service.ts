import { Injectable } from '@angular/core';
import { registro } from '../components/models/tablas';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
URL_API='http://localhost:2300/api/regi/'

Registro:registro[]=[];


RegistroSelect :registro={
id_planta: 0,
id_requerimiento:0,
observaciones: '',
estatus: '',
validez_unica: true,

}

  constructor(private http:HttpClient) { }

  obtenerRegistro(){
    return this.http.get<registro[]>(this.URL_API);
  }
  insertar(Registro:registro){
    return this.http.post(this.URL_API+"insertar",Registro)
  }
}
