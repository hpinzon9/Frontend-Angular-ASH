import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BehaviorSubject, Observable } from 'rxjs';
=======
import { BehaviorSubject, ignoreElements, Observable } from 'rxjs';
>>>>>>> e27fcc193bc68e2c47613f87cb0fe933e77c14d1
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost/3000';
<<<<<<< HEAD
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) {
    this.VerificaSesionactual();
=======
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar)

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.refrescarDatosSesion(datos);
    }
  }
  refrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
>>>>>>> e27fcc193bc68e2c47613f87cb0fe933e77c14d1
  }
  VerificaSesionactual(){
    let datos= this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }
  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }
  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }



  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarPersona`, {
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })
    })
<<<<<<< HEAD
}

AlmacenarSesion(datos: ModeloIdentificar){
  datos.istaIdentificado=true;
  let stringDatos= JSON.stringify(datos);
  localStorage.setItem("datosSesion", stringDatos);
  this.RefrescarDatosSesion(datos);

}
ObtenerInformacionSesion(){
  let datosString= localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos;
  }else{
    return null;
  }
}
EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
  this.RefrescarDatosSesion(new ModeloIdentificar());
}
seHaIniciadoSesion(){
  let datosString=localStorage.getItem("datosSesion");
  return datosString;
}


=======
  }

  AlmacenarSesion(datos: ModeloIdentificar){
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.refrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.refrescarDatosSesion(new ModeloIdentificar());
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }
>>>>>>> e27fcc193bc68e2c47613f87cb0fe933e77c14d1
}