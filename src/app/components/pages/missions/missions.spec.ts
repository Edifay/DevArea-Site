import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Missions } from './missions';

describe('MissionsComponent', () => {
  let component: Missions;
  let fixture: ComponentFixture<Missions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Missions ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Missions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
