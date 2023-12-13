import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RegistrosService } from 'src/app/services/registros.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { MatCheckboxChange } from '@angular/material/checkbox';
import Swal from 'sweetalert2';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';

moment.locale('es');
@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})

export class AgregarRegistroComponent implements OnInit{



  arregloRequerimientos: string[] = [];
  public fechaHabilitada = true;
  public checkboxActivado = false;
  mostrar: boolean = false;
  selectedFile: File | null = null;
  fecha_inicio: string | null = null;
  fecha_vencimiento: string | null = null;
  validez_unica:boolean=false ;
  estatus:string='';
  observaciones:string="";
  nombre_requerimiento:string="";
  nombre_planta:string="";

form: FormGroup = new FormGroup({
    nombre_planta: new FormControl(''), 
  });

  nombrePlantaControl = new FormControl();
  sugerenciasNombresPlantas: string[] = [];

 

  constructor(
    private http: HttpClient,
    public permiso:RequerimientoService, 
    public Registros:RegistrosService,
    private formBuilder: FormBuilder,
    private unidadOperativaService: UnidadOperativaService
  ) {
    // Configura el autocompletado
    this.nombrePlantaControl.valueChanges
      .pipe(
        startWith(''),
        switchMap(value => this.unidadOperativaService.obtenerSugerenciasNombresPlantas(value))
      )
      .subscribe(sugerencias => {
        this.sugerenciasNombresPlantas = sugerencias;
      });
  }
  ngOnInit(): void {
   this.obtenerpermisos();

  }

  filterPost ='';
  num: number = 0;

  obtenerpermisos(){
    this.permiso.obtenerpermiso().subscribe(
      (datos) => {
        this.permiso.Permiso = datos;
        this.num = datos.length;
        this.arregloRequerimientos = datos.map((item: any) => item.nombre_requerimiento);

        return datos;
      },
      (err) => console.error(err)

    )
  }

  toggleDatepickers(event: MatCheckboxChange) {
    this.checkboxActivado = event.checked;
    this.fechaHabilitada = !event.checked;
    this.fecha_inicio = null; //puedes reiniciar las fechas cuando se deshabilitan.
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

  actualizar(){

    const nombre_planta=this.nombre_planta;
    const formData = new FormData();
    formData.append('nombre_planta',nombre_planta)
    this.http.post('http://localhost:3200/api/requerimiento/porcentajeAct',formData)
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
    const nombre_planta=this.nombre_planta;
    const nombre_requerimiento= this.nombre_requerimiento

    const formData = new FormData();

    if (this.selectedFile) {

      formData.append('pdfFile', this.selectedFile);
      formData.append('fechaAcomodada', fechaAcomodada);
      formData.append('fechaAcomodada2', fechaAcomodada2);
      formData.append('validez_unica', validez_unica);
      formData.append('estatus',estatus);
      formData.append('observaciones',observaciones);
      formData.append('nombre_planta',nombre_planta);
      formData.append('nombre_requerimiento',nombre_requerimiento);
      console.log('Contenido de formData:');
      formData.forEach((value, key) => {
      console.log(key, value);
     });
      this.http.post('http://localhost:3200/api/regi/pdf',formData).subscribe(


        (response: any) => {


      this.actualizar();
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
    }else {
      formData.append('fechaAcomodada', fechaAcomodada);
      formData.append('fechaAcomodada2', fechaAcomodada2);
      formData.append('validez_unica', validez_unica);
      formData.append('estatus',estatus);
      formData.append('observaciones',observaciones);
      formData.append('nombre_planta',nombre_planta);
      formData.append('nombre_requerimiento',nombre_requerimiento);
      console.log('Contenido de formData:');

      formData.forEach((value, key) => {
      console.log(key, value);
  });
      this.http.post('http://localhost:3200/api/regi/pdf',formData).subscribe(
        (response: any) => {
          // `response` puede contener la URL del PDF en el servidor
          console.log('URL del PDF en el servidor:', response);

      this.actualizar();
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
      )
    }

  }




  ejecutar(){
    this.onSubmit();
    this.actualizar();
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
              'El registro no fue agregado',
              'error'
            );
          }
        });
    }
  }




