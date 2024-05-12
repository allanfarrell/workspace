import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstVariationComponent } from './inst-variation.component';

describe('InstVariationComponent', () => {
  let component: InstVariationComponent;
  let fixture: ComponentFixture<InstVariationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstVariationComponent]
    });
    fixture = TestBed.createComponent(InstVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
