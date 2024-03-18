import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actualizar-planta',
  templateUrl: './actualizar-planta.component.html',
  styleUrls: ['./actualizar-planta.component.css']
})
export class ActualizarPlantaComponent implements OnInit {
  datos: any;
  itemId!: number;
  FormRegistro: any;
  nombre_planta!: string
  segmento!: string
  zona!: string
  Estado!: string
  fija!: boolean;
  activo!: boolean;
  id_planta!: number;
  constructor(public servisplanta:UnidadOperativaService,private FB: FormBuilder,
    private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      this.itemId = params['id_planta'];
      this.servisplanta.obtenerPlantaPorId(this.itemId).subscribe(objeto => {
        
        this.datos = objeto;
       
        this.nombre_planta = this.datos[0].nombre_planta;
        this.segmento = this.datos[0].segmento;
        this.zona = this.datos[0].zona;
        this.Estado = this.datos[0].Estado;
        this.fija = this.datos[0].fija;
        this.activo = this.datos[0].activo;
        this.id_planta = this.datos[0].id_planta;
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
      !form.valid ||
      !form.value.nombre_planta ||
      !form.value.segmento ||
      !form.value.zona 
      
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
            this.servisplanta.Actualizar(form.value).subscribe(
              (res) => {
                form.reset();
                this.servisplanta.obtenerplanta().subscribe(
                  (res) => {
                    this.servisplanta.Plantas = res;
                    swalWithBootstrapButtons.fire(
                      'Actualizado',
                      'La planta fue actualizada',
                      'success'
                    );
                  },
                  (err) => {
                    console.log(err);
                    swalWithBootstrapButtons.fire(
                      'Error',
                      'Hubo un error al obtener las plantas: ' + err.error.message,
                      'error'
                    );
                  }
                );
              },
              (error) => {
                console.log(error);
                swalWithBootstrapButtons.fire(
                  'Error',
                  'Hubo un error al actualizar la planta: ' + error.error.message,
                  'error'
                );
              }
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'La planta no fue actualizada',
              'error'
            );
          }
        });
    }
  }
  
   
}
