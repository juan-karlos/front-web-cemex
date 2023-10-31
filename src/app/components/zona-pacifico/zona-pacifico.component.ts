import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UnidadOperativaService} from 'src/app/services/unidad-operativa.service'
@Component({
  selector: 'app-zona-pacifico',
  templateUrl: './zona-pacifico.component.html',
  styleUrls: ['./zona-pacifico.component.css']
})

export class ZonaPacificoComponent implements OnInit{
  constructor(public pasifico:UnidadOperativaService, private router: Router){}


  ngOnInit() {
    this.obtenerPasificos()
  }

  obtenerPasificos(){
    this.pasifico.obtenerPasifico().subscribe(
      res=> {
        this.pasifico.Segmentos=res;
        
      },
      err=>console.log(err),
    )
  }
}
