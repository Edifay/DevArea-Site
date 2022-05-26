import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo } from './to-do';

describe('ToDoComponent', () => {
  let component: ToDo;
  let fixture: ComponentFixture<ToDo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDo ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
