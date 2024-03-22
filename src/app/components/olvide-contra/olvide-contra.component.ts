import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-olvide-contra',
  templateUrl: './olvide-contra.component.html',
  styleUrls: ['./olvide-contra.component.css']
})
export class OlvideContraComponent implements OnInit {
  
  correo!: string
 
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
  
    if (
      !form.valid 
      
    ) {
      // Muestra un mensaje de error si el formulario es inválido o algún campo está vacío
      swalWithBootstrapButtons.fire(
        'Error',
        'Por favor, completa todos los campos antes de actualizar.',
        'error'
      );
    } else {
      // Muestra la confirmación si el formulario es válido y los campos están llenos
      swalWithBootstrapButtons
        .fire({
          title: 'Se enviara la nueva contraseña',
          text: 'Asegúrate de que los datos sean correctos',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, enviar',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        })
        .then((result) => {
          console.log('esto mandamos: ', form.value);
          if (result.isConfirmed) {
            this.usuario.OlvideContrasena(form.value).subscribe(
              (res) => {
              console.log('respuesta: ', res)
              swalWithBootstrapButtons.fire(
                'Enviado',
                'Se mando el correo con la nueva cOntraseña: ',
                'success'
              );
              },
              (error) => {
                console.log(error);
                swalWithBootstrapButtons.fire(
                  'Error',
                  'Hubo un error al mandar el correo: ' + error.error.message,
                  'error'
                );
              }
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'No se envio la nueva contraseña',
              'error'
            );
          }
        });
    }
  }
  
   
}
