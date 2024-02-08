import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.css']
})

export class NacionalComponent implements OnInit{
  constructor(public centro:UnidadOperativaService ,private router: Router){}
  ngOnInit() {
   
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
