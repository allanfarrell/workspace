import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmSummaryComponent } from './mm-summary.component';

describe('MmSummaryComponent', () => {
  let component: MmSummaryComponent;
  let fixture: ComponentFixture<MmSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmSummaryComponent]
    });
    fixture = TestBed.createComponent(MmSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
