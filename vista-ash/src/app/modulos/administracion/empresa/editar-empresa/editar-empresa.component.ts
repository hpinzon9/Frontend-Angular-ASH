import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpresa } from 'src/app/modelos/empresa.modelo';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nit': ['', [Validators.required]],
    'razon_social': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, 
    private servicioEmpresa: EmpresaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarEmpresa();
  }

  BuscarEmpresa(){
    this.servicioEmpresa.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloEmpresa)=> {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nit"].setValue(datos.nit);
      this.fgValidador.controls["razon_social"].setValue(datos.razon_social);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
    })
  }

  EditarEmpresa(){
    let nit = this.fgValidador.controls["nit"].value;
    let razon_social = this.fgValidador.controls["razon_social"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let p = new ModeloEmpresa();
    p.nit = nit;
    p.razon_social = razon_social;
    p.direccion = direccion;
    p.id = this.id;
    this.servicioEmpresa.ActualizarEmpresa(p).subscribe((datos: ModeloEmpresa) =>{
      console.log("Empresa Actualizad Correctamente");
      this.router.navigate(["/administracion/buscar-emnpresa"]);
    },(error: any)=>{
      console.log("Error Actualizando Empresa");
    })
  }

}
