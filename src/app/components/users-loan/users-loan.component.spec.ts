import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoanComponent } from './users-loan.component';

describe('UsersLoanComponent', () => {
  let component: UsersLoanComponent;
  let fixture: ComponentFixture<UsersLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
