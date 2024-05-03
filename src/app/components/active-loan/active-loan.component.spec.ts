import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLoanComponent } from './active-loan.component';

describe('ActiveLoanComponent', () => {
  let component: ActiveLoanComponent;
  let fixture: ComponentFixture<ActiveLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
