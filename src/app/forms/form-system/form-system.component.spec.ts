import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSystemComponent } from './form-system.component';

describe('FormSystemComponent', () => {
  let component: FormSystemComponent;
  let fixture: ComponentFixture<FormSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSystemComponent]
    });
    fixture = TestBed.createComponent(FormSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
