import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCreator } from './mission-creator';

describe('MissionCreatorComponent', () => {
  let component: MissionCreator;
  let fixture: ComponentFixture<MissionCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionCreator ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCreator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
