import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';
@Component({
  selector: 'app-zona-norte',
  templateUrl: './zona-norte.component.html',
  styleUrls: ['./zona-norte.component.css']
})
export class ZonaNorteComponent implements OnInit {
  constructor(public norte:UnidadOperativaService ,private router: Router ){}
  ngOnInit() {
    this.obtenerNort()

  }

  obtenerNort(){
    this.norte.obtenerNorte().subscribe(
      res=> {
        this.norte.Segmentos=res;
        
      },
      err=>console.log(err),
    )
  }
}
