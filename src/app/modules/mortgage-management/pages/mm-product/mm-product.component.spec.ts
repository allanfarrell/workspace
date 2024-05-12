import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmProductComponent } from './mm-product.component';

describe('MmProductComponent', () => {
  let component: MmProductComponent;
  let fixture: ComponentFixture<MmProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmProductComponent]
    });
    fixture = TestBed.createComponent(MmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
