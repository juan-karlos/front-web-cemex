import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.css']
})

export class NacionalComponent implements OnInit{
  constructor(public nacional:UnidadOperativaService ,private router: Router){}
  ngOnInit() {
   this.ObtenerNacional();
  }

  ObtenerNacional(){
    this.nacional.ContNacional().subscribe(
      res=>{
        console.log('ESTO ES LO QUE DEVUELVE EL DE NACIONAL: ', res)
        this.nacional.Segmentos=res;
        
      },
      err=>console.log(err)
    )
  }

}
