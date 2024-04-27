import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessQueueComponent } from './assess-queue.component';

describe('AssessQueueComponent', () => {
  let component: AssessQueueComponent;
  let fixture: ComponentFixture<AssessQueueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessQueueComponent]
    });
    fixture = TestBed.createComponent(AssessQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
