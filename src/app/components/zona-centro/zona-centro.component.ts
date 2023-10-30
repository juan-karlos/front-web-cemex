import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
@Component({
  selector: 'app-zona-centro',
  templateUrl: './zona-centro.component.html',
  styleUrls: ['./zona-centro.component.css']
})
export class ZonaCentroComponent implements OnInit{
  constructor(public centro:UnidadOperativaService ,private router: Router){}
  ngOnInit() {
    this.obtenCentro()
  }

  obtenCentro(){
    this.centro.obtenerCentro().subscribe(
      res=>{
        this.centro.Segmentos=res;
        
      },
      err=>console.log(err)
    )
  }

}
