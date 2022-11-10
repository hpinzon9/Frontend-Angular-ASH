import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path: "identificar",
    component: IdentificacionComponent
<<<<<<< HEAD
  },{
    path:"cerrarSesion",
=======
  },
  {
    path: "cerrarSesion",
>>>>>>> e27fcc193bc68e2c47613f87cb0fe933e77c14d1
    component: CerrarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
