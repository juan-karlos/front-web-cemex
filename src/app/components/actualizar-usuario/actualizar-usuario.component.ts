import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  editable: boolean = false;
  datos: any;
  itemId!: number;
  FormRegistro: any;
  user!: string
  apellidos!:string
  zona!: string
  correo!: string
  rol!:string
  id_usuario!: number;
  constructor(public usuario:UsuariosService,private FB: FormBuilder,
    private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      this.itemId = params['id_usuario'];
      this.usuario.obtenerUnUsuario(this.itemId).subscribe(objeto => {
         console.log('esto trae: ', objeto)
        this.datos = objeto;
       
        this.user = this.datos[0].nombre_usuario;
        this.apellidos = this.datos[0].apellidos;
        this.zona = this.datos[0].zona_asignada;
        this.rol = this.datos[0].rol;
        this.correo = this.datos[0].correo_electronico;
        this.id_usuario = this.datos[0].id_usuario;
      });
  })
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
      // ||
      // !this.usuario.ClienteSelect.user ||
      // !this.usuario.ClienteSelect.rol ||
      // !this.usuario.ClienteSelect.zona 
      
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
          confirmButtonText: 'Si, actualizar',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log('ESTO MANDA DE BODY: ', form.value)
            this.usuario.actualizar(form.value).subscribe(
              (res) => {
                console.log('RES: ',res)
                form.reset();
                swalWithBootstrapButtons.fire(
                        'Hecho',
                        'Usuario actualizado',
                        'success'
                      );
              },
              (error) => {
                console.log(error);
                swalWithBootstrapButtons.fire(
                  'Error',
                  'Hubo un error al actualizar: ' + error.error.message,
                  'error'
                );
              }
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'La actualización no se completo',
              'error'
            );
          }
        });
    }
  }
  
   
}
