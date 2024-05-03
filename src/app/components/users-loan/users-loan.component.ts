import { Component, Input, inject } from '@angular/core';
import { PrestamoDto } from '../../entity/prestamoDto/prestamo-dto';
import { DatePipe } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-loan',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './users-loan.component.html',
  styleUrl: './users-loan.component.scss'
})
export class UsersLoanComponent {
  
  @Input() prestados: Array<PrestamoDto> =[];

  activeModal:NgbActiveModal = inject(NgbActiveModal);
  

}
