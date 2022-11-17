import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'identificacion': ['', [Validators.required]],
    'razon_social': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, 
    private servicioCliente: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
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
    this.servicioCliente.CrearCliente(p).subscribe((datos: ModeloCliente) =>{
      console.log("Cliente Creado Correctamente");
      this.router.navigate(["/administracion/listar-cliente"]);
    },(error: any)=>{
      console.log("Error almacenando Cliente");
    })
  }
}
