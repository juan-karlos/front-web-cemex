import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistrosService } from 'src/app/services/registros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
//debemos agregar el constructor y los elementos necesarios en el pra poder hacer nuestro ruteo de la forma correcta//
export class InicioComponent implements OnInit{
  constructor(private router: Router, private cookieService: CookieService, 
    public registro:RegistrosService, private sanitizer: DomSanitizer){}
  
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
  Nacional(){
    this.router.navigate(['nacional']);
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

  excelUrl: SafeUrl | undefined;
  descargando: boolean = false;

  descargarExcel(): void {
    this.descargando = true;
    this.registro.descargarExcel()
      .then((response: any) => {
        const blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        this.excelUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
        Swal.fire({
          icon: 'success',
          title: 'Descarga Exitosa',
          text: 'El archivo se ha descargado con éxito.',
        });
        this.verEnNavegador(); // Abrir en el navegador automáticamente después de la descarga
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al descargar: '+ error.message,
        });
      })
      .finally(() => {
        this.descargando = false;
      });
  }
  verEnNavegador(): void {
    if (this.excelUrl) {
      const url: string = this.sanitizer.sanitize(SecurityContext.URL, this.excelUrl) || '';
      const newWindow = window.open(url, '_blank');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.error('No se pudo abrir la ventana del navegador. Las ventanas emergentes pueden estar bloqueadas.');
        // Mostrar un mensaje al usuario indicando que las ventanas emergentes están bloqueadas
        alert('No se pudo abrir la ventana del navegador. Las ventanas emergentes pueden estar bloqueadas. Por favor, habilite las ventanas emergentes para este sitio.');
      }
    }
  }
}
