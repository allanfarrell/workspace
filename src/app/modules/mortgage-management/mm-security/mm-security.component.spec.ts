import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmSecurityComponent } from './mm-security.component';

describe('MmSecurityComponent', () => {
  let component: MmSecurityComponent;
  let fixture: ComponentFixture<MmSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmSecurityComponent]
    });
    fixture = TestBed.createComponent(MmSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
