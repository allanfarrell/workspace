import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageManagementComponent } from './mortgage-management.component';

describe('MortgageManagementComponent', () => {
  let component: MortgageManagementComponent;
  let fixture: ComponentFixture<MortgageManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageManagementComponent]
    });
    fixture = TestBed.createComponent(MortgageManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
