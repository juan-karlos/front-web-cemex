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
  {path:'cadena-suministros', component: SegmentoCadenaSuministroComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
