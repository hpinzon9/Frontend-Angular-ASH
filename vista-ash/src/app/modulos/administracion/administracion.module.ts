import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import { EditEmpresaComponent } from './empresa/edit-empresa/edit-empresa.component';
import { EliminarEmpresaComponent } from './empresa/eliminar-empresa/eliminar-empresa.component';
import { BuscarEmpresaComponent } from './empresa/buscar-empresa/buscar-empresa.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { EliminarrEmpleadoComponent } from './empleado/eliminarr-empleado/eliminarr-empleado.component';
import { BuscarEmpleadoComponent } from './empleado/buscar-empleado/buscar-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { EditarDirectivoComponent } from './directivos/editar-directivo/editar-directivo.component';
import { CrearDirectivoComponent } from './directivos/crear-directivo/crear-directivo.component';
import { EliminarDirectivoComponent } from './directivos/eliminar-directivo/eliminar-directivo.component';
import { BuscarDirectivoComponent } from './directivos/buscar-directivo/buscar-directivo.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    EmpresaComponent,
    CrearEmpresaComponent,
    EditEmpresaComponent,
    EliminarEmpresaComponent,
    BuscarEmpresaComponent,
    EmpleadoComponent,
    CrearEmpleadoComponent,
    EliminarrEmpleadoComponent,
    BuscarEmpleadoComponent,
    EditarEmpleadoComponent,
    EditarDirectivoComponent,
    CrearDirectivoComponent,
    EliminarDirectivoComponent,
    BuscarDirectivoComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    BuscarClienteComponent,
    EliminarClienteComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
