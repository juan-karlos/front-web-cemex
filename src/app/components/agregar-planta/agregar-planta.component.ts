import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-planta',
  templateUrl: './agregar-planta.component.html',
  styleUrls: ['./agregar-planta.component.css']
})
export class AgregarPlantaComponent { 

  constructor(public servisplanta:UnidadOperativaService){}

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
  
 validacion(form:NgForm){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
      
      
    },
    buttonsStyling: true
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Los datos son correctos?',
    text: "Asegúrate de que los datos sean corectos",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, agregar',
    cancelButtonText: 'Volver a revisar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Agregado',
        'La planta fue agregada',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Revisa que los datos esten correctos',
        'error'
      )
    }
  })
 }

}
