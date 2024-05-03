import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../entity/usuario/usuario';
import { UsuarioResponse } from '../../entity/usuarioResponse/usuario-response';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UsersLoanComponent } from '../users-loan/users-loan.component';
import { LoanService } from '../../services/loan/loan.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-active-loan',
  standalone: true,
  imports: [],
  templateUrl: './active-loan.component.html',
  styleUrl: './active-loan.component.scss'
})
export class ActiveLoanComponent {
  usuarioService=inject(UsuarioService)
  prestamosService=inject(LoanService)

  private modalService = inject(NgbModal);
  usuariosPermisosActivos:Array<UsuarioResponse>=[]

  ngOnInit(){
    let date=new Date();
    this.usuarioService.getPrestamosActivos(date.toISOString()).subscribe({
      next:e=>this.usuariosPermisosActivos=e,
      error:e=>console.log(e)
    });
  }
  viewPrestamos(identificacionUsuario:string){
    const modalref:NgbModalRef= this.modalService.open(UsersLoanComponent, { size: 'lg' });
    this.prestamosService.getByIdUsuario(identificacionUsuario).subscribe({
      next:e=>{
        console.log(e)
        modalref.componentInstance.prestados=e;
      }
    })
    console.log(identificacionUsuario)
  }
}
