import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Field } from './field';

describe('FieldComponent', () => {
  let component: Field;
  let fixture: ComponentFixture<Field>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Field ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Field);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
