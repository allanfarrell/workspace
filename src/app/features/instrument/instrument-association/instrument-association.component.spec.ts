import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentAssociationComponent } from './instrument-association.component';

describe('InstrumentAssociationComponent', () => {
  let component: InstrumentAssociationComponent;
  let fixture: ComponentFixture<InstrumentAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentAssociationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
