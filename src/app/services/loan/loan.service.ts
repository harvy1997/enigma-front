import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PrestamoDto } from '../../entity/prestamoDto/prestamo-dto';
import { PrestamoResponse } from '../../entity/prestamoResponse/prestamo-response';
import { PrestamoRequest } from '../../entity/prestamoRequest/prestamo-request';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private http=inject(HttpClient)
  private api="prestamo"
  constructor() { }
  public getOne(id:number){
    return this.http.get<PrestamoDto>(`${environment.API+this.api}/${id}`)
  }
  public getAll(){
    return this.http.get<Array<PrestamoDto>>(environment.API+this.api)
  }
  public setPrestamo(prestamoRequest:PrestamoRequest){
    return this.http.post<PrestamoResponse>(`${environment.API+this.api}`,prestamoRequest)
  }
  public getByIdUsuario(idusuario:string){
    return this.http.get<Array<PrestamoDto>>(`${environment.API+this.api}/usuario/${idusuario}`)
  }
}
