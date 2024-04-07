import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentAccountComponent } from './instrument-account.component';

describe('InstrumentAccountComponent', () => {
  let component: InstrumentAccountComponent;
  let fixture: ComponentFixture<InstrumentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
