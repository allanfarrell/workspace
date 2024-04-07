import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentNoteComponent } from './instrument-note.component';

describe('InstrumentNoteComponent', () => {
  let component: InstrumentNoteComponent;
  let fixture: ComponentFixture<InstrumentNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
