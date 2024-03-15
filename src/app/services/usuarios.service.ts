import { Injectable } from '@angular/core';
import { usuario } from '../components/models/tablas';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

// URL_API ='http://86.38.204.102:3200/api/login/'
URL_API ='http://localhost:3200/api/login/'
Usuarios:usuario[]=[]

ClienteSelect :usuario={
  correo_electronico:'',
  nombre:'',
  apellidos:'',
  contraseña:'',
  zona_asignada:'',
  rol:''
}

  constructor( private http:HttpClient) { }


  obtenerUsuario(){
    return this.http.get<usuario[]>(this.URL_API);
  }

  getUsuarios(){
    return this.http.get<usuario[]>(`${this.URL_API}usuarios`);
  }
  iniciarSesion(body:any) {
    // Enviar solicitud HTTP al backend para iniciar sesión (cambiado a método POST)
    return this.http.post<any>(`${this.URL_API}comparacion`, body);
  }
}
