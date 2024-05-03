import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../../entity/usuario/usuario';
import { environment } from '../../../environments/environment';
import { UsuarioResponse } from '../../entity/usuarioResponse/usuario-response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http=inject(HttpClient)
  private api="usuario"
  constructor() { }
  public getOne(id:number){
    return this.http.get<Usuario>(`${environment.API+this.api}/${id}`)
  }
  public getAll(){
    return this.http.get<Array<Usuario>>(environment.API+this.api)
  }
  public getPrestamosActivos(fecha:String){
    return this.http.post<Array<UsuarioResponse>>(`${environment.API+this.api}/prestamo`,{fecha:fecha})
  }
}
