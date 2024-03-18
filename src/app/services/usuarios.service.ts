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
  id_usuario:0,
  correo:'',
  user:'',
  apellidos:'',
  password:'',
  zona:'',
  rol:''
}

  constructor( private http:HttpClient) { }


  obtenerUsuario(){
    return this.http.get<usuario[]>(this.URL_API);
  }

  getUsuarios(){
    return this.http.get<usuario[]>(`${this.URL_API}usuarios`);
  }
  registrar(body:any){
    return this.http.post<usuario[]>(`${this.URL_API}verifica`, body);
  } 
  insertar(body:any){
    return this.http.post(this.URL_API+"verifica",body);
  }
  iniciarSesion(body:any) {
    // Enviar solicitud HTTP al backend para iniciar sesión (cambiado a método POST)
    return this.http.post<any>(`${this.URL_API}comparacion`, body);
  }
  loginAdmin(body:any) {
    // Enviar solicitud HTTP al backend para iniciar sesión (cambiado a método POST)
    return this.http.post<any>(`${this.URL_API}administrador`, body);
  }
  obtenerUnUsuario(id_usuario:number){
    const url = `${this.URL_API}${'conUsuarios'}/${id_usuario}`; 
    return this.http.get(url);
  }
  actualizar(body:any){
    const url = `${this.URL_API}${'actualusu'}/${body.id_usuario}`; 
    return this.http.put(url,body);
  }
  eliminar(id_usuario:number){
    const url = `${this.URL_API}${'eliminar'}/${id_usuario}`; 
    return this.http.delete(url);
  }
  OlvideContrasena(correo:any){
    const url = `${this.URL_API}${'actualcontra'}`; 
    return this.http.put(url,correo);
  }
}
