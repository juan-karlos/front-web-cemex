import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css']
})
export class LooginComponent implements OnInit{
  constructor(private router: Router){}
ngOnInit(){
  
}
IniciarSesion(){
  this.router.navigate(['inicio']);
}
}
