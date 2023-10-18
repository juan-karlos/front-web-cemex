import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RegistrosService } from 'src/app/services/registros.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { MatCheckboxChange } from '@angular/material/checkbox';
import Swal from 'sweetalert2';
import { RequerimientoService } from 'src/app/services/requerimiento.service';

moment.locale('es');
@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})

export class AgregarRegistroComponent {

  public fechaHabilitada = true;
  public checkboxActivado = false;

 
  //fechainicio = moment(this.datepicker.value);

  mostrar: boolean = false;
 // fechainicio = moment(this,datepicker.value).format(this.formato);
  selectedFile: File | null = null;
  fecha_inicio: string | null = null;
  fecha_vencimiento: string | null = null;
  validez_unica:boolean=false;
  estatus:string='';
  observaciones:string="";
  nombre_requerimiento:string="";
  nombre_planta:string="";

  constructor(private http: HttpClient, public Registros:RegistrosService) {

  }

  toggleDatepickers(event: MatCheckboxChange) {
    this.checkboxActivado = event.checked;
    this.fechaHabilitada = !event.checked;
    this.fecha_inicio = null; // También puedes reiniciar las fechas cuando se deshabilitan.
    this.fecha_vencimiento = null;
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

  mostrarFechas(){
    if(this.mostrar){
      this.mostrar = false;
    }
    else{
       this.mostrar = true;
    }
  }


  onSubmit() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    });
    const fecha1 = moment(this.fecha_inicio);
    const fecha2=moment(this.fecha_vencimiento);

    const fechaAcomodada = fecha1.format('YYYY/MM/DD');

    const fechaAcomodada2= fecha2.format('YYYY/MM/DD');
    const validez_unica = this.validez_unica ? 'true' : 'false';
    const estatus=this.estatus;
    const observaciones=this.observaciones;

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('pdfFile', this.selectedFile);
      formData.append('fechaAcomodada', fechaAcomodada);
      formData.append('fechaAcomodada2', fechaAcomodada2);
      formData.append('validez_unica', validez_unica);
      formData.append('estatus',estatus)
      formData.append('observaciones',observaciones)
      formData.append('id_requerimiento',String(this.nombre_requerimiento))
      formData.append('id_planta',String(this.nombre_planta))
      this.http.post('http://192.168.100.62:3200/api/regi/pdf',formData).subscribe(
        (response: any) => {
          // `response` puede contener la URL del PDF en el servidor
          console.log('URL del PDF en el servidor:', response);
          swalWithBootstrapButtons.fire(
            'Agregado',
            'El registro fue agregado ',
            'success'
          );
        },
        (error) => {
          swalWithBootstrapButtons.fire(
            'Error',
            'Hubo un error: ' + error.error.message,
            'error'
          );
        }
      );
    }
  }




  ejecutar(){
    this.onSubmit();
  
  }



  validacion() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    });
  
   
      // Muestra un mensaje de error si el formulario es inválido o algún campo está vacío
      swalWithBootstrapButtons.fire(
        'Error',
        'Por favor, completa todos los campos antes de agregar.',
        'error'
      );
   
      // Muestra la confirmación si el formulario es válido y los campos están llenos
      swalWithBootstrapButtons
        .fire({
          title: '¿Los datos son correctos?',
          text: 'Asegúrate de que los datos sean correctos',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, agregar',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.ejecutar();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'La planta no fue agregada',
              'error'
            );
          }
        });
    }
  }
  



