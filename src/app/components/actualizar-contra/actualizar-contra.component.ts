import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-contra',
  templateUrl: './actualizar-contra.component.html',
  styleUrls: ['./actualizar-contra.component.css']
})

export class ActualizarContraComponent implements OnInit {
  
  correo!: string;
  passnuevo!: string;
  password!: string;
 
  constructor(public usuario:UsuariosService,private FB: FormBuilder,
    private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
  
  }



  validacion(form: NgForm) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    });

    if (!form.valid ||
        !form.value.correo ||
        !form.value.password ||
        !form.value.passnuevo) {
      swalWithBootstrapButtons.fire(
        'Error',
        'Por favor, completa todos los campos antes de actualizar.',
        'error'
      );
    } else {
      swalWithBootstrapButtons.fire({
        title: 'Se actualizará la contraseña',
        text: 'Asegúrate de que los datos sean correctos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, actualizar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.usuario.actualizarContrasena(form.value).subscribe(
            (res) => {
              if (res === 'se actualizon con exito') {
                form.reset();
                swalWithBootstrapButtons.fire(
                  'Enviado',
                  'Se actualizó la contraseña.',
                  'success'
                );
              } else {
                swalWithBootstrapButtons.fire(
                  'Error',
                  'Datos incorrectos', 
                  'error'
                );
              }
            },
            (error) => {
              console.log(error);
              swalWithBootstrapButtons.fire(
                'Error',
                'Datos incorrectos',
                'error'
              );
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se actualizó la contraseña',
            'error'
          );
        }
      });
    }
  }

  
  togglePasswordVisibility() {
    this.mostrarContrasena = !this.mostrarContrasena;
    const inputElement = document.getElementById('validationCustom06') as HTMLInputElement;
    inputElement.type = this.mostrarContrasena ? 'text' : 'password';
    this.textoBoton = this.mostrarContrasena ? 'Ocultar Contraseña' : 'Mostrar Contraseña';
  }
  mostrarContrasena = false;
  textoBoton = 'Mostrar Contraseña';

  togglePasswordVisibility2() {
    this.mostrarContrasena2 = !this.mostrarContrasena2;
    const inputElement = document.getElementById('validationCustom07') as HTMLInputElement;
    inputElement.type = this.mostrarContrasena2 ? 'text' : 'password';
    this.textoBoton2 = this.mostrarContrasena2 ? 'Ocultar Contraseña' : 'Mostrar Contraseña';
  }
  mostrarContrasena2 = false;
  textoBoton2 = 'Mostrar Contraseña';
}


