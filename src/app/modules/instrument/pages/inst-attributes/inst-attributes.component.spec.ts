import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstAttributesComponent } from './inst-attributes.component';

describe('InstAttributesComponent', () => {
  let component: InstAttributesComponent;
  let fixture: ComponentFixture<InstAttributesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstAttributesComponent]
    });
    fixture = TestBed.createComponent(InstAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
