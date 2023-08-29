import { Injectable } from '@angular/core';
import { usuario } from '../components/models/tablas';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

URL_API ='http://localhost:3200/api/login/'
Usuarios:usuario[]=[]
ClienteSelect :usuario={
  correo:'',
  nombre:'',
  contraseña:''
}

  constructor( private http:HttpClient) { }
  obtenerUsuario(){
    return this.http.get<usuario[]>(this.URL_API);
  }
}
