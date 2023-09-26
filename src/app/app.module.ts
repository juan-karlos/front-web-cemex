import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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
import { ConstructoresPacificoComponent } from './components/constructores-pacifico/constructores-pacifico.component';
import { SuministroPacificoComponent } from './components/suministro-pacifico/suministro-pacifico.component';
import { ConstruramaPacificoComponent } from './components/construrama-pacifico/construrama-pacifico.component';
import { NoOperativosPacificoComponent } from './components/no-operativos-pacifico/no-operativos-pacifico.component';
import { IndustrialesPacificoComponent } from './components/industriales-pacifico/industriales-pacifico.component';
import { OperacionesPacificoComponent } from './components/operaciones-pacifico/operaciones-pacifico.component';
import { PromexmaPacificoComponent } from './components/promexma-pacifico/promexma-pacifico.component';
import { TransportePacificoComponent } from './components/transporte-pacifico/transporte-pacifico.component';
import { ConstructoresCentroComponent } from './components/constructores-centro/constructores-centro.component';
import { ConstructoresSuresteComponent } from './components/constructores-sureste/constructores-sureste.component';
import { ConstructoresNoresteComponent } from './components/constructores-noreste/constructores-noreste.component';
import { SuministroCentroComponent } from './components/suministro-centro/suministro-centro.component';
import { SuministroSuresteComponent } from './components/suministro-sureste/suministro-sureste.component';
import { SuministroNoresteComponent } from './components/suministro-noreste/suministro-noreste.component';
import { ConstruramaCentroComponent } from './components/construrama-centro/construrama-centro.component';
import { ConstruramaSuresteComponent } from './components/construrama-sureste/construrama-sureste.component';
import { ConstruramaNoresteComponent } from './components/construrama-noreste/construrama-noreste.component';
import { NoOperativosCentroComponent } from './components/no-operativos-centro/no-operativos-centro.component';
import { NoOperativosSuresteComponent } from './components/no-operativos-sureste/no-operativos-sureste.component';
import { NoOperativosNoresteComponent } from './components/no-operativos-noreste/no-operativos-noreste.component';
import { IndustrialesCentroComponent } from './components/industriales-centro/industriales-centro.component';
import { IndustrialesSuresteComponent } from './components/industriales-sureste/industriales-sureste.component';
import { IndustrialesNoresteComponent } from './components/industriales-noreste/industriales-noreste.component';
import { OperacionesCentroComponent } from './components/operaciones-centro/operaciones-centro.component';
import { OperacionesSuresteComponent } from './components/operaciones-sureste/operaciones-sureste.component';
import { OperacionesNoresteComponent } from './components/operaciones-noreste/operaciones-noreste.component';
import { PromexmaCentroComponent } from './components/promexma-centro/promexma-centro.component';
import { PromexmaSuresteComponent } from './components/promexma-sureste/promexma-sureste.component';
import { PromexmaNoresteComponent } from './components/promexma-noreste/promexma-noreste.component';
import { TransporteCentroComponent } from './components/transporte-centro/transporte-centro.component';
import { TransporteSuresteComponent } from './components/transporte-sureste/transporte-sureste.component';
import { TransporteNoresteComponent } from './components/transporte-noreste/transporte-noreste.component';
import { GraficasSuministroPacificoComponent } from './components/graficas-suministro-pacifico/graficas-suministro-pacifico.component';
import { GraficasSuministroCentroComponent } from './components/graficas-suministro-centro/graficas-suministro-centro.component';
import { GraficasSuministroSuresteComponent } from './components/graficas-suministro-sureste/graficas-suministro-sureste.component';
import { GraficasSuministroNoresteComponent } from './components/graficas-suministro-noreste/graficas-suministro-noreste.component';
import { GraficasConstructoresPacificoComponent } from './components/graficas-constructores-pacifico/graficas-constructores-pacifico.component';
import { GraficasConstructoresCentroComponent } from './components/graficas-constructores-centro/graficas-constructores-centro.component';
import { GraficasConstructoresSuresteComponent } from './components/graficas-constructores-sureste/graficas-constructores-sureste.component';
import { GraficasConstructoresNoresteComponent } from './components/graficas-constructores-noreste/graficas-constructores-noreste.component';
import { GraficasConstruramaPacificoComponent } from './components/graficas-construrama-pacifico/graficas-construrama-pacifico.component';
import { GraficasConstruramaCentroComponent } from './components/graficas-construrama-centro/graficas-construrama-centro.component';
import { GraficasConstruramaSuresteComponent } from './components/graficas-construrama-sureste/graficas-construrama-sureste.component';
import { GraficasConstruramaNoresteComponent } from './components/graficas-construrama-noreste/graficas-construrama-noreste.component';
import { GraficasIndustrialesPacificoComponent } from './components/graficas-industriales-pacifico/graficas-industriales-pacifico.component';
import { GraficasIndustrialesCentroComponent } from './components/graficas-industriales-centro/graficas-industriales-centro.component';
import { GraficasIndustrialesSuresteComponent } from './components/graficas-industriales-sureste/graficas-industriales-sureste.component';
import { GraficasIndustrialesNoresteComponent } from './components/graficas-industriales-noreste/graficas-industriales-noreste.component';
import { GraficasNoOperativosPacificoComponent } from './components/graficas-no-operativos-pacifico/graficas-no-operativos-pacifico.component';
import { GraficasNoOperativosCentroComponent } from './components/graficas-no-operativos-centro/graficas-no-operativos-centro.component';
import { GraficasNoOperativosSuresteComponent } from './components/graficas-no-operativos-sureste/graficas-no-operativos-sureste.component';
import { GraficasNoOperativosNoresteComponent } from './components/graficas-no-operativos-noreste/graficas-no-operativos-noreste.component';
import { GraficasOperacionesPacificoComponent } from './components/graficas-operaciones-pacifico/graficas-operaciones-pacifico.component';
import { GraficasOperacionesCentroComponent } from './components/graficas-operaciones-centro/graficas-operaciones-centro.component';
import { GraficasOperacionesSuresteComponent } from './components/graficas-operaciones-sureste/graficas-operaciones-sureste.component';
import { GraficasOperacionesNoresteComponent } from './components/graficas-operaciones-noreste/graficas-operaciones-noreste.component';
import { GraficasPromexmaPacificoComponent } from './components/graficas-promexma-pacifico/graficas-promexma-pacifico.component';
import { GraficasPromexmaCentroComponent } from './components/graficas-promexma-centro/graficas-promexma-centro.component';
import { GraficasPromexmaSuresteComponent } from './components/graficas-promexma-sureste/graficas-promexma-sureste.component';
import { GraficasPromexmaNoresteComponent } from './components/graficas-promexma-noreste/graficas-promexma-noreste.component';
import { GraficasTransportePacificoComponent } from './components/graficas-transporte-pacifico/graficas-transporte-pacifico.component';
import { GraficasTransporteCentroComponent } from './components/graficas-transporte-centro/graficas-transporte-centro.component';
import { GraficasTransporteSuresteComponent } from './components/graficas-transporte-sureste/graficas-transporte-sureste.component';
import { GraficasTransporteNoresteComponent } from './components/graficas-transporte-noreste/graficas-transporte-noreste.component';
import { NivelRiesgoSuministroPacificoComponent } from './components/nivel-riesgo-suministro-pacifico/nivel-riesgo-suministro-pacifico.component';
import { NivelRiesgoSuministroCentroComponent } from './components/nivel-riesgo-suministro-centro/nivel-riesgo-suministro-centro.component';
import { NivelRiesgoSuministroSuresteComponent } from './components/nivel-riesgo-suministro-sureste/nivel-riesgo-suministro-sureste.component';
import { NivelRiesgoSuministroNoresteComponent } from './components/nivel-riesgo-suministro-noreste/nivel-riesgo-suministro-noreste.component';
import { NivelRiesgoConstructoresPacificoComponent } from './components/nivel-riesgo-constructores-pacifico/nivel-riesgo-constructores-pacifico.component';
import { NivelRiesgoConstructoresCentroComponent } from './components/nivel-riesgo-constructores-centro/nivel-riesgo-constructores-centro.component';
import { NivelRiesgoConstructoresSuresteComponent } from './components/nivel-riesgo-constructores-sureste/nivel-riesgo-constructores-sureste.component';
import { NivelRiesgoConstructoresNoresteComponent } from './components/nivel-riesgo-constructores-noreste/nivel-riesgo-constructores-noreste.component';
import { NivelRiesgoConstruramaPacificoComponent } from './components/nivel-riesgo-construrama-pacifico/nivel-riesgo-construrama-pacifico.component';
import { NivelRiesgoConstruramaCentroComponent } from './components/nivel-riesgo-construrama-centro/nivel-riesgo-construrama-centro.component';
import { NivelRiesgoConstruramaSuresteComponent } from './components/nivel-riesgo-construrama-sureste/nivel-riesgo-construrama-sureste.component';
import { NivelRiesgoConstruramaNoresteComponent } from './components/nivel-riesgo-construrama-noreste/nivel-riesgo-construrama-noreste.component';
import { NivelRiesgoIndustrialesPacificoComponent } from './components/nivel-riesgo-industriales-pacifico/nivel-riesgo-industriales-pacifico.component';
import { NivelRiesgoIndustrialesCentroComponent } from './components/nivel-riesgo-industriales-centro/nivel-riesgo-industriales-centro.component';
import { NivelRiesgoIndustrialesSuresteComponent } from './components/nivel-riesgo-industriales-sureste/nivel-riesgo-industriales-sureste.component';
import { NivelRiesgoIndustrialesNoresteComponent } from './components/nivel-riesgo-industriales-noreste/nivel-riesgo-industriales-noreste.component';
import { NivelRiesgoNoOperativosPacificoComponent } from './components/nivel-riesgo-no-operativos-pacifico/nivel-riesgo-no-operativos-pacifico.component';
import { NivelRiesgoNoOperativosCentroComponent } from './components/nivel-riesgo-no-operativos-centro/nivel-riesgo-no-operativos-centro.component';
import { NivelRiesgoNoOperativosSuresteComponent } from './components/nivel-riesgo-no-operativos-sureste/nivel-riesgo-no-operativos-sureste.component';
import { NivelRiesgoNoOperativosNoresteComponent } from './components/nivel-riesgo-no-operativos-noreste/nivel-riesgo-no-operativos-noreste.component';
import { NivelRiesgoOperacionesPacificoComponent } from './components/nivel-riesgo-operaciones-pacifico/nivel-riesgo-operaciones-pacifico.component';
import { NivelRiesgoOperacionesCentroComponent } from './components/nivel-riesgo-operaciones-centro/nivel-riesgo-operaciones-centro.component';
import { NivelRiesgoOperacionesSuresteComponent } from './components/nivel-riesgo-operaciones-sureste/nivel-riesgo-operaciones-sureste.component';
import { NivelRiesgoOperacionesNoresteComponent } from './components/nivel-riesgo-operaciones-noreste/nivel-riesgo-operaciones-noreste.component';
import { NivelRiesgoPromexmaPacificoComponent } from './components/nivel-riesgo-promexma-pacifico/nivel-riesgo-promexma-pacifico.component';
import { NivelRiesgoPromexmaCentroComponent } from './components/nivel-riesgo-promexma-centro/nivel-riesgo-promexma-centro.component';
import { NivelRiesgoPromexmaSuresteComponent } from './components/nivel-riesgo-promexma-sureste/nivel-riesgo-promexma-sureste.component';
import { NivelRiesgoPromexmaNoresteComponent } from './components/nivel-riesgo-promexma-noreste/nivel-riesgo-promexma-noreste.component';
import { NivelRiesgoTrasnportePacificoComponent } from './components/nivel-riesgo-trasnporte-pacifico/nivel-riesgo-trasnporte-pacifico.component';
import { NivelRiesgoTrasnporteCentroComponent } from './components/nivel-riesgo-trasnporte-centro/nivel-riesgo-trasnporte-centro.component';
import { NivelRiesgoTrasnporteSuresteComponent } from './components/nivel-riesgo-trasnporte-sureste/nivel-riesgo-trasnporte-sureste.component';
import { NivelRiesgoTrasnporteNoresteComponent } from './components/nivel-riesgo-trasnporte-noreste/nivel-riesgo-trasnporte-noreste.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarRegistroComponent } from './components/agregar-registro/agregar-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarPlantaComponent } from './components/agregar-planta/agregar-planta.component';
import { FiltroPlantaPipe } from './pipes/filtro-planta.pipe';
import { FiltroPermisoPipe } from './pipes/filtro-permiso.pipe';
import sweetalert2 from 'sweetalert2';
import { ActualizarPlantaComponent } from './components/actualizar-planta/actualizar-planta.component';
import { FiltroFechaPipe } from './pipes/filtro-fecha.pipe';
import { Moment } from 'moment';
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
    RiesgoConstructoresComponent,
    ConstructoresPacificoComponent,
    SuministroPacificoComponent,
    ConstruramaPacificoComponent,
    NoOperativosPacificoComponent,
    IndustrialesPacificoComponent,
    OperacionesPacificoComponent,
    PromexmaPacificoComponent,
    TransportePacificoComponent,
    ConstructoresCentroComponent,
    ConstructoresSuresteComponent,
    ConstructoresNoresteComponent,
    SuministroCentroComponent,
    SuministroSuresteComponent,
    SuministroNoresteComponent,
    ConstruramaCentroComponent,
    ConstruramaSuresteComponent,
    ConstruramaNoresteComponent,
    NoOperativosCentroComponent,
    NoOperativosSuresteComponent,
    NoOperativosNoresteComponent,
    IndustrialesCentroComponent,
    IndustrialesSuresteComponent,
    IndustrialesNoresteComponent,
    OperacionesCentroComponent,
    OperacionesSuresteComponent,
    OperacionesNoresteComponent,
    PromexmaCentroComponent,
    PromexmaSuresteComponent,
    PromexmaNoresteComponent,
    TransporteCentroComponent,
    TransporteSuresteComponent,
    TransporteNoresteComponent,
    GraficasSuministroPacificoComponent,
    GraficasSuministroCentroComponent,
    GraficasSuministroSuresteComponent,
    GraficasSuministroNoresteComponent,
    GraficasConstructoresPacificoComponent,
    GraficasConstructoresCentroComponent,
    GraficasConstructoresSuresteComponent,
    GraficasConstructoresNoresteComponent,
    GraficasConstruramaPacificoComponent,
    GraficasConstruramaCentroComponent,
    GraficasConstruramaSuresteComponent,
    GraficasConstruramaNoresteComponent,
    GraficasIndustrialesPacificoComponent,
    GraficasIndustrialesCentroComponent,
    GraficasIndustrialesSuresteComponent,
    GraficasIndustrialesNoresteComponent,
    GraficasNoOperativosPacificoComponent,
    GraficasNoOperativosCentroComponent,
    GraficasNoOperativosSuresteComponent,
    GraficasNoOperativosNoresteComponent,
    GraficasOperacionesPacificoComponent,
    GraficasOperacionesCentroComponent,
    GraficasOperacionesSuresteComponent,
    GraficasOperacionesNoresteComponent,
    GraficasPromexmaPacificoComponent,
    GraficasPromexmaCentroComponent,
    GraficasPromexmaSuresteComponent,
    GraficasPromexmaNoresteComponent,
    GraficasTransportePacificoComponent,
    GraficasTransporteCentroComponent,
    GraficasTransporteSuresteComponent,
    GraficasTransporteNoresteComponent,
    NivelRiesgoSuministroPacificoComponent,
    NivelRiesgoSuministroCentroComponent,
    NivelRiesgoSuministroSuresteComponent,
    NivelRiesgoSuministroNoresteComponent,
    NivelRiesgoConstructoresPacificoComponent,
    NivelRiesgoConstructoresCentroComponent,
    NivelRiesgoConstructoresSuresteComponent,
    NivelRiesgoConstructoresNoresteComponent,
    NivelRiesgoConstruramaPacificoComponent,
    NivelRiesgoConstruramaCentroComponent,
    NivelRiesgoConstruramaSuresteComponent,
    NivelRiesgoConstruramaNoresteComponent,
    NivelRiesgoIndustrialesPacificoComponent,
    NivelRiesgoIndustrialesCentroComponent,
    NivelRiesgoIndustrialesSuresteComponent,
    NivelRiesgoIndustrialesNoresteComponent,
    NivelRiesgoNoOperativosPacificoComponent,
    NivelRiesgoNoOperativosCentroComponent,
    NivelRiesgoNoOperativosSuresteComponent,
    NivelRiesgoNoOperativosNoresteComponent,
    NivelRiesgoOperacionesPacificoComponent,
    NivelRiesgoOperacionesCentroComponent,
    NivelRiesgoOperacionesSuresteComponent,
    NivelRiesgoOperacionesNoresteComponent,
    NivelRiesgoPromexmaPacificoComponent,
    NivelRiesgoPromexmaCentroComponent,
    NivelRiesgoPromexmaSuresteComponent,
    NivelRiesgoPromexmaNoresteComponent,
    NivelRiesgoTrasnportePacificoComponent,
    NivelRiesgoTrasnporteCentroComponent,
    NivelRiesgoTrasnporteSuresteComponent,
    NivelRiesgoTrasnporteNoresteComponent,
    AgregarRegistroComponent,
    AgregarPlantaComponent,
    FiltroPlantaPipe,
    FiltroPermisoPipe,
    ActualizarPlantaComponent,
    FiltroFechaPipe,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    


  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
