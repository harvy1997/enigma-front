import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoanService } from '../../services/loan/loan.service';
import { PrestamoRequest } from '../../entity/prestamoRequest/prestamo-request';
import { PrestamoResponse } from '../../entity/prestamoResponse/prestamo-response';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-loan',
  standalone: true,
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './create-loan.component.html',
  styleUrl: './create-loan.component.scss'
})
export class CreateLoanComponent {
  prestamoService=inject(LoanService);
  prestamoResponse:PrestamoResponse={id:0,fechaMaximaDevolucion:""}
  loanForm = new FormGroup({
    isbn: new FormControl('',{validators:[Validators.required,Validators.maxLength(10),Validators.minLength(10)]}),
    identificacionUsuario: new FormControl('',{validators:[Validators.required,Validators.maxLength(10),Validators.minLength(10)]}),
    tipoUsuario: new FormControl(0,Validators.required),
  });

  get isbn() {
    return this.loanForm.get('isbn');
  }
  
  get identificacionUsuario() {
    return this.loanForm.get('identificacionUsuario');
  }
  
  loanRegister(){
    let p:PrestamoRequest=new PrestamoRequest(this.loanForm.value.identificacionUsuario,this.loanForm.value.isbn,this.loanForm.value!.tipoUsuario!);
    this.prestamoService.setPrestamo(p).subscribe({
      next:e=>{
        alert("Guardado con éxito");
        this.loanForm.reset();
        this.prestamoResponse=e;
      },
      error:e=>{
        alert(e.error.mensaje)
        console.log(e)
      }
    })
  }
}
