import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstAccountComponent } from './inst-account.component';

describe('InstAccountComponent', () => {
  let component: InstAccountComponent;
  let fixture: ComponentFixture<InstAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstAccountComponent]
    });
    fixture = TestBed.createComponent(InstAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
