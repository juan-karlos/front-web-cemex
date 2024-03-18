import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-tabla',
  templateUrl: './usuarios-tabla.component.html',
  styleUrls: ['./usuarios-tabla.component.css']
})
export class UsuariosTablaComponent implements OnInit{
  constructor(public usuario:UsuariosService, private router: Router){}
  filterPost ='';
  usuarios: any[] = [];
  ngOnInit(): void {
    this.obtener();
  }
  obtener(){
    this.usuario.getUsuarios().subscribe(
      (res)=>{
       
      this.usuarios = res;
      console.log('OBTENER: ', this.usuarios)
      },
      err=>console.error(err)
    )
  }
  Actualizar(id: number) {
    this.router.navigate(['actualizar_usuario', id]);
  }

eliminar(id:number){
  this.validar(id);
  this.obtener();
}


  validar(id:number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    });
 
    swalWithBootstrapButtons
        .fire({
          title: '¿Seguro que desea eliminar este usuario?',
          text: 'Esta es una accion critica',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, eliminar',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        })
        .then((result) => {
          if (result.isConfirmed) {
            
            this.usuario.eliminar(id).subscribe(
              (res) => {
               
                swalWithBootstrapButtons.fire(
                        'Hecho',
                        'Usuario eliminado',
                        'success'
                      );
              },
              (error) => {
                console.log(error);
                swalWithBootstrapButtons.fire(
                  'Error',
                  'Error al eliminar: ' + error.error.message,
                  'error'
                );
              }
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'Usuario no eliminado',
              'error'
            );
          }
        });
    
  }
}
