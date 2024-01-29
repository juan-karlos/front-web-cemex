import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequerimientoService } from 'src/app/services/requerimiento.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { UnidadOperativaService } from 'src/app/services/unidad-operativa.service';

moment.locale('es');

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})
export class AgregarRegistroComponent implements OnInit {

  arregloRequerimientos: string[] = [];
  public fechaHabilitada = true;
  public checkboxActivado = false;
  mostrar: boolean = false;
  selectedFile: File | null = null;
  fecha_inicio: string | null = null;
  fecha_vencimiento: string | null = null;
  validez_unica: boolean = false;
  estatus: string = '';
  observaciones: string = "";
  nombre_requerimiento: string = "";
  nombre_planta: string = "";

  form: FormGroup = new FormGroup({
    nombre_planta: new FormControl(''),
  });

  nombrePlantaControl = new FormControl();
  sugerenciasNombresPlantas: string[] = [];

  fechaHoy: Date = new Date();

  constructor(
    private http: HttpClient,
    public permiso: RequerimientoService,
    private formBuilder: FormBuilder,
    private unidadOperativaService: UnidadOperativaService
  ) {
    this.nombrePlantaControl.valueChanges
      // .pipe(
      //   startWith(''),
      //   switchMap(value => this.unidadOperativaService.obtenerSugerenciasNombresPlantas(value))
      // )
      .subscribe(sugerencias => {
        this.sugerenciasNombresPlantas = sugerencias;
      });
  }

  ngOnInit(): void {
    this.obtenerpermisos();
  }

  obtenerpermisos() {
    this.permiso.obtenerpermiso().subscribe(
      (datos) => {
        this.permiso.Permiso = datos;
        this.arregloRequerimientos = datos.map((item: any) => item.nombre_requerimiento);
      },
      (err) => console.error(err)
    );
  }

  toggleDatepickers(event: any) {
    this.checkboxActivado = event.checked;
    this.fechaHabilitada = !event.checked;
    this.fecha_inicio = null;
    this.fecha_vencimiento = null;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  mostrarFechas() {
    this.mostrar = !this.mostrar;
  }

  actualizar() {
    const nombre_planta = this.nombre_planta;
    const formData = new FormData();
    formData.append('nombre_planta', nombre_planta);
    this.http.post('http://86.38.204.102:3200/api/requerimiento/porcentajeAct', formData);
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

    const formData = new FormData();

    if (this.selectedFile) {
      formData.append('pdfFile', this.selectedFile);
      // formData.append('fechaAcomodada', fechaAcomodada);
      formData.append('fechaAcomodada2', fechaAcomodada2);
      formData.append('validez_unica', validez_unica);
      formData.append('estatus', estatus);
      formData.append('observaciones', observaciones);
      formData.append('nombre_planta', nombre_planta);
      formData.append('nombre_requerimiento', nombre_requerimiento);

      this.http.post('http://86.38.204.102:3200/api/regi/pdf', formData).subscribe(
        (response: any) => {
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
      );
    } else {
      // formData.append('fechaAcomodada', fechaAcomodada);
      formData.append('fechaAcomodada2', fechaAcomodada2);
      formData.append('validez_unica', validez_unica);
      formData.append('estatus', estatus);
      formData.append('observaciones', observaciones);
      formData.append('nombre_planta', nombre_planta);
      formData.append('nombre_requerimiento', nombre_requerimiento);

      this.http.post('http://86.38.204.102:3200/api/regi/pdf', formData).subscribe(
        (response: any) => {
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
      );
    }
  }

  ejecutar() {
    this.onSubmit();
    this.actualizar();
  }

  validacion() {
    if (!this.nombre_planta || !this.nombre_requerimiento || !this.estatus) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos antes de agregar.',
      });
      return;
    }
  
    if (!this.validez_unica) {
      // if (!this.fecha_inicio) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Error',
      //     text: 'Por favor, elige una fecha de inicio válida (a partir de hoy).',
      //   });
      //   return;
      // }
  
      if (!this.fecha_vencimiento || moment(this.fecha_vencimiento).isBefore(moment().add(1, 'days'))) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, elige una fecha de vencimiento válida (a partir de mañana).',
        });
        return;
      }
    }
  
    this.ejecutar();
  }
  
}
