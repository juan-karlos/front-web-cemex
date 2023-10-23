import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actualizar-requerimiento',
  templateUrl: './actualizar-requerimiento.component.html',
  styleUrls: ['./actualizar-requerimiento.component.css']
})
export class ActualizarRequerimientoComponent implements OnInit {

  itemId!: number;
  datos: any;
  FormRegistro: any;
  id_requerimiento!: number;
  nom_req!: string
  peso!: number;
  impacto!: string;
  siglas!: string;
  
  

  constructor(public servicerequerimiento:RequerimientoService, 
    private FB: FormBuilder, private route: ActivatedRoute){

    }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        
        this.itemId = params['id_requerimiento'];
        console.log( 'este es el id que se esta mandando',this.itemId);
        this.servicerequerimiento.obtenerPermisoPorId(this.itemId).subscribe(objeto => {
      
          this.datos = objeto;
          console.log('esto es lo que se recibe',this.datos);

          this.id_requerimiento = this.datos[0].id_requerimiento;
          this.nom_req = this.datos[0].nombre_requerimiento;
          this.peso = this.datos[0].peso;
          this.impacto = this.datos[0].impacto;
          this.siglas = this.datos[0].siglas
            
        
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
              this.servicerequerimiento.Actualizar(form.value).subscribe(
                (res) => {
                  form.reset();
                  this.servicerequerimiento.obtenerpermiso().subscribe(
                    (res) => {
                      this.servicerequerimiento.Permiso = res;
                      swalWithBootstrapButtons.fire(
                        'Actualizado',
                        'El permiso fue actualizado',
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
                    'Hubo un error al actualizar el permiso: ' + error.error.message,
                    'error'
                  );
                }
              );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'El permiso no fue actualizado',
                'error'
              );
            }
          });
      }
    }
    

}
