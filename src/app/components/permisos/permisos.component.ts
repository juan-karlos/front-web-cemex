import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit{
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
    this.router.navigate(['actualizar-requerimiento', id]);
  }
}
