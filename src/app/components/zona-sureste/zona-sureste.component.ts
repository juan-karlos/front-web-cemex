import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
@Component({
  selector: 'app-zona-sureste',
  templateUrl: './zona-sureste.component.html',
  styleUrls: ['./zona-sureste.component.css']
})
export class ZonaSuresteComponent implements OnInit{
  constructor(public suroeste:UnidadOperativaService, private router: Router){}
  ngOnInit() {
  this.obtenerSur()
  }

  obtenerSur(){
    this.suroeste.obtenerSur().subscribe(
      res=>{
        this.suroeste.Segmentos=res;
  
      },
      err=>console.log(err)
    )
  }
}
