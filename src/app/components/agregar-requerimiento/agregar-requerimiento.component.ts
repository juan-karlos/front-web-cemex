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
      cancelButtonText: 'Cancelar',
      reverseButtons: true
  
    }).then((result) => {
      if (result.isConfirmed) {
  
        
        this.servicerequerimiento.insertar(form.value).subscribe(
          res=>{
            form.reset()
            this.servicerequerimiento.obtenerpermiso().subscribe(
              res=>this.servicerequerimiento.Permiso=res,
  
              err=>console.log(err)
        
            )
          }
        )
        swalWithBootstrapButtons.fire(
          'Agregado',
          'El requerimento fue agregado',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El requerimento no fue agregado',
          'error'
        )
      }
    })
   }

}
