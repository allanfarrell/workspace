import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssSummaryComponent } from './ass-summary.component';

describe('AssSummaryComponent', () => {
  let component: AssSummaryComponent;
  let fixture: ComponentFixture<AssSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssSummaryComponent]
    });
    fixture = TestBed.createComponent(AssSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
