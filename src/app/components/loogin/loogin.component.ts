import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css']
})
export class LooginComponent implements OnInit{

  
  correo: string = '';
  password: string = '';


constructor(private router: Router,private usuarios:UsuariosService){}

ngOnInit(){

}
obtenerUsuario(){
  this.usuarios.obtenerUsuario().subscribe(
    res=>{
      console.log(res);
    }
  )
}

IniciarSesion(){
  this.router.navigate(['inicio']);
}
Registrarse(){
  this.router.navigate(['registrar-usuario']);
}
}
