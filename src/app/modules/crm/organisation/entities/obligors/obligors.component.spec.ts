import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligorsComponent } from './obligors.component';

describe('ObligorsComponent', () => {
  let component: ObligorsComponent;
  let fixture: ComponentFixture<ObligorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObligorsComponent]
    });
    fixture = TestBed.createComponent(ObligorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
