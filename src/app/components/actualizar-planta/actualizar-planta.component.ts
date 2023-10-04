import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
import { FormBuilder, NgForm } from '@angular/forms';
@Component({
  selector: 'app-actualizar-planta',
  templateUrl: './actualizar-planta.component.html',
  styleUrls: ['./actualizar-planta.component.css']
})
export class ActualizarPlantaComponent implements OnInit {

  constructor(public servisplanta:UnidadOperativaService, private FB: FormBuilder){}
  ngOnInit(): void {
    
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
      title: '¿Desea actualizar los datos?',
      text: "Asegúrate de que los datos sean corectos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
  
    }).then((result) => {
      if (result.isConfirmed) {
  
        
        this.servisplanta.Actualizar(form.value).subscribe(
          res=>{
            form.reset()
            this.servisplanta.obtenerplanta().subscribe(
              res=>this.servisplanta.Plantas=res,
  
              err=>console.log(err)
        
            )
          }
        )
        swalWithBootstrapButtons.fire(
          'Actualizado',
          'La planta fue actualizada',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'La planta no fue actualizada',
          'error'
        )
      }
    })
   }
  
  
}
