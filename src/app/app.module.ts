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

@NgModule({
  declarations: [
    AppComponent,
    LooginComponent,
    InicioComponent,
    ZonaPacificoComponent,
    ZonaNorteComponent,
    ZonaCentroComponent,
    ZonaSuresteComponent,
    InformeAnualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
