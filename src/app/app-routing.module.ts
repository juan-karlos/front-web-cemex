import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LooginComponent } from './components/loogin/loogin.component';
import { ZonaPacificoComponent } from './components/zona-pacifico/zona-pacifico.component';
import { ZonaNorteComponent } from './components/zona-norte/zona-norte.component';
import { ZonaSuresteComponent } from './components/zona-sureste/zona-sureste.component';
import { ZonaCentroComponent } from './components/zona-centro/zona-centro.component';
import { SegmentoConstructoresComponent } from './components/segmento-constructores/segmento-constructores.component';
import { SegmentoCadenaSuministroComponent } from './components/segmento-cadena-suministro/segmento-cadena-suministro.component';
import { PlantasComponent } from './components/plantas/plantas.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { RegistroPermisoComponent } from './components/registro-permiso/registro-permiso.component';
import { RiesgoConstructoresComponent } from './components/riesgo-constructores/riesgo-constructores.component';
import { ConstructoresPacificoComponent } from './components/constructores-pacifico/constructores-pacifico.component';
import { ConstructoresCentroComponent } from './components/constructores-centro/constructores-centro.component';
import { ConstructoresSuresteComponent } from './components/constructores-sureste/constructores-sureste.component';
import { ConstructoresNoresteComponent } from './components/constructores-noreste/constructores-noreste.component';
import { SuministroPacificoComponent } from './components/suministro-pacifico/suministro-pacifico.component';
import { SuministroCentroComponent } from './components/suministro-centro/suministro-centro.component';
import { SuministroSuresteComponent } from './components/suministro-sureste/suministro-sureste.component';
import { SuministroNoresteComponent } from './components/suministro-noreste/suministro-noreste.component';
import { ConstruramaPacificoComponent } from './components/construrama-pacifico/construrama-pacifico.component';
import { ConstruramaCentroComponent } from './components/construrama-centro/construrama-centro.component';
import { ConstruramaSuresteComponent } from './components/construrama-sureste/construrama-sureste.component';
import { ConstruramaNoresteComponent } from './components/construrama-noreste/construrama-noreste.component';
import { IndustrialesPacificoComponent } from './components/industriales-pacifico/industriales-pacifico.component';
import { IndustrialesCentroComponent } from './components/industriales-centro/industriales-centro.component';
import { IndustrialesSuresteComponent } from './components/industriales-sureste/industriales-sureste.component';
import { NoOperativosPacificoComponent } from './components/no-operativos-pacifico/no-operativos-pacifico.component';
import { NoOperativosCentroComponent } from './components/no-operativos-centro/no-operativos-centro.component';
import { NoOperativosSuresteComponent } from './components/no-operativos-sureste/no-operativos-sureste.component';
import { NoOperativosNoresteComponent } from './components/no-operativos-noreste/no-operativos-noreste.component';
import { OperacionesPacificoComponent } from './components/operaciones-pacifico/operaciones-pacifico.component';
import { OperacionesCentroComponent } from './components/operaciones-centro/operaciones-centro.component';
import { OperacionesSuresteComponent } from './components/operaciones-sureste/operaciones-sureste.component';
import { OperacionesNoresteComponent } from './components/operaciones-noreste/operaciones-noreste.component';
import { PromexmaPacificoComponent } from './components/promexma-pacifico/promexma-pacifico.component';
import { PromexmaCentroComponent } from './components/promexma-centro/promexma-centro.component';
import { PromexmaSuresteComponent } from './components/promexma-sureste/promexma-sureste.component';
import { PromexmaNoresteComponent } from './components/promexma-noreste/promexma-noreste.component';
import { TransportePacificoComponent } from './components/transporte-pacifico/transporte-pacifico.component';
import { TransporteCentroComponent } from './components/transporte-centro/transporte-centro.component';
import { TransporteSuresteComponent } from './components/transporte-sureste/transporte-sureste.component';
import { TransporteNoresteComponent } from './components/transporte-noreste/transporte-noreste.component';
import { GraficasConstructoresCentroComponent } from './components/graficas-constructores-centro/graficas-constructores-centro.component';
import { GraficasConstructoresNoresteComponent } from './components/graficas-constructores-noreste/graficas-constructores-noreste.component';
import { GraficasConstructoresPacificoComponent } from './components/graficas-constructores-pacifico/graficas-constructores-pacifico.component';
import { GraficasConstructoresSuresteComponent } from './components/graficas-constructores-sureste/graficas-constructores-sureste.component';
import { GraficasConstruramaCentroComponent } from './components/graficas-construrama-centro/graficas-construrama-centro.component';
import { GraficasConstruramaNoresteComponent } from './components/graficas-construrama-noreste/graficas-construrama-noreste.component';
import { GraficasConstruramaPacificoComponent } from './components/graficas-construrama-pacifico/graficas-construrama-pacifico.component';
import { GraficasConstruramaSuresteComponent } from './components/graficas-construrama-sureste/graficas-construrama-sureste.component';
import { GraficasIndustrialesCentroComponent } from './components/graficas-industriales-centro/graficas-industriales-centro.component';
import { GraficasIndustrialesPacificoComponent } from './components/graficas-industriales-pacifico/graficas-industriales-pacifico.component';
import { GraficasIndustrialesNoresteComponent } from './components/graficas-industriales-noreste/graficas-industriales-noreste.component';
import { GraficasIndustrialesSuresteComponent } from './components/graficas-industriales-sureste/graficas-industriales-sureste.component';
import { GraficasNoOperativosCentroComponent } from './components/graficas-no-operativos-centro/graficas-no-operativos-centro.component';
import { GraficasNoOperativosNoresteComponent } from './components/graficas-no-operativos-noreste/graficas-no-operativos-noreste.component';
import { GraficasNoOperativosPacificoComponent } from './components/graficas-no-operativos-pacifico/graficas-no-operativos-pacifico.component';
import { GraficasNoOperativosSuresteComponent } from './components/graficas-no-operativos-sureste/graficas-no-operativos-sureste.component';
import { GraficasOperacionesCentroComponent } from './components/graficas-operaciones-centro/graficas-operaciones-centro.component';
import { GraficasOperacionesNoresteComponent } from './components/graficas-operaciones-noreste/graficas-operaciones-noreste.component';
import { GraficasOperacionesPacificoComponent } from './components/graficas-operaciones-pacifico/graficas-operaciones-pacifico.component';
import { GraficasOperacionesSuresteComponent } from './components/graficas-operaciones-sureste/graficas-operaciones-sureste.component';
import { GraficasPromexmaCentroComponent } from './components/graficas-promexma-centro/graficas-promexma-centro.component';
import { GraficasPromexmaNoresteComponent } from './components/graficas-promexma-noreste/graficas-promexma-noreste.component';
import { GraficasPromexmaPacificoComponent } from './components/graficas-promexma-pacifico/graficas-promexma-pacifico.component';
import { GraficasPromexmaSuresteComponent } from './components/graficas-promexma-sureste/graficas-promexma-sureste.component';
import { GraficasSuministroCentroComponent } from './components/graficas-suministro-centro/graficas-suministro-centro.component';
import { GraficasSuministroNoresteComponent } from './components/graficas-suministro-noreste/graficas-suministro-noreste.component';
import { GraficasSuministroPacificoComponent } from './components/graficas-suministro-pacifico/graficas-suministro-pacifico.component';
import { GraficasSuministroSuresteComponent } from './components/graficas-suministro-sureste/graficas-suministro-sureste.component';
import { GraficasTransporteCentroComponent } from './components/graficas-transporte-centro/graficas-transporte-centro.component';
import { GraficasTransporteNoresteComponent } from './components/graficas-transporte-noreste/graficas-transporte-noreste.component';
import { GraficasTransportePacificoComponent } from './components/graficas-transporte-pacifico/graficas-transporte-pacifico.component';
import { GraficasTransporteSuresteComponent } from './components/graficas-transporte-sureste/graficas-transporte-sureste.component';
import { NivelRiesgoConstructoresPacificoComponent } from './components/nivel-riesgo-constructores-pacifico/nivel-riesgo-constructores-pacifico.component';
import { NivelRiesgoConstructoresCentroComponent } from './components/nivel-riesgo-constructores-centro/nivel-riesgo-constructores-centro.component';
import { NivelRiesgoConstructoresNoresteComponent } from './components/nivel-riesgo-constructores-noreste/nivel-riesgo-constructores-noreste.component';
import { NivelRiesgoConstructoresSuresteComponent } from './components/nivel-riesgo-constructores-sureste/nivel-riesgo-constructores-sureste.component';
import { NivelRiesgoConstruramaCentroComponent } from './components/nivel-riesgo-construrama-centro/nivel-riesgo-construrama-centro.component';
import { NivelRiesgoConstruramaNoresteComponent } from './components/nivel-riesgo-construrama-noreste/nivel-riesgo-construrama-noreste.component';
import { NivelRiesgoConstruramaPacificoComponent } from './components/nivel-riesgo-construrama-pacifico/nivel-riesgo-construrama-pacifico.component';
import { NivelRiesgoConstruramaSuresteComponent } from './components/nivel-riesgo-construrama-sureste/nivel-riesgo-construrama-sureste.component';
import { NivelRiesgoIndustrialesCentroComponent } from './components/nivel-riesgo-industriales-centro/nivel-riesgo-industriales-centro.component';
import { NivelRiesgoIndustrialesNoresteComponent } from './components/nivel-riesgo-industriales-noreste/nivel-riesgo-industriales-noreste.component';
import { NivelRiesgoIndustrialesPacificoComponent } from './components/nivel-riesgo-industriales-pacifico/nivel-riesgo-industriales-pacifico.component';
import { NivelRiesgoIndustrialesSuresteComponent } from './components/nivel-riesgo-industriales-sureste/nivel-riesgo-industriales-sureste.component';
import { NivelRiesgoNoOperativosCentroComponent } from './components/nivel-riesgo-no-operativos-centro/nivel-riesgo-no-operativos-centro.component';
import { NivelRiesgoNoOperativosNoresteComponent } from './components/nivel-riesgo-no-operativos-noreste/nivel-riesgo-no-operativos-noreste.component';
import { NivelRiesgoNoOperativosPacificoComponent } from './components/nivel-riesgo-no-operativos-pacifico/nivel-riesgo-no-operativos-pacifico.component';
import { NivelRiesgoNoOperativosSuresteComponent } from './components/nivel-riesgo-no-operativos-sureste/nivel-riesgo-no-operativos-sureste.component';
import { NivelRiesgoOperacionesCentroComponent } from './components/nivel-riesgo-operaciones-centro/nivel-riesgo-operaciones-centro.component';
import { NivelRiesgoOperacionesNoresteComponent } from './components/nivel-riesgo-operaciones-noreste/nivel-riesgo-operaciones-noreste.component';
import { NivelRiesgoOperacionesPacificoComponent } from './components/nivel-riesgo-operaciones-pacifico/nivel-riesgo-operaciones-pacifico.component';
import { NivelRiesgoOperacionesSuresteComponent } from './components/nivel-riesgo-operaciones-sureste/nivel-riesgo-operaciones-sureste.component';
import { NivelRiesgoPromexmaCentroComponent } from './components/nivel-riesgo-promexma-centro/nivel-riesgo-promexma-centro.component';
import { NivelRiesgoPromexmaNoresteComponent } from './components/nivel-riesgo-promexma-noreste/nivel-riesgo-promexma-noreste.component';
import { NivelRiesgoPromexmaPacificoComponent } from './components/nivel-riesgo-promexma-pacifico/nivel-riesgo-promexma-pacifico.component';
import { NivelRiesgoPromexmaSuresteComponent } from './components/nivel-riesgo-promexma-sureste/nivel-riesgo-promexma-sureste.component';
import { NivelRiesgoSuministroCentroComponent } from './components/nivel-riesgo-suministro-centro/nivel-riesgo-suministro-centro.component';
import { NivelRiesgoSuministroNoresteComponent } from './components/nivel-riesgo-suministro-noreste/nivel-riesgo-suministro-noreste.component';
import { NivelRiesgoSuministroPacificoComponent } from './components/nivel-riesgo-suministro-pacifico/nivel-riesgo-suministro-pacifico.component';
import { NivelRiesgoSuministroSuresteComponent } from './components/nivel-riesgo-suministro-sureste/nivel-riesgo-suministro-sureste.component';
import { NivelRiesgoTrasnporteCentroComponent } from './components/nivel-riesgo-trasnporte-centro/nivel-riesgo-trasnporte-centro.component';
import { NivelRiesgoTrasnporteNoresteComponent } from './components/nivel-riesgo-trasnporte-noreste/nivel-riesgo-trasnporte-noreste.component';
import { NivelRiesgoTrasnportePacificoComponent } from './components/nivel-riesgo-trasnporte-pacifico/nivel-riesgo-trasnporte-pacifico.component';
import { NivelRiesgoTrasnporteSuresteComponent } from './components/nivel-riesgo-trasnporte-sureste/nivel-riesgo-trasnporte-sureste.component';
import { IndustrialesNoresteComponent } from './components/industriales-noreste/industriales-noreste.component';
import { AgregarRegistroComponent } from './components/agregar-registro/agregar-registro.component';
import { AgregarPlantaComponent } from './components/agregar-planta/agregar-planta.component';
import { PlantasInactivasComponent } from './components/plantas-inactivas/plantas-inactivas.component';
import { ActualizarPlantaComponent } from './components/actualizar-planta/actualizar-planta.component';
import { AgregarRequerimientoComponent } from './components/agregar-requerimiento/agregar-requerimiento.component';
import { ActualizarRequerimientoComponent } from './components/actualizar-requerimiento/actualizar-requerimiento.component';
import { PlanmobilactivoComponent } from './components/planmobilactivo/planmobilactivo.component';
import { PlanmobilinactivoComponent } from './components/planmobilinactivo/planmobilinactivo.component';
import { ActualizarRegistroComponent } from './components/actualizar-registro/actualizar-registro.component';


const routes: Routes = [
  {path:'', redirectTo: 'loggin', pathMatch: 'full'},
  {path:'loggin', component: LooginComponent},
  {path:'plantas', component: PlantasComponent},
  {path:'inicio', component: InicioComponent},
  {path:'Zona-pacifico', component: ZonaPacificoComponent},
  {path:'Zona-noreste', component: ZonaNorteComponent},
  {path:'Zona-sureste', component: ZonaSuresteComponent},
  {path:'Zona-centro', component: ZonaCentroComponent},
  {path:'plantas', component: PlantasComponent},
  {path:'permisos', component: PermisosComponent},
  {path:'registro-permisos', component: RegistroPermisoComponent},
  {path:'constructores', component: SegmentoConstructoresComponent},
  {path:'cadena-suministros', component: SegmentoCadenaSuministroComponent},
  {path:'riesgo-constructores', component: RiesgoConstructoresComponent},
  {path:'cadena-suministros', component: SegmentoCadenaSuministroComponent},
  {path:'constructores-pacifico', component: ConstructoresPacificoComponent},
  {path:'constructores-centro', component: ConstructoresCentroComponent },
  {path:'constructores-sureste', component: ConstructoresSuresteComponent},
  {path:'constructores-noreste', component: ConstructoresNoresteComponent},
  {path:'suministro-pacifico', component: SuministroPacificoComponent },
  {path:'suministro-centro', component: SuministroCentroComponent },
  {path:'suministro-sureste', component:  SuministroSuresteComponent},
  {path:'suministro-noreste', component: SuministroNoresteComponent },
  {path:'construrama-pacifico', component: ConstruramaPacificoComponent },
  {path:'construrama-centro', component: ConstruramaCentroComponent },
  {path:'construrama-sureste', component: ConstruramaSuresteComponent },
  {path:'construrama-noreste', component: ConstruramaNoresteComponent },
  {path:'industriales-pacifico', component:IndustrialesPacificoComponent },
  {path:'industriales-centro', component: IndustrialesCentroComponent },
  {path:'industriales-sureste', component: IndustrialesSuresteComponent },
  {path:'industriales-noreste', component: IndustrialesNoresteComponent },
  {path:'no-operativo-pacifico', component: NoOperativosPacificoComponent },
  {path:'no-operativo-centro', component: NoOperativosCentroComponent },
  {path:'no-operativo-sureste', component: NoOperativosSuresteComponent },
  {path:'no-operativo-noreste', component: NoOperativosNoresteComponent },
  {path:'operaciones-pacifico', component: OperacionesPacificoComponent },
  {path:'operaciones-centro', component: OperacionesCentroComponent },
  {path:'operaciones-sureste', component: OperacionesSuresteComponent },
  {path:'operaciones-noreste', component: OperacionesNoresteComponent },
  {path:'promexma-pacifico', component: PromexmaPacificoComponent },
  {path:'promexma-centro', component: PromexmaCentroComponent},
  {path:'promexma-sureste', component: PromexmaSuresteComponent },
  {path:'promexma-noreste', component: PromexmaNoresteComponent },
  {path:'transporte-pacifico', component: TransportePacificoComponent },
  {path:'transporte-centro', component: TransporteCentroComponent },
  {path:'transporte-sureste', component: TransporteSuresteComponent },
  {path:'transporte-noreste', component: TransporteNoresteComponent},
  {path:'graficas-constructores-centro', component: GraficasConstructoresCentroComponent},
  {path:'graficas-constructores-noreste', component: GraficasConstructoresNoresteComponent},
  {path:'graficas-constructores-pacifico', component: GraficasConstructoresPacificoComponent},
  {path:'graficas-constructores-sureste', component: GraficasConstructoresSuresteComponent},
  {path:'graficas-construrama-centro', component: GraficasConstruramaCentroComponent},
  {path:'graficas-construrama-noreste', component: GraficasConstruramaNoresteComponent},
  {path:'graficas-construrama-pacifico', component: GraficasConstruramaPacificoComponent},
  {path:'graficas-construrama-sureste', component: GraficasConstruramaSuresteComponent},
  {path:'graficas-industriales-centro', component: GraficasIndustrialesCentroComponent},
  {path:'graficas-industriales-pacifico', component: GraficasIndustrialesPacificoComponent},
  {path:'graficas-industriales-noreste', component: GraficasIndustrialesNoresteComponent},
  {path:'graficas-industriales-sureste', component: GraficasIndustrialesSuresteComponent},
  {path:'graficas-no-operativos-centro', component: GraficasNoOperativosCentroComponent},
  {path:'graficas-no-operativos-noreste', component: GraficasNoOperativosNoresteComponent},
  {path:'graficas-no-operativos-pacifico', component: GraficasNoOperativosPacificoComponent},
  {path:'graficas-no-operativos-sureste', component: GraficasNoOperativosSuresteComponent},
  {path:'graficas-operaciones-centro', component: GraficasOperacionesCentroComponent},
  {path:'graficas-operaciones-noreste', component: GraficasOperacionesNoresteComponent},
  {path:'graficas-operaciones-pacifico', component: GraficasOperacionesPacificoComponent},
  {path:'graficas-operaciones-sureste', component: GraficasOperacionesSuresteComponent},
  {path:'graficas-promexma-centro', component: GraficasPromexmaCentroComponent},
  {path:'graficas-promexma-noreste', component: GraficasPromexmaNoresteComponent},
  {path:'graficas-promexma-pacifico', component: GraficasPromexmaPacificoComponent},
  {path:'graficas-promexma-sureste', component: GraficasPromexmaSuresteComponent},
  {path:'graficas-suministro-centro', component: GraficasSuministroCentroComponent},
  {path:'graficas-suministro-noreste', component: GraficasSuministroNoresteComponent},
  {path:'graficas-suministro-pacifico', component: GraficasSuministroPacificoComponent},
  {path:'graficas-suministro-sureste', component: GraficasSuministroSuresteComponent},
  {path:'graficas-transporte-centro', component: GraficasTransporteCentroComponent},
  {path:'graficas-transporte-noreste', component: GraficasTransporteNoresteComponent},
  {path:'graficas-transporte-pacifico', component: GraficasTransportePacificoComponent},
  {path:'graficas-transporte-sureste', component: GraficasTransporteSuresteComponent},
  {path:'nivel-riesgo-constructores-pacifico', component: NivelRiesgoConstructoresPacificoComponent},
  {path:'nivel-riesgo-constructores-centro', component: NivelRiesgoConstructoresCentroComponent},
  {path:'nivel-riesgo-constructores-noreste', component: NivelRiesgoConstructoresNoresteComponent},
  {path:'nivel-riesgo-constructores-sureste', component: NivelRiesgoConstructoresSuresteComponent},
  {path:'nivel-riesgo-construrama-centro', component: NivelRiesgoConstruramaCentroComponent},
  {path:'nivel-riesgo-construrama-noreste', component: NivelRiesgoConstruramaNoresteComponent},
  {path:'nivel-riesgo-construrama-pacifico', component: NivelRiesgoConstruramaPacificoComponent},
  {path:'nivel-riesgo-construrama-sureste', component: NivelRiesgoConstruramaSuresteComponent},
  {path:'nivel-riesgo-industriales-centro', component: NivelRiesgoIndustrialesCentroComponent},
  {path:'nivel-riesgo-industriales-noreste', component: NivelRiesgoIndustrialesNoresteComponent},
  {path:'nivel-riesgo-industriales-pacifico', component: NivelRiesgoIndustrialesPacificoComponent},
  {path:'nivel-riesgo-industriales-sureste', component: NivelRiesgoIndustrialesSuresteComponent},
  {path:'nivel-riesgo-no-operativos-centro', component: NivelRiesgoNoOperativosCentroComponent},
  {path:'nivel-riesgo-no-operativos-noreste', component: NivelRiesgoNoOperativosNoresteComponent},
  {path:'nivel-riesgo-no-operativos-pacifico', component: NivelRiesgoNoOperativosPacificoComponent},
  {path:'nivel-riesgo-no-operativos-sureste', component: NivelRiesgoNoOperativosSuresteComponent},
  {path:'nivel-riesgo-operaciones-centro', component: NivelRiesgoOperacionesCentroComponent},
  {path:'nivel-riesgo-operaciones-noreste', component: NivelRiesgoOperacionesNoresteComponent},
  {path:'nivel-riesgo-operaciones-pacifico', component: NivelRiesgoOperacionesPacificoComponent},
  {path:'nivel-riesgo-operaciones-sureste', component: NivelRiesgoOperacionesSuresteComponent},
  {path:'nivel-riesgo-promexma-centro', component: NivelRiesgoPromexmaCentroComponent},
  {path:'nivel-riesgo-promexma-noreste', component: NivelRiesgoPromexmaNoresteComponent},
  {path:'nivel-riesgo-promexma-pacifico', component: NivelRiesgoPromexmaPacificoComponent},
  {path:'nivel-riesgo-promexma-sureste', component: NivelRiesgoPromexmaSuresteComponent},
  {path:'nivel-riesgo-suministro-centro', component: NivelRiesgoSuministroCentroComponent},
  {path:'nivel-riesgo-suministro-noreste', component: NivelRiesgoSuministroNoresteComponent},
  {path:'nivel-riesgo-suministro-pacifico', component: NivelRiesgoSuministroPacificoComponent},
  {path:'nivel-riesgo-suministro-sureste', component: NivelRiesgoSuministroSuresteComponent},
  {path:'nivel-riesgo-transporte-centro', component: NivelRiesgoTrasnporteCentroComponent},
  {path:'nivel-riesgo-transporte-noreste', component: NivelRiesgoTrasnporteNoresteComponent},
  {path:'nivel-riesgo-transporte-pacifico', component: NivelRiesgoTrasnportePacificoComponent},
  {path:'nivel-riesgo-transporte-sureste', component: NivelRiesgoTrasnporteSuresteComponent},
  {path: 'agregar-registro', component: AgregarRegistroComponent},
  {path: 'agregar-planta', component: AgregarPlantaComponent},
  {path: 'plantas-inactivas', component: PlantasInactivasComponent},
  {path: 'actualizar-planta', component: ActualizarPlantaComponent},
  {path: 'actualizar-planta/:id_planta', component: ActualizarPlantaComponent},
  {path: 'agregar-permiso', component: AgregarRequerimientoComponent},
  {path: 'registro-permiso', component:RegistroPermisoComponent},
  {path: 'actualizar-requerimiento/:id_requerimiento', component:ActualizarRequerimientoComponent},
  {path:'planmobilactivo',component:PlanmobilactivoComponent},
  {path:'planmobilinactivo',component:PlanmobilinactivoComponent},
  {path: 'actualizar-registro', component:ActualizarRegistroComponent},
  {path: 'actualizar-registro/:id_registro', component: ActualizarRegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
