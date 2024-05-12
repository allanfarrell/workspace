import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmObligorComponent } from './mm-obligor.component';

describe('MmObligorComponent', () => {
  let component: MmObligorComponent;
  let fixture: ComponentFixture<MmObligorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmObligorComponent]
    });
    fixture = TestBed.createComponent(MmObligorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
