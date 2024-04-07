import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentEventComponent } from './instrument-event.component';

describe('InstrumentEventComponent', () => {
  let component: InstrumentEventComponent;
  let fixture: ComponentFixture<InstrumentEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
