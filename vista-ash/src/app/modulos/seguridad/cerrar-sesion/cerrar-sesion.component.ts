import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private servicioSeguridad: SeguridadService,
<<<<<<< HEAD
    private router: Router ) { }

  ngOnInit(): void {
    this.servicioSeguridad.EliminarInformacionSesion();
    this.router.navigate(["/inicio"])
=======
    private router: Router) { }

  ngOnInit(): void {
    this.servicioSeguridad.EliminarInformacionSesion();
    this.router.navigate(['/inicio'])
>>>>>>> e27fcc193bc68e2c47613f87cb0fe933e77c14d1
  }

}
