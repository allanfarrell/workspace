import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmTransactionsComponent } from './mm-transactions.component';

describe('MmTransactionsComponent', () => {
  let component: MmTransactionsComponent;
  let fixture: ComponentFixture<MmTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmTransactionsComponent]
    });
    fixture = TestBed.createComponent(MmTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
