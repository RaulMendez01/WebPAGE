import { AvionComponent } from './avion/avion.component';
import { AsientosComponent } from './asientos/asientos.component';
import { BoletoComponent } from './boleto/boleto.component';
import { CancelarComponent } from './cancelar/cancelar.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { RutaComponent } from './ruta/ruta.component';
import { AerolineaComponent } from './aerolinea/aerolinea.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PersonaComponent } from './persona/persona.component';
import { RegistroComponent } from './registro/registro.component';

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
  {path: 'boleto',component:BoletoComponent}


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
