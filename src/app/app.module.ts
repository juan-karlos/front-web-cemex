import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LooginComponent } from './components/loogin/loogin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ZonaPacificoComponent } from './components/zona-pacifico/zona-pacifico.component';
import { ZonaNorteComponent } from './components/zona-norte/zona-norte.component';

@NgModule({
  declarations: [
    AppComponent,
    LooginComponent,
    InicioComponent,
    ZonaPacificoComponent,
    ZonaNorteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
