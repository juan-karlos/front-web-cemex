import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LooginComponent } from './components/loogin/loogin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ZonaPacificoComponent } from './components/zona-pacifico/zona-pacifico.component';
import { ZonaNorteComponent } from './components/zona-norte/zona-norte.component';
import { ZonaCentroComponent } from './components/zona-centro/zona-centro.component';
import { ZonaSuresteComponent } from './components/zona-sureste/zona-sureste.component';
import { InformeAnualComponent } from './components/informe-anual/informe-anual.component';
import { SegmentoConstructoresComponent } from './components/segmento-constructores/segmento-constructores.component';
import { SegmentoCadenaSuministroComponent } from './components/segmento-cadena-suministro/segmento-cadena-suministro.component';
import { NgChartsModule } from 'ng2-charts';
import { PlantasComponent } from './components/plantas/plantas.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { RegistroPermisoComponent } from './components/registro-permiso/registro-permiso.component';
import { RiesgoConstructoresComponent } from './components/riesgo-constructores/riesgo-constructores.component';

@NgModule({
  declarations: [
    AppComponent,
    LooginComponent,
    InicioComponent,
    ZonaPacificoComponent,
    ZonaNorteComponent,
    ZonaCentroComponent,
    ZonaSuresteComponent,
    InformeAnualComponent,
    SegmentoConstructoresComponent,
    SegmentoCadenaSuministroComponent,
    PlantasComponent,
    PermisosComponent,
    RegistroPermisoComponent,
    RiesgoConstructoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
