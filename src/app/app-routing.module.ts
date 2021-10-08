import { VueloComponent } from './vuelo/vuelo.component';
import { RutaComponent } from './ruta/ruta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PersonaComponent } from './persona/persona.component';

const routes = [
  {path: '',component:BienvenidaComponent},
  {path: 'persona',component:PersonaComponent},
  {path: 'ruta',component:RutaComponent},
  {path: 'vuelo',component:VueloComponent}
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
