import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff } from './staff';

describe('StaffComponent', () => {
  let component: Staff;
  let fixture: ComponentFixture<Staff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Staff ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Staff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
