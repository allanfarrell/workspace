import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryLayoutComponent } from './treasury-layout.component';

describe('TreasuryLayoutComponent', () => {
  let component: TreasuryLayoutComponent;
  let fixture: ComponentFixture<TreasuryLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreasuryLayoutComponent]
    });
    fixture = TestBed.createComponent(TreasuryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
