import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoService } from 'src/app/services/requerimiento.service';

@Component({
  selector: 'app-usuarios-tabla',
  templateUrl: './usuarios-tabla.component.html',
  styleUrls: ['./usuarios-tabla.component.css']
})
export class UsuariosTablaComponent implements OnInit{
  constructor(public permiso:RequerimientoService, private router: Router){}
  filterPost ='';
  ngOnInit(): void {
    this.obtenerpermisos();
  }
  obtenerpermisos(){
    this.permiso.obtenerpermiso().subscribe(
      res=>this.permiso.Permiso=res,
      err=>console.error(err)
    )
  }
  Actualizar(id: number) {
    this.router.navigate(['actualizar_usuario', id]);
  }
}
