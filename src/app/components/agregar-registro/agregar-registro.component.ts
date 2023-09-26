import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrosService } from 'src/app/services/registros.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';


moment.locale('es');
@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})

export class AgregarRegistroComponent {
  


  //fechainicio = moment(this.datepicker.value);
 
  mostrar: boolean = false;
 // fechainicio = moment(this,datepicker.value).format(this.formato);
  selectedFile: File | null = null;
  valor :string=""
  fecha2:string=""
  formato = 'yyyy/mm/dd';
  
 
 

  constructor(private http: HttpClient, public Registros:RegistrosService) {}
  
  onFileSelected(event: any) {
    console.log("archivo seleccionado");
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('pdfFile', this.selectedFile);

      this.http.post('http://localhost:2300/api/regi/insertar', formData).subscribe(
        (response: any) => {
          // `response` puede contener la URL del PDF en el servidor
          console.log('URL del PDF en el servidor:', response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }


  mostrarFechas(){
    if(this.mostrar){
      this.mostrar = false;
    }
    else{
       this.mostrar = true;
    }
  }

  insertar_registro(form:NgForm){
    this.Registros.insertar(form.value).subscribe(
      res=>{
        form.reset()
        this.Registros.obtenerRegistro().subscribe(
          res=>this.Registros.Registro=res,
          err=>console.log(err)
        )
      }
    )
  }
  mostrarIn(){
    const fecha = moment(this.valor);
    const fecha1=moment(this.fecha2)
    const fechaAcomodada = fecha.format('DD/MM/YYYY');
    const fechaAcomodada2=fecha1.format('DD/MM/YYYY');
    console.log(fechaAcomodada);
   console.log(fechaAcomodada2);

  }


}

