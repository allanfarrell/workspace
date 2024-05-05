import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntEmailComponent } from './int-email.component';

describe('IntEmailComponent', () => {
  let component: IntEmailComponent;
  let fixture: ComponentFixture<IntEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntEmailComponent]
    });
    fixture = TestBed.createComponent(IntEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
