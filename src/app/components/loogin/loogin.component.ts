import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css']
})
export class LooginComponent implements OnInit{

 

  body={
    "correo":"",
    "password":"",
  }
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
      console.log('Esto me devuelve: ', res);
      // Aquí podrías redirigir a la vista de inicio si los datos son correctos
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
