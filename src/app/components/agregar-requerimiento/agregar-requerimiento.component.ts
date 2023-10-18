import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-requerimiento',
  templateUrl: './agregar-requerimiento.component.html',
  styleUrls: ['./agregar-requerimiento.component.css']
})
export class AgregarRequerimientoComponent implements OnInit{

  constructor(public servicerequerimiento:RequerimientoService, private FB: FormBuilder){}

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
      // !form.value.nombre_planta ||
      // !form.value.segmento ||
      // !form.value.zona ||
      // !form.value.estado
    ) {
      // Muestra un mensaje de error si el formulario es inválido o algún campo está vacío
      swalWithBootstrapButtons.fire(
        'Error',
        'Por favor, completa todos los campos antes de agregar.',
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
          confirmButtonText: 'Si, agregar',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.servicerequerimiento.insertar(form.value).subscribe(
              (res) => {
                form.reset();
                this.servicerequerimiento.obtenerpermiso().subscribe(
                  (res) => {
                    this.servicerequerimiento.Permiso = res;
                    swalWithBootstrapButtons.fire(
                      'Agregado',
                      'El permiso fue agregado',
                      'success'
                    );
                  },
                  (err) => {
                    console.log(err);
                    swalWithBootstrapButtons.fire(
                      'Error',
                      'Hubo un error al obtener los permisos: ' + err.error.message,
                      'error'
                    );
                  }
                );
              },
              (error) => {
                console.log(error);
                swalWithBootstrapButtons.fire(
                  'Error',
                  'Hubo un error al agregar el permiso: ' + error.error.message,
                  'error'
                );
              }
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'El permiso no fue agregado',
              'error'
            );
          }
        });
    }
  }
  


}
