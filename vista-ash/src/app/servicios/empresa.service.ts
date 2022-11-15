import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpresa } from '../modelos/empresa.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.ObtenerToken();
  }
  
  ObtenerRegistros(): Observable<ModeloEmpresa[]> {
    return this.http.get<ModeloEmpresa[]>(`${this.url}/empresas`);
  }

  CrearEmpresa(empresa: ModeloEmpresa): Observable<ModeloEmpresa>{
    return this.http.post<ModeloEmpresa>(`${this.url}/empresas`, empresa, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarEmpresa(empresa: ModeloEmpresa): Observable<ModeloEmpresa>{
    return this.http.put<ModeloEmpresa>(`${this.url}/empresas`, empresa , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarEmpresa(id: string): Observable<any> {
    return this.http.delete(`${this.url}/empresas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
