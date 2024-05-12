import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmSearchComponent } from './mm-search.component';

describe('MmSearchComponent', () => {
  let component: MmSearchComponent;
  let fixture: ComponentFixture<MmSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmSearchComponent]
    });
    fixture = TestBed.createComponent(MmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
