import { AvionComponent } from './avion/avion.component';
import { AsientosComponent } from './asientos/asientos.component';
import { BoletoComponent } from './boleto/boleto.component';
import { CancelarComponent } from './cancelar/cancelar.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { RutaComponent } from './ruta/ruta.component';
import { AerolineaComponent } from './aerolinea/aerolinea.component';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PersonaComponent } from './persona/persona.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { ModeloavionComponent } from './modeloavion/modeloavion.component';
import { IniciooComponent } from './modeloavion/COMPONENTE/inicioo/inicioo.component';
import { ModificarrComponent } from './modeloavion/COMPONENTE/modificarr/modificarr.component';
import { AeropuertosComponent } from './aeropuertos/aeropuertos.component';
import { AeroincialComponent } from './aeropuertos/COMPONENTE/aeroincial/aeroincial.component';
import { ModiincialComponent } from './aeropuertos/COMPONENTE/modiincial/modiincial.component';

const routes = [
  {path: '',component:BienvenidaComponent},
  {path: 'persona',component:PersonaComponent},
  {path: 'ruta',component:RutaComponent},
  {path: 'vuelo',component:VueloComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'cancelar',component:CancelarComponent},
  {path: 'aerolinea',component:AerolineaComponent},
  {path: 'avion',component:AvionComponent},
  {path: 'asientos',component:AsientosComponent},
  {path: 'boleto',component:BoletoComponent},
    //modelo persona
  {path: 'inicio',component:InicioComponent},
  {path: 'edit/:id_persona',component:ModificarComponent},
// modelo avion
  {path: 'modelo',component:ModeloavionComponent},
  {path: 'modeloavion',component:IniciooComponent},
  {path: 'modificarmodelo/:id_modelo',component:ModificarrComponent},
  //aeropuertos

  {path: 'agreagraeropuerto',component:AeropuertosComponent},
  {path: 'listaaeropuerto',component:AeroincialComponent},
  {path: 'modficaraeropuerto/ :id',component:ModiincialComponent},



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
