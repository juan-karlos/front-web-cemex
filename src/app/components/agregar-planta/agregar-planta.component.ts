import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
import Swal from 'sweetalert2';
//import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-agregar-planta',
  templateUrl: './agregar-planta.component.html',
  styleUrls: ['./agregar-planta.component.css']
})

export class AgregarPlantaComponent {


  constructor(public servisplanta:UnidadOperativaService, private FB: FormBuilder){}


  insertar_planta(form:NgForm){
    this.servisplanta.insertar(form.value).subscribe(
      res=>{
        form.reset()
        this.servisplanta.obtenerplanta().subscribe(
          res=>this.servisplanta.Plantas=res,
          err=>console.log(err)
          
        )
      }
    )
  }


  validacion(form: NgForm) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    });
  
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
          this.servisplanta.insertar(form.value).subscribe(
            (res) => {
              form.reset();
              this.servisplanta.obtenerplanta().subscribe(
                (res) => {
                  this.servisplanta.Plantas = res;
                  swalWithBootstrapButtons.fire(
                    'Agregado',
                    'La planta fue agregada',
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
                'Hubo un error al agregar la planta: ' + error.error.message,
                'error'
              );
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'La planta no fue agregada',
            'error'
          );
        }
      });
  }
  


 
}
