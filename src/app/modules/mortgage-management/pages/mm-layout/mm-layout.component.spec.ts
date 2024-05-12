import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmLayoutComponent } from './mm-layout.component';

describe('MmLayoutComponent', () => {
  let component: MmLayoutComponent;
  let fixture: ComponentFixture<MmLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmLayoutComponent]
    });
    fixture = TestBed.createComponent(MmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
