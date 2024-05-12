import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstSummaryComponent } from './inst-summary.component';

describe('InstSummaryComponent', () => {
  let component: InstSummaryComponent;
  let fixture: ComponentFixture<InstSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstSummaryComponent]
    });
    fixture = TestBed.createComponent(InstSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
