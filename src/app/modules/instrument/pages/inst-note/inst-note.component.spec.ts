import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstNoteComponent } from './inst-note.component';

describe('InstNoteComponent', () => {
  let component: InstNoteComponent;
  let fixture: ComponentFixture<InstNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstNoteComponent]
    });
    fixture = TestBed.createComponent(InstNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
