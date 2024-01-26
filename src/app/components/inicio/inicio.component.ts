import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
//debemos agregar el constructor y los elementos necesarios en el pra poder hacer nuestro ruteo de la forma correcta//
export class InicioComponent implements OnInit{
  constructor(private router: Router, private cookieService: CookieService){}
  ngOnInit() {
  }
  //agregamos los metodos que amos a mandar a llamar desde nuestros botones//
  
  Norte(){
    this.router.navigate(['Zona-noreste']);
  }
  Sur(){
    this.router.navigate(['Zona-sureste']);
  }
  Centro(){
    this.router.navigate(['Zona-centro']);
  }
  Pacifico(){
    this.router.navigate(['Zona-pacifico']);
  }
  Constructores(){
    this.router.navigate(['constructores']);
  }
  cerrarSesion() {
    // Elimina la cookie access_token
    this.cookieService.delete('access_token', '/');

    // Redirige a la página de inicio de sesión
    this.router.navigate(['login']);
  }
}
