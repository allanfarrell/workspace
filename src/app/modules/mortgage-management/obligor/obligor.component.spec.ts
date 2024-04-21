import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligorComponent } from './obligor.component';

describe('ObligorComponent', () => {
  let component: ObligorComponent;
  let fixture: ComponentFixture<ObligorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObligorComponent]
    });
    fixture = TestBed.createComponent(ObligorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
