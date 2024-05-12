import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstSecurityComponent } from './inst-security.component';

describe('InstSecurityComponent', () => {
  let component: InstSecurityComponent;
  let fixture: ComponentFixture<InstSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstSecurityComponent]
    });
    fixture = TestBed.createComponent(InstSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
