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
  itemId!: number;
  datos: any;
  FormRegistro: any;

  constructor(public servisplanta:UnidadOperativaService,private FB: FormBuilder,private route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.itemId = +params['id_planta']});

    this.route.params.subscribe(params => {
      this.itemId = params['id_planta'];
      // Llama a tu servicio para obtener el objeto basado en el ID  
      this.servisplanta.obtenerPlantaPorId(this.itemId).subscribe(objeto => {
        this.datos = objeto;
        if (objeto) {
          // Accede a las propiedades del objeto aquí
          console.log("Si se recibio el objeto: ",this.datos);
          const nombre = this.datos.nombre_planta
          console.log("dato pedido: ",this.datos.nombre_planta)
        } else {
          console.log('El objeto JSON es undefined o nulo.');
        }
      // Llena el formulario con los datos del objeto obtenido
        // this.FormRegistro.form.controls['nombre_planta'].patchValue(
        //   this.datos.nombre_planta
        // );
        
      });
  })
  }
  elemento: any;

   pintarCampos(){
    
      this.servisplanta.obtenerPlantaPorId(this.itemId).subscribe((data) => {
        this.elemento = data});
        // return this.elemento;
        console.log(this.elemento);
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
