import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { BuscarEmpresaComponent } from './empresa/buscar-empresa/buscar-empresa.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
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
    path: 'listar-clientes',
    component: BuscarClienteComponent,
    canActivate: [ValidadorSesionGuard]
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
  },
  {
    path: 'buscar-empresa',
    component: BuscarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-empresa',
    component: CrearEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-empresa/:id',
    component: EditarEmpresaComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
