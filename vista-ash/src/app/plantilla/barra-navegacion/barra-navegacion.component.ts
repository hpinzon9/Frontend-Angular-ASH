import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor( private seguridadServicio:SeguridadService) { }

  ngOnInit(): void {
    this.subs= this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar)=>{
      this._seInicioSesion= datos.estaIdentificado;
      
    })
  }

}
