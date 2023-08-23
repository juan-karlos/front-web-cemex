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

const routes: Routes = [
  {path:'', redirectTo: 'loggin', pathMatch: 'full'},
  {path:'loggin', component: LooginComponent},
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
  {path:'constructores-pnoreste', component: ConstructoresNoresteComponent},
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
  {path:'industriales-noreste', component: IndustrialesSuresteComponent },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
