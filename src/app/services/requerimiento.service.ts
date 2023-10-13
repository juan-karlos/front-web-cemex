import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {permiso} from '../components/models/tablas'
@Injectable({
  providedIn: 'root'
})
export class RequerimientoService {
  URL_API = 'http://192.168.100.62:3200/api/requerimiento/'
  Permiso:permiso[]=[];

  PermisoSelect :permiso={
    id_requerimiento: 0,
    nom_req: '',
    peso: 0,
    impacto:'',
    siglas:''
    }
    constructor(private http:HttpClient) { }

    obtenerpermiso(){
      return this.http.get<permiso[]>(this.URL_API+"obtener");
    }
    insertar(requerimiento:permiso){
      return this.http.post(this.URL_API+"insertar",requerimiento);
    }
    obtenerPermisoPorId(id_requerimiento:number){
      const url = `${this.URL_API}${'reqIndivudual'}/${id_requerimiento}`; // Agrega el ID al final de la URL
      return this.http.get(url);
    }
}
