import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstDocumentComponent } from './inst-document.component';

describe('InstDocumentComponent', () => {
  let component: InstDocumentComponent;
  let fixture: ComponentFixture<InstDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstDocumentComponent]
    });
    fixture = TestBed.createComponent(InstDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
