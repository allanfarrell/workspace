import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmProductsComponent } from './mm-products.component';

describe('MmProductsComponent', () => {
  let component: MmProductsComponent;
  let fixture: ComponentFixture<MmProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmProductsComponent]
    });
    fixture = TestBed.createComponent(MmProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
