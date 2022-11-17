import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'razon_social': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, 
    private servicioCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarCliente();
  }

  BuscarCliente(){
    this.servicioCliente.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloCliente)=> {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["identificacion"].setValue(datos.identificacion);
      this.fgValidador.controls["razon_social"].setValue(datos.razon_social);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["correo"].setValue(datos.correo);
    })
  }

  EditarCliente(){
    let identificacion = this.fgValidador.controls["identificacion"].value;
    let razon_social = this.fgValidador.controls["razon_social"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let p = new ModeloCliente();
    p.identificacion = identificacion;
    p.razon_social = razon_social;
    p.telefono = telefono;
    p.direccion = direccion;
    p.correo = correo;
    p.id = this.id;
    this.servicioCliente.ActualizarCliente(p).subscribe((datos: ModeloCliente) =>{
      console.log("Cliente Actualizado Correctamente");
      this.router.navigate(["/administracion/listar-cliente"]);
    },(error: any)=>{
      console.log("Error Actualizando Cliente");
    })
  }

}
