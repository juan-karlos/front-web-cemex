import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {


  constructor(public usuario:UsuariosService, private FB: FormBuilder){}


  insertar_planta(form:NgForm){
    this.usuario.insertar(form.value).subscribe(
      res=>{
        form.reset()
        // this.usuario.obtenerUsuario().subscribe(
        //   (res)=>{this.usuario.Usuarios=res},
        //   err=>console.log(err)

        // )
      }
    )
  }


  // validacion(form: NgForm) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //       cancelButton: 'btn btn-danger',
  //     },
  //     buttonsStyling: true
  //   });

  //   if (
  //     !form.valid||
  //     !this.usuario.ClienteSelect.user ||
  //     !this.usuario.ClienteSelect.correo ||
  //     !this.usuario.ClienteSelect.password ||
  //     !this.usuario.ClienteSelect.rol ||
  //     !this.usuario.ClienteSelect.zona 
      
  //   ) {
  //     // Muestra un mensaje de error si el formulario es inválido o algún campo está vacío
  //     swalWithBootstrapButtons.fire(
  //       'Error',
  //       'Por favor, completa todos los campos antes de registrar.',
  //       'error'
  //     );
  //   } else {
  //     // Muestra la confirmación si el formulario es válido y los campos están llenos
  //     swalWithBootstrapButtons
  //       .fire({
  //         title: '¿Los datos son correctos?',
  //         text: 'Asegúrate de que los datos sean correctos',
  //         icon: 'warning',
  //         showCancelButton: true,
  //         confirmButtonText: 'Si, mandar correo de confirmacion',
  //         cancelButtonText: 'Cancelar',
  //         reverseButtons: true
  //       })
  //       .then((result) => {
  //         if (result.isConfirmed) {
            
  //           this.usuario.insertar(form.value).subscribe(
  //             (res) => {
  //               form.reset();
  //               this.usuario.obtenerUsuario().subscribe(
  //                 (res) => {
  //                   this.usuario.Usuarios = res;
  //                   swalWithBootstrapButtons.fire(
  //                     'Hecho',
  //                     'El correo de confirmacion de registro fue enviado al usuario',
  //                     'success'
  //                   );
  //                 },
  //                 (err) => {
  //                   console.log(err);
  //                   swalWithBootstrapButtons.fire(
  //                     'Error',
  //                     'Hubo un error: ' + err.error.message,
  //                     'error'
  //                   );
  //                 }
  //               );
  //             },
  //             (error) => {
  //               console.log(error);
  //               swalWithBootstrapButtons.fire(
  //                 'Error',
  //                 'Hubo un error al registrar: ' + error.error.message,
  //                 'error'
  //               );
  //             }
  //           );
  //         } else if (result.dismiss === Swal.DismissReason.cancel) {
  //           swalWithBootstrapButtons.fire(
  //             'Cancelado',
  //             'El registro no se completo',
  //             'error'
  //           );
  //         }
  //       });
  //   }
  // }



  validacion(form: NgForm) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    });

    if (
      !form.valid||
      !this.usuario.ClienteSelect.user ||
      !this.usuario.ClienteSelect.correo ||
      !this.usuario.ClienteSelect.password ||
      !this.usuario.ClienteSelect.rol ||
      !this.usuario.ClienteSelect.zona 
      
    ) {
      // Muestra un mensaje de error si el formulario es inválido o algún campo está vacío
      swalWithBootstrapButtons.fire(
        'Error',
        'Por favor, completa todos los campos antes de registrar.',
        'error'
      );
    } else {
      // Muestra la confirmación si el formulario es válido y los campos están llenos
      swalWithBootstrapButtons
        .fire({
          title: '¿Los datos son correctos?',
          text: 'Asegúrate de que los datos sean correctos',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, mandar correo de confirmacion',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log('MANDA: ', form.value)
            this.usuario.insertar(form.value).subscribe(

              (res) => {
                console.log('RES: ',res)
                form.reset();
                swalWithBootstrapButtons.fire(
                        'Hecho',
                        'El correo de confirmacion de registro fue enviado al usuario',
                        'success'
                      );
                // this.usuario.obtenerUsuario().subscribe(
                //   (res) => {
                //     this.usuario.Usuarios = res;
                //     swalWithBootstrapButtons.fire(
                //       'Hecho',
                //       'El correo de confirmacion de registro fue enviado al usuario',
                //       'success'
                //     );
                //   },
                //   (err) => {
                //     console.log(err);
                //     swalWithBootstrapButtons.fire(
                //       'Error',
                //       'Hubo un error: ' + err.error.message,
                //       'error'
                //     );
                //   }
                // );
              },
              (error) => {
                console.log(error);
                swalWithBootstrapButtons.fire(
                  'Error',
                  'Hubo un error al registrar: ' + error.error.message,
                  'error'
                );
              }
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'El registro no se completo',
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
}