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
        
        this.itemId = params['id_planta'];
        this.servicerequerimiento.obtenerPermisoPorId(this.itemId).subscribe(objeto => {
          
          this.datos = objeto;
          console.log(this.datos);

          this.id_requerimiento = this.datos[0].id_requerimiento;
          this.nom_req = this.datos[0].nom_req;
          this.peso = this.datos[0].peso;
          this.impacto = this.datos[0].impacto;
          this.peso = this.datos[0].peso;
        
        });
    })
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
