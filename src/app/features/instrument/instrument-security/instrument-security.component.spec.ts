import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentSecurityComponent } from './instrument-security.component';

describe('InstrumentSecurityComponent', () => {
  let component: InstrumentSecurityComponent;
  let fixture: ComponentFixture<InstrumentSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
