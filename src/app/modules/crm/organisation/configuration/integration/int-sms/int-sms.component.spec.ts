import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntSmsComponent } from './int-sms.component';

describe('IntSmsComponent', () => {
  let component: IntSmsComponent;
  let fixture: ComponentFixture<IntSmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntSmsComponent]
    });
    fixture = TestBed.createComponent(IntSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
