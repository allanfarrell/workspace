import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataComponent } from './ref-data.component';

describe('RefDataComponent', () => {
  let component: RefDataComponent;
  let fixture: ComponentFixture<RefDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefDataComponent]
    });
    fixture = TestBed.createComponent(RefDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
