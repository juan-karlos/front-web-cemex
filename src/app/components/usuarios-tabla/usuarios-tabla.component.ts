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
}
