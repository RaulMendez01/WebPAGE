import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
//pueba login
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { VueloComponent } from './vuelo/vuelo.component';
import { RutaComponent } from './ruta/ruta.component';
import { RegistroComponent } from './registro/registro.component';
import { CancelarComponent } from './cancelar/cancelar.component';

import { AerolineaComponent } from './aerolinea/aerolinea.component';
import { AvionComponent } from './avion/avion.component';
import { BoletoComponent } from './boleto/boleto.component';
import { AsientosComponent } from './asientos/asientos.component';

import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { ModeloavionComponent } from './modeloavion/modeloavion.component';
import { IniciooComponent } from './modeloavion/COMPONENTE/inicioo/inicioo.component';
import { ModificarrComponent } from './modeloavion/COMPONENTE/modificarr/modificarr.component';
import { AeropuertosComponent } from './aeropuertos/aeropuertos.component';
import { AeroincialComponent } from './aeropuertos/COMPONENTE/aeroincial/aeroincial.component';
import { ModiincialComponent } from './aeropuertos/COMPONENTE/modiincial/modiincial.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    BienvenidaComponent,
    LoginComponent,
    VueloComponent,
    RutaComponent,
    RegistroComponent,
    CancelarComponent,
    AerolineaComponent,
      AvionComponent,
      BoletoComponent,
      AsientosComponent,
      
      ModificarComponent,
      InicioComponent,
      ModeloavionComponent,
      IniciooComponent,
      ModificarrComponent,
      AeropuertosComponent,
      AeroincialComponent,
      ModiincialComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    //LOGIN
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
