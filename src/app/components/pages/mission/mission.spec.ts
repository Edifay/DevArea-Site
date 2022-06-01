import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission } from './mission';

describe('MissionComponent', () => {
  let component: Mission;
  let fixture: ComponentFixture<Mission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mission ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
