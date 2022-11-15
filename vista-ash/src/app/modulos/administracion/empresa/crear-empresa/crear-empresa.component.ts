import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ModeloEmpresa } from 'src/app/modelos/empresa.modelo';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nit': ['', [Validators.required]],
    'razon_social': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, 
    private servicioEmpresa: EmpresaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarEmpresa(){
    let nit = this.fgValidador.controls["nit"].value;
    let razon_social = this.fgValidador.controls["razon_social"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let p = new ModeloEmpresa();
    p.nit = nit;
    p.razon_social = razon_social;
    p.direccion = direccion;
    this.servicioEmpresa.CrearEmpresa(p).subscribe((datos: ModeloEmpresa) =>{
      console.log("Empresa Creada Correctamente");
      this.router.navigate(["/administracion/buscar-emnpresa"]);
    },(error: any)=>{
      console.log("Error almacenando Empresa");
    })
  }

}
