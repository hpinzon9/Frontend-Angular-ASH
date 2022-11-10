import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
<<<<<<< HEAD
=======
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
>>>>>>> e27fcc193bc68e2c47613f87cb0fe933e77c14d1
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  private _seInicioSesion: boolean = false;
  public get seInicioSesion(): boolean {
    return this._seInicioSesion;
  }
  public set seInicioSesion(value: boolean) {
    this._seInicioSesion = value;
  }
  subs: Subscription = new Subscription();

<<<<<<< HEAD
  constructor( private seguridadServicio:SeguridadService) { }

  ngOnInit(): void {
    this.subs= this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar)=>{
      
        this._seInicioSesion= datos.istaIdentificado;
      
=======
  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.seInicioSesion = datos.estaIdentificado;
>>>>>>> e27fcc193bc68e2c47613f87cb0fe933e77c14d1
    })
  }

}
