import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css']
})
export class LooginComponent implements OnInit{

constructor(private router: Router,private usuarios:UsuariosService){}
ngOnInit(){
  this.obtenerUsuario();
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
}
