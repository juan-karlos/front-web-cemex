import { Component, OnInit } from '@angular/core';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-nivel-riesgo-constructores-nacional',
  templateUrl: './nivel-riesgo-constructores-nacional.component.html',
  styleUrls: ['./nivel-riesgo-constructores-nacional.component.css']
})


export class NivelRiesgoConstructoresNacionalComponent implements OnInit{

  constructor(
    public logicaService : LogicaService) { }


  ngOnInit(): void {
    this.datosRiesgoClausura(this.cuerpoRiesgoClausura);
    this.datosRiesgoMulta(this.cuerpoRiesgoMulta);
    this.datosRiesgoAdmin(this.cuerpoRiesgoAdmin);
    this.datosOptimas(this.cuerpoOptima);
    this.NoTramitablesTabla(this.body);
  }
  
  zona: string = "Centro";
  segmento: string = "Constructores";

  cuerpoRiesgoClausura={
    "zona":this.zona,
    "segmento":this.segmento,
    "impacto":"Clausura Total"
  }
  
  cuerpoRiesgoMulta={
    "zona":this.zona,
    "segmento":this.segmento,
  "impacto":"Multa"
  }

  cuerpoRiesgoAdmin={
    "zona":this.zona,
    "segmento":this.segmento,
    "impacto":"Administrativo"
  }
  
  cuerpoOptima={
    "zona":this.zona,
    "segmento":this.segmento,
  }


  datosRiesgoClausura(cuerpo: any) {
    this.logicaService.vencidasNacional(cuerpo).subscribe(
      (res) => {
        console.log('Esto me devuelve el metodo datos riesgo clausura: ', res);
        this.logicaService.DatosRiesgoClausura = this.procesarDatos(res);
      },
      (error) => {
        console.error('Error que arroja el obtener nacional:', error);
      }
    );
  }

  datosRiesgoMulta(cuerpo: any) {
    this.logicaService.vencidasNacional(cuerpo).subscribe(
      (res) => {
        console.log('Esto me devuelve el metodo datos riesgo multa: ', res);
        this.logicaService.DatosRiesgoMulta = this.procesarDatos(res);
      },
      (error) => {
        console.error('Error que arroja el obtener nacional:', error);
      }
    );
  }

  datosRiesgoAdmin(cuerpo:any) {
    this.logicaService.vencidasNacional(cuerpo).subscribe(
      (res) => {
        console.log
        ('Esto me devuelve el metodo datos riesgo admin: ', res);
        this.logicaService.DatosRiesgoAdmin = this.procesarDatos(res);
      },
      (error) => {
        console.error('Error que arrja el obtener nacional:', error);
      }
    );
  }

  NoTramitablesTabla(cuerpo:any) {
    this.logicaService.getDatosNoTramitablesTablaNacional(cuerpo).subscribe(
      (res) => {
        console.log
        ('Esto me devuelve el metodo no tramitables tabla: ', res);
        this.logicaService.DatosNoTramitablesTabla = this.procesarDatos(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  body = {
    "segmento": this.segmento
  }


  datosOptimas(cuerpo:any) {
    this.logicaService.getDatosOptimasNacional(cuerpo).subscribe(
      (res) => {
        console.log
        ('Esto me devuelve el metodo datos optimas: ', res);
        this.logicaService.DatosOptimas = this.procesarDatos(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }


  procesarDatos(datos: any[]) {
    const plantas = new Map();

    datos.forEach(dato => {
      const nombrePlanta = dato.nombre_planta;

      if (!plantas.has(nombrePlanta)) {
        plantas.set(nombrePlanta, {
          nombre_planta: nombrePlanta,
          siglas: dato.siglas,
          porcentaje_cumplimiento: this.validarNumero(dato.porcentaje_cumplimiento)
        });
      } else {
        const plantaExistente = plantas.get(nombrePlanta);
        plantaExistente.siglas += `/${dato.siglas}`;
        // Puedes implementar alguna lógica específica para manejar el porcentaje_cumplimiento si es necesario
      }
    });

    return Array.from(plantas.values());
  }
  private validarNumero(valor: any): number {
    // Verificar si el valor es NaN y devolver 0 en ese caso
    return isNaN(valor) ? 0 : parseFloat(valor);
  }


}
