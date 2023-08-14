import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LooginComponent } from './components/loogin/loogin.component';
import { ZonaPacificoComponent } from './components/zona-pacifico/zona-pacifico.component';
import { ZonaNorteComponent } from './components/zona-norte/zona-norte.component';
import { ZonaSuresteComponent } from './components/zona-sureste/zona-sureste.component';
import { ZonaCentroComponent } from './components/zona-centro/zona-centro.component';
import { SegmentoConstructoresComponent } from './components/segmento-constructores/segmento-constructores.component';

const routes: Routes = [
  {path:'', redirectTo: 'loggin', pathMatch: 'full'},
  {path:'cerrar-sesion', component: LooginComponent},
  {path:'inicio', component: InicioComponent},
  {path:'Zona-pacifico', component: ZonaPacificoComponent},
  {path:'Zona-noreste', component: ZonaNorteComponent},
  {path:'Zona-sureste', component: ZonaSuresteComponent},
  {path:'Zona-centro', component: ZonaCentroComponent},
  {path:'constructores', component: SegmentoConstructoresComponent}
  

  



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
