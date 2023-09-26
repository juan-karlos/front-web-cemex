import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrosService } from 'src/app/services/registros.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})
export class AgregarRegistroComponent {
  mostrar: boolean = false;

  selectedFile: File | null = null;
  valor :String=''
  fecha2:String=''


  constructor(private http: HttpClient, public Registros:RegistrosService) {}

  onFileSelected(event: any) {
    console.log("archivo selecsionado");
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
    console.log(this.valor)
    console.log(this.fecha2)

  }


}

