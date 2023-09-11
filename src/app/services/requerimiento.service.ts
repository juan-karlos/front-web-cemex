import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {permiso} from '../components/models/tablas'
@Injectable({
  providedIn: 'root'
})
export class RequerimientoService {
  URL_API = 'http://192.168.100.62:3500/api/requerimiento/obtener'
  Permiso:permiso[]=[];
  
  PermisoSelect :permiso={
    id_requerimiento: 0,
    nombre_requerimiento: '',
    peso: 0,
    impacto:'',
    siglas:''
    }
    constructor(private http:HttpClient) { }

    obtenerpermiso(){
      return this.http.get<permiso[]>(this.URL_API);
    }
}
