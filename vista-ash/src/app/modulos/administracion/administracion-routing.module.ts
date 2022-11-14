import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';

const routes: Routes = [
  {
    path: 'crear-persona',
    component: CrearPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-persona',
    component: EditarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'litar-clientes',
    component: BuscarClienteComponent
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-cliente/:id',
    component: EditarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
