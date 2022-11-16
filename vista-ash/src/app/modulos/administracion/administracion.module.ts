import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { BuscarEmpresaComponent } from './empresa/buscar-empresa/buscar-empresa.component';
import { EditarEmpresaComponent } from './empresa/editar-empresa/editar-empresa.component';
import { EliminarEmpresaComponent } from './empresa/eliminar-empresa/eliminar-empresa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearDirectivoComponent } from './directivos/crear-directivo/crear-directivo.component';
import { BuscarDirectivoComponent } from './directivos/buscar-directivo/buscar-directivo.component';
import { EditarDirectivoComponent } from './directivos/editar-directivo/editar-directivo.component';
import { EliminarDirectivoComponent } from './directivos/eliminar-directivo/eliminar-directivo.component';

@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    BuscarClienteComponent,
    CrearEmpresaComponent,
    BuscarEmpresaComponent,
    EditarEmpresaComponent,
    EliminarEmpresaComponent,
    CrearDirectivoComponent,
    BuscarDirectivoComponent,
    EditarDirectivoComponent,
    EliminarDirectivoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
