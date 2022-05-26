import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCard } from './staff-card';

describe('StaffCardComponent', () => {
  let component: StaffCard;
  let fixture: ComponentFixture<StaffCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffCard ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
