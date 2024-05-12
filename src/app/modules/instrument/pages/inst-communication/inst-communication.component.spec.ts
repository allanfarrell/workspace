import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstCommunicationComponent } from './inst-communication.component';

describe('InstCommunicationComponent', () => {
  let component: InstCommunicationComponent;
  let fixture: ComponentFixture<InstCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstCommunicationComponent]
    });
    fixture = TestBed.createComponent(InstCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
