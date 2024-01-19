import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {UsuariosService} from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css']
})
export class LooginComponent implements OnInit{

  mostrarContrasena = false;
  textoBoton = 'Mostrar Contraseña';
  body={
    "correo":"",
    "password":"",
  }
constructor(private router: Router,private usuarios:UsuariosService,private cookieService: CookieService){}

ngOnInit(){

}
togglePasswordVisibility() {
    this.mostrarContrasena = !this.mostrarContrasena;
    const inputElement = document.getElementById('exampleInputPassword1') as HTMLInputElement;
    inputElement.type = this.mostrarContrasena ? 'text' : 'password';
    
    // Cambiar el texto del botón
    this.textoBoton = this.mostrarContrasena ? 'Ocultar Contraseña' : 'Mostrar Contraseña';
  }

obtenerUsuario(){
  this.usuarios.obtenerUsuario().subscribe(
    res=>{
      console.log(res);
    }
  )
}


IniciarSesion() {
  // Validar campos vacíos
  if (!this.body.correo || !this.body.password) {
    // Muestra un mensaje de error si hay campos vacíos
    Swal.fire(
      'Campos Vacíos',
      'Por favor, completa todos los campos.',
      'error'
    );
    return; // Detiene la ejecución si hay campos vacíos
  }

  // Llama al servicio solo si los campos no están vacíos
  this.usuarios.iniciarSesion(this.body).subscribe(
    (res) => {
      // console.log('Esto me devuelve: ', res);
      // console.log('logueado');
      // Aquí podrías redirigir a la vista de inicio si los datos son correctos
      this.cookieService.set('access_token', res.access_token , 4, '/');
      this.router.navigate(['inicio']);
    },
    (error) => {
      Swal.fire(
        'Error',
        'Hubo un error: ' + error.error.message,
        'error'
      );
    }
  );
}
}
