import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
var CryptoJS = require("crypto-js");
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router:Router ) { }

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required,Validators.email]],
    'clave': ['', [Validators.required]]
  });

  ngOnInit(): void {
    //this.fgValidador.controls["usuario"].setValue(" ");
    // opcion logica de negocio
    //setInterval(() => {
    //  this.fgValidador.controls["usuario"].setValue(Math.random() * 1000)
    //},2000)
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();
    console.log(claveCifrada);
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos: any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      //error
      console.log("Datos Invalidos seguridad service")
    })
  }

}