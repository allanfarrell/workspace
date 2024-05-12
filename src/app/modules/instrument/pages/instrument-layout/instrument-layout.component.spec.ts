import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentLayoutComponent } from './instrument-layout.component';

describe('InstrumentLayoutComponent', () => {
  let component: InstrumentLayoutComponent;
  let fixture: ComponentFixture<InstrumentLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentLayoutComponent]
    });
    fixture = TestBed.createComponent(InstrumentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
