import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-tabla',
  templateUrl: './usuarios-tabla.component.html',
  styleUrls: ['./usuarios-tabla.component.css']
})
export class UsuariosTablaComponent implements OnInit{
  constructor(public usuario:UsuariosService, private router: Router){}
  filterPost ='';
  ngOnInit(): void {
    this.obtenerpermisos();
  }
  obtenerpermisos(){
    this.usuario.getUsuarios().subscribe(
      (res)=>{
        this.usuario.Usuarios=res
      },
      err=>console.error(err)
    )
  }
  Actualizar(id: number) {
    this.router.navigate(['actualizar_usuario', id]);
  }
}
