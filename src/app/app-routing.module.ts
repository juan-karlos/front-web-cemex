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
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { DescargaArchivosComponent } from './components/descarga-archivos/descarga-archivos.component';
import { seguridadGuard } from './seguridad.guard';
import { NacionalComponent } from './components/nacional/nacional.component';
import { RegistrosCentroComponent } from './components/registros-centro/registros-centro.component';
import { RegistrosNoresteComponent } from './components/registros-noreste/registros-noreste.component';
import { RegistrosPacificoComponent } from './components/registros-pacifico/registros-pacifico.component';
import { RegistrosSuresteComponent } from './components/registros-sureste/registros-sureste.component';
import { ConstructoresNacionalComponent } from './components/constructores-nacional/constructores-nacional.component';
import { SuministroNacionalComponent } from './components/suministro-nacional/suministro-nacional.component';
import { IndustrialesNacionalComponent } from './components/industriales-nacional/industriales-nacional.component';
import { NoOperativosNacionalComponent } from './components/no-operativos-nacional/no-operativos-nacional.component';
import { OperacionesNacionalComponent } from './components/operaciones-nacional/operaciones-nacional.component';
import { PromexmaNacionalComponent } from './components/promexma-nacional/promexma-nacional.component';
import { TransporteNacionalComponent } from './components/transporte-nacional/transporte-nacional.component';
import { GraficasConstructoresNacionalComponent } from './components/graficas-constructores-nacional/graficas-constructores-nacional.component';
import { GraficasIndustrialesNacionalComponent } from './components/graficas-industriales-nacional/graficas-industriales-nacional.component';
import { GraficasNoOperativosNacionalComponent } from './components/graficas-no-operativos-nacional/graficas-no-operativos-nacional.component';
import { GraficasOperacionesNacionalComponent } from './components/graficas-operaciones-nacional/graficas-operaciones-nacional.component';
import { GraficasPromexmaNacionalComponent } from './components/graficas-promexma-nacional/graficas-promexma-nacional.component';
import { GraficasSuministroNacionalComponent } from './components/graficas-suministro-nacional/graficas-suministro-nacional.component';
import { GraficasTransporteNacionalComponent } from './components/graficas-transporte-nacional/graficas-transporte-nacional.component';
import { NivelRiesgoConstructoresNacionalComponent } from './components/nivel-riesgo-constructores-nacional/nivel-riesgo-constructores-nacional.component';
import { NivelRiesgoIndustrialesNacionalComponent } from './components/nivel-riesgo-industriales-nacional/nivel-riesgo-industriales-nacional.component';
import { NivelRiesgoNoOperativosNacionalComponent } from './components/nivel-riesgo-no-operativos-nacional/nivel-riesgo-no-operativos-nacional.component';
import { NivelRiesgoOperacionesNacionalComponent } from './components/nivel-riesgo-operaciones-nacional/nivel-riesgo-operaciones-nacional.component';
import { NivelRiesgoPromexmaNacionalComponent } from './components/nivel-riesgo-promexma-nacional/nivel-riesgo-promexma-nacional.component';
import { NivelRiesgoSuministroNacionalComponent } from './components/nivel-riesgo-suministro-nacional/nivel-riesgo-suministro-nacional.component';
import { NivelRiesgoTransporteNacionalComponent } from './components/nivel-riesgo-transporte-nacional/nivel-riesgo-transporte-nacional.component';


const routes: Routes = [
  {path:'', redirectTo: 'loggin', pathMatch: 'full'},
  {path:'loggin', component: LooginComponent},
  {path:'plantas', component: PlantasComponent, canActivate: [seguridadGuard]},
  {path:'inicio', component: InicioComponent, canActivate: [seguridadGuard]},
  {path:'Zona-pacifico', component: ZonaPacificoComponent, canActivate: [seguridadGuard]},
  {path:'Zona-noreste', component: ZonaNorteComponent, canActivate: [seguridadGuard]},
  {path:'Zona-sureste', component: ZonaSuresteComponent, canActivate: [seguridadGuard]},
  {path:'Zona-centro', component: ZonaCentroComponent, canActivate: [seguridadGuard]},
  {path:'plantas', component: PlantasComponent, canActivate: [seguridadGuard]},
  {path:'permisos', component: PermisosComponent, canActivate: [seguridadGuard]},
  {path:'registro-permisos', component: RegistroPermisoComponent, canActivate: [seguridadGuard]},
  {path:'constructores', component: SegmentoConstructoresComponent, canActivate: [seguridadGuard]},
  {path:'cadena-suministros', component: SegmentoCadenaSuministroComponent, canActivate: [seguridadGuard]},
  {path:'riesgo-constructores', component: RiesgoConstructoresComponent, canActivate: [seguridadGuard]},
  {path:'cadena-suministros', component: SegmentoCadenaSuministroComponent, canActivate: [seguridadGuard]},
  {path:'constructores-pacifico', component: ConstructoresPacificoComponent, canActivate: [seguridadGuard]},
  {path:'constructores-centro', component: ConstructoresCentroComponent, canActivate: [seguridadGuard] },
  {path:'constructores-nacional', component: ConstructoresNacionalComponent, canActivate: [seguridadGuard]},
  {path:'constructores-sureste', component: ConstructoresSuresteComponent, canActivate: [seguridadGuard]},
  {path:'constructores-noreste', component: ConstructoresNoresteComponent, canActivate: [seguridadGuard]},
  {path:'suministro-pacifico', component: SuministroPacificoComponent, canActivate: [seguridadGuard] },
  {path:'suministro-nacional', component: SuministroNacionalComponent, canActivate: [seguridadGuard] },
  {path:'suministro-centro', component: SuministroCentroComponent, canActivate: [seguridadGuard] },
  {path:'suministro-sureste', component:  SuministroSuresteComponent, canActivate: [seguridadGuard]},
  {path:'suministro-noreste', component: SuministroNoresteComponent, canActivate: [seguridadGuard] },
  {path:'construrama-pacifico', component: ConstruramaPacificoComponent, canActivate: [seguridadGuard] },
  {path:'construrama-centro', component: ConstruramaCentroComponent, canActivate: [seguridadGuard] },
  {path:'construrama-sureste', component: ConstruramaSuresteComponent, canActivate: [seguridadGuard] },
  {path:'construrama-noreste', component: ConstruramaNoresteComponent, canActivate: [seguridadGuard] },
  {path:'industriales-pacifico', component:IndustrialesPacificoComponent, canActivate: [seguridadGuard] },
  {path:'industriales-nacional', component:IndustrialesNacionalComponent, canActivate: [seguridadGuard] },
  {path:'industriales-centro', component: IndustrialesCentroComponent, canActivate: [seguridadGuard] },
  {path:'industriales-sureste', component: IndustrialesSuresteComponent, canActivate: [seguridadGuard] },
  {path:'industriales-noreste', component: IndustrialesNoresteComponent, canActivate: [seguridadGuard] },
  {path:'no-operativo-pacifico', component: NoOperativosPacificoComponent, canActivate: [seguridadGuard] },
  {path:'no-operativo-nacional', component: NoOperativosNacionalComponent, canActivate: [seguridadGuard] },
  {path:'no-operativo-centro', component: NoOperativosCentroComponent, canActivate: [seguridadGuard] },
  {path:'no-operativo-sureste', component: NoOperativosSuresteComponent, canActivate: [seguridadGuard] },
  {path:'no-operativo-noreste', component: NoOperativosNoresteComponent, canActivate: [seguridadGuard] },
  {path:'operaciones-pacifico', component: OperacionesPacificoComponent, canActivate: [seguridadGuard] },
  {path:'operaciones-nacional', component: OperacionesNacionalComponent, canActivate: [seguridadGuard] },
  {path:'operaciones-centro', component: OperacionesCentroComponent, canActivate: [seguridadGuard] },
  {path:'operaciones-sureste', component: OperacionesSuresteComponent, canActivate: [seguridadGuard] },
  {path:'operaciones-noreste', component: OperacionesNoresteComponent, canActivate: [seguridadGuard] },
  {path:'promexma-nacional', component: PromexmaNacionalComponent, canActivate: [seguridadGuard] },
  {path:'promexma-pacifico', component: PromexmaPacificoComponent, canActivate: [seguridadGuard] },
  {path:'promexma-centro', component: PromexmaCentroComponent, canActivate: [seguridadGuard]},
  {path:'promexma-sureste', component: PromexmaSuresteComponent, canActivate: [seguridadGuard] },
  {path:'promexma-noreste', component: PromexmaNoresteComponent, canActivate: [seguridadGuard] },
  {path:'transporte-pacifico', component: TransportePacificoComponent, canActivate: [seguridadGuard] },
  {path:'transporte-nacional', component: TransporteNacionalComponent, canActivate: [seguridadGuard] },
  {path:'transporte-centro', component: TransporteCentroComponent, canActivate: [seguridadGuard] },
  {path:'transporte-sureste', component: TransporteSuresteComponent, canActivate: [seguridadGuard] },
  {path:'transporte-noreste', component: TransporteNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-constructores-centro', component: GraficasConstructoresCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-constructores-noreste', component: GraficasConstructoresNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-constructores-pacifico', component: GraficasConstructoresPacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-constructores-nacional', component: GraficasConstructoresNacionalComponent, canActivate: [seguridadGuard]},
  {path:'graficas-constructores-sureste', component: GraficasConstructoresSuresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-construrama-centro', component: GraficasConstruramaCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-construrama-noreste', component: GraficasConstruramaNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-construrama-pacifico', component: GraficasConstruramaPacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-construrama-sureste', component: GraficasConstruramaSuresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-industriales-centro', component: GraficasIndustrialesCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-industriales-pacifico', component: GraficasIndustrialesPacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-industriales-nacional', component: GraficasIndustrialesNacionalComponent, canActivate: [seguridadGuard]},
  {path:'graficas-industriales-noreste', component: GraficasIndustrialesNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-industriales-sureste', component: GraficasIndustrialesSuresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-no-operativos-centro', component: GraficasNoOperativosCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-no-operativos-noreste', component: GraficasNoOperativosNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-no-operativos-nacional', component: GraficasNoOperativosNacionalComponent, canActivate: [seguridadGuard]},
  {path:'graficas-no-operativos-pacifico', component: GraficasNoOperativosPacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-no-operativos-sureste', component: GraficasNoOperativosSuresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-operaciones-centro', component: GraficasOperacionesCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-operaciones-nacional', component: GraficasOperacionesNacionalComponent, canActivate: [seguridadGuard]},
  {path:'graficas-operaciones-noreste', component: GraficasOperacionesNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-operaciones-pacifico', component: GraficasOperacionesPacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-operaciones-sureste', component: GraficasOperacionesSuresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-promexma-centro', component: GraficasPromexmaCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-promexma-noreste', component: GraficasPromexmaNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-promexma-pacifico', component: GraficasPromexmaPacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-promexma-nacional', component: GraficasPromexmaNacionalComponent, canActivate: [seguridadGuard]},
  {path:'graficas-promexma-sureste', component: GraficasPromexmaSuresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-suministro-centro', component: GraficasSuministroCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-suministro-noreste', component: GraficasSuministroNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-suministro-pacifico', component: GraficasSuministroPacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-suministro-nacional', component: GraficasSuministroNacionalComponent, canActivate: [seguridadGuard]},
  {path:'graficas-suministro-sureste', component: GraficasSuministroSuresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-transporte-centro', component: GraficasTransporteCentroComponent, canActivate: [seguridadGuard]},
  {path:'graficas-transporte-noreste', component: GraficasTransporteNoresteComponent, canActivate: [seguridadGuard]},
  {path:'graficas-transporte-nacional', component: GraficasTransporteNacionalComponent, canActivate: [seguridadGuard]},
  {path:'graficas-transporte-pacifico', component: GraficasTransportePacificoComponent, canActivate: [seguridadGuard]},
  {path:'graficas-transporte-sureste', component: GraficasTransporteSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-constructores-pacifico', component: NivelRiesgoConstructoresPacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-constructores-nacional', component: NivelRiesgoConstructoresNacionalComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-constructores-centro', component: NivelRiesgoConstructoresCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-constructores-noreste', component: NivelRiesgoConstructoresNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-constructores-sureste', component: NivelRiesgoConstructoresSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-construrama-centro', component: NivelRiesgoConstruramaCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-construrama-noreste', component: NivelRiesgoConstruramaNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-construrama-pacifico', component: NivelRiesgoConstruramaPacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-construrama-sureste', component: NivelRiesgoConstruramaSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-industriales-centro', component: NivelRiesgoIndustrialesCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-industriales-noreste', component: NivelRiesgoIndustrialesNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-industriales-nacional', component: NivelRiesgoIndustrialesNacionalComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-industriales-pacifico', component: NivelRiesgoIndustrialesPacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-industriales-sureste', component: NivelRiesgoIndustrialesSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-no-operativos-centro', component: NivelRiesgoNoOperativosCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-no-operativos-nacional', component: NivelRiesgoNoOperativosNacionalComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-no-operativos-noreste', component: NivelRiesgoNoOperativosNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-no-operativos-pacifico', component: NivelRiesgoNoOperativosPacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-no-operativos-sureste', component: NivelRiesgoNoOperativosSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-operaciones-centro', component: NivelRiesgoOperacionesCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-operaciones-nacional', component: NivelRiesgoOperacionesNacionalComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-operaciones-noreste', component: NivelRiesgoOperacionesNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-operaciones-pacifico', component: NivelRiesgoOperacionesPacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-operaciones-sureste', component: NivelRiesgoOperacionesSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-promexma-centro', component: NivelRiesgoPromexmaCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-promexma-nacional', component: NivelRiesgoPromexmaNacionalComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-promexma-noreste', component: NivelRiesgoPromexmaNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-promexma-pacifico', component: NivelRiesgoPromexmaPacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-promexma-sureste', component: NivelRiesgoPromexmaSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-suministro-centro', component: NivelRiesgoSuministroCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-suministro-nacional', component: NivelRiesgoSuministroNacionalComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-suministro-noreste', component: NivelRiesgoSuministroNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-suministro-pacifico', component: NivelRiesgoSuministroPacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-suministro-sureste', component: NivelRiesgoSuministroSuresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-transporte-centro', component: NivelRiesgoTrasnporteCentroComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-transporte-noreste', component: NivelRiesgoTrasnporteNoresteComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-transporte-nacional', component: NivelRiesgoTransporteNacionalComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-transporte-pacifico', component: NivelRiesgoTrasnportePacificoComponent, canActivate: [seguridadGuard]},
  {path:'nivel-riesgo-transporte-sureste', component: NivelRiesgoTrasnporteSuresteComponent, canActivate: [seguridadGuard]},
  {path: 'agregar-registro', component: AgregarRegistroComponent, canActivate: [seguridadGuard]},
  {path: 'agregar-planta', component: AgregarPlantaComponent, canActivate: [seguridadGuard]},
  {path: 'plantas-inactivas', component: PlantasInactivasComponent, canActivate: [seguridadGuard]},
  {path: 'actualizar-planta', component: ActualizarPlantaComponent, canActivate: [seguridadGuard]},
  {path: 'actualizar-planta/:id_planta', component: ActualizarPlantaComponent, canActivate: [seguridadGuard]},
  {path: 'agregar-permiso', component: AgregarRequerimientoComponent, canActivate: [seguridadGuard]},
  {path: 'registro-permiso', component:RegistroPermisoComponent, canActivate: [seguridadGuard]},
  {path: 'actualizar-requerimiento/:id_requerimiento', component:ActualizarRequerimientoComponent, canActivate: [seguridadGuard]},
  {path:'planmobilactivo',component:PlanmobilactivoComponent, canActivate: [seguridadGuard]},
  {path:'planmobilinactivo',component:PlanmobilinactivoComponent, canActivate: [seguridadGuard]},
  {path: 'actualizar-registro', component:ActualizarRegistroComponent, canActivate: [seguridadGuard]},
  {path: 'actualizar-registro/:id_registro', component: ActualizarRegistroComponent, canActivate: [seguridadGuard] },
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent, canActivate: [seguridadGuard] },
  {path: 'descarga', component: DescargaArchivosComponent, canActivate: [seguridadGuard] },
  {path: 'nacional', component: NacionalComponent, canActivate: [seguridadGuard] },
  {path: 'registros-centro', component: RegistrosCentroComponent, canActivate: [seguridadGuard] },
  {path: 'registros-noreste', component: RegistrosNoresteComponent, canActivate: [seguridadGuard] },
  {path: 'registros-pacifico', component: RegistrosPacificoComponent, canActivate: [seguridadGuard] },
  {path: 'registros-sureste', component: RegistrosSuresteComponent, canActivate: [seguridadGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
