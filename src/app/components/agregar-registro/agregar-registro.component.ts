import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
  fecha_inicio :string=""
  fecha_vencimiento:string=""




  constructor(private http: HttpClient, public Registros:RegistrosService) {

  }

  enviardat(){
    const fechas={
     fecha_inicio: this.fecha_inicio,
     fecha_vencimiento: this.fecha_vencimiento

    }
  }

  onFileSelected(event: any) {
    console.log("archivo seleccionado");
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('pdfFile', this.selectedFile);

      this.http.post('http://localhost:2300/api/regi/pdf', formData).subscribe(
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

  // insertar_registro(form:NgForm){
  //   this.Registros.insertar(form.value).subscribe(
  //     res=>{
  //       form.reset()
  //       this.Registros.obtenerRegistro().subscribe(
  //         res=>this.Registros.Registro=res,
  //         err=>console.log(err)
  //       )
  //     }
  //   )
  // }

  mostrarIn(){

    const fecha1 = moment(this.fecha_inicio);
    const fecha2=moment(this.fecha_vencimiento);
    const fechaAcomodada = fecha1.format('YYYY/MM/DD');
    // let fechaAcomodada="holaaaaa"
    const fechaAcomodada2= fecha2.format('YYYY/MM/DD');
    // let fechaAcomodada1=new Date();

     const variablesJson={
      fechaAcomodada,
      fechaAcomodada2
     }
     console.log(variablesJson)

    this.http.post('http://localhost:2300/api/regi/fechas',variablesJson).subscribe(
      (respuesta:any)=>{
        console.log('leido',respuesta)
      }
    )


  }

  insertar_registro(form:NgForm){

    this.mostrarIn();
    this.onSubmit();

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


  // ejecutar(){
  //   this.onSubmit();
  //   this.mostrarIn();
  // }

}

