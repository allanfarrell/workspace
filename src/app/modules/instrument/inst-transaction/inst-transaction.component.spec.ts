import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstTransactionComponent } from './inst-transaction.component';

describe('InstTransactionComponent', () => {
  let component: InstTransactionComponent;
  let fixture: ComponentFixture<InstTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstTransactionComponent]
    });
    fixture = TestBed.createComponent(InstTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
