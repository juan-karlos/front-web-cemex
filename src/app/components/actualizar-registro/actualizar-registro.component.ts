import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistrosService } from 'src/app/services/registros.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css']
})
export class ActualizarRegistroComponent implements OnInit {

  editable: boolean = false;
  itemId!: number;
  datos: any;
  FormRegistro: any;
  arregloRequerimientos: string[] = [];
  public fechaHabilitada = true;
  public checkboxActivado = false;
  mostrar: boolean = false;
  selectedFile: File | null = null;
  // fecha_inicio: string | null = null;
  fecha_vencimiento: string | null = null;
  validez_unica: boolean = false;
  estatus: string = '';
  url: string = '';
  observaciones: string = "";
  nombre_requerimiento: string = "";
  nombre_planta: string = "";
  id_registro: number = 0;

  constructor(private location: Location,private http: HttpClient, public servisregistro: RegistrosService, private FB: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id_registro'];
      this.servisregistro.obtenerRegistroPorId(this.itemId).subscribe(objeto => {
        this.datos = objeto;
        this.id_registro = this.datos[0].id_registro;
        this.nombre_planta = this.datos[0].nombre_planta;
        this.nombre_requerimiento = this.datos[0].nombre_requerimiento;
        // this.fecha_inicio = this.datos[0].fecha_inicio;
        this.fecha_vencimiento = this.datos[0].fecha_vencimiento;
        this.observaciones = this.datos[0].observaciones;
        this.estatus = this.datos[0].estatus;
        this.validez_unica = this.datos[0].validez_unica;
        this.url = this.datos[0].url;
        this.toggleValidezUnica();
        this.toggleValidezUnica();
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

  onFileSelected(event: any) {
    console.log("archivo seleccionado");
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true
    });

    // const fecha1 = moment(this.fecha_inicio);
    const fecha2 = moment(this.fecha_vencimiento);
    // const fechaAcomodada = fecha1.format('YYYY/MM/DD');
    const fechaAcomodada2 = fecha2.format('YYYY/MM/DD');

    const validez_unica = this.validez_unica ? 'true' : 'false';
    const estatus = this.estatus;
    const observaciones = this.observaciones;
    const nombre_planta = this.nombre_planta;
    const nombre_requerimiento = this.nombre_requerimiento;
    const id_registro = this.id_registro;
    const formData = new FormData();

    if (!estatus || !nombre_planta || !nombre_requerimiento) {
      // Muestra un mensaje de error si algún campo requerido está vacío
      swalWithBootstrapButtons.fire(
        'Error',
        'Por favor, completa todos los campos obligatorios antes de actualizar.',
        'error'
      );
      return;
    }

    if (this.validez_unica) {
      // Si validez_unica está marcada, no se requieren fechas
      formData.append('validez_unica', 'true');
    } else {
      // Si no está marcada, se requieren fechas y se validan
      // if (!fecha1.isValid() || !fecha2.isValid() || fecha1.isAfter(fecha2)) {
      //   swalWithBootstrapButtons.fire(
      //     'Error',
      //     'Las fechas seleccionadas no son válidas.',
      //     'error'
      //   );
      //   return;
      // }
      if (!fecha2.isValid()) {
        swalWithBootstrapButtons.fire(
          'Error',
          'Las fechas seleccionadas no son válidas.',
          'error'
        );
        return;
      }
      // formData.append('fechaAcomodada', fechaAcomodada);
      formData.append('fechaAcomodada2', fechaAcomodada2);
      formData.append('validez_unica', 'false');
    }

    // Agregar los demás campos al formulario
    formData.append('id_registro', id_registro.toString());
    formData.append('estatus', estatus);
    formData.append('observaciones', observaciones);
    formData.append('nombre_planta', nombre_planta);
    formData.append('nombre_requerimiento', nombre_requerimiento);

    // Agregar archivo si está presente
    if (this.selectedFile) {
      formData.append('pdfFile', this.selectedFile);
    }

    // Realizar la solicitud al servidor
    this.http.patch('http://86.38.204.102:3200/api/regi/actualizarPer', formData).subscribe(
      // this.http.patch('http://localhost:3200/api/regi/actualizarPer', formData).subscribe(  
    (response: any) => {
        console.log('URL del PDF en el servidor:', response);
        swalWithBootstrapButtons.fire(
          'Actualizado',
          'El registro fue actualizado',
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

  ejecutar() {
    this.onSubmit();
  }

  toggleValidezUnica() {
    this.validez_unica = !this.validez_unica;
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
      'Por favor, completa todos los campos antes de actualizar.',
      'error'
    );

    // Muestra la confirmación si el formulario es válido y los campos están llenos
    swalWithBootstrapButtons
      .fire({
        title: '¿Los datos son correctos?',
        text: 'Asegúrate de que los datos sean correctos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, actualizar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.onSubmit();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'El registro no fue actualizado',
            'error'
          );
        }
      });
  }
}
