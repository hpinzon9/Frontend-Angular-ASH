import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required,Validators.email]],
    'clave': ['', [Validators.required]]
  });

  ngOnInit(): void {
    // opcion logica de negocio
    //setInterval(() => {
    //  this.fgValidador.controls["usuario"].setValue(Math.random() * 1000)
    //},2000)
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos: any) =>{
      this.servicioSeguridad.AlmacenarSesion(datos);
      //ok
      alert("Datos Correctos")
    }, (error: any) => {
      //error
      alert("Datos Invalidos")
    })
  }

}
