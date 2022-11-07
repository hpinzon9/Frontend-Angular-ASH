import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperClaveComponent } from './recuper-clave/recuper-clave.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent,
    RecuperClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
