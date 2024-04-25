import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstEventComponent } from './inst-event.component';

describe('InstEventComponent', () => {
  let component: InstEventComponent;
  let fixture: ComponentFixture<InstEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstEventComponent]
    });
    fixture = TestBed.createComponent(InstEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
