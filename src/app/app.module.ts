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
import { AsientosComponent } from './asientos/asientos.component'

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
      AsientosComponent
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
