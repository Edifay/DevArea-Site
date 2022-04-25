import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCreatorComponent } from './mission-creator.component';

describe('MissionCreatorComponent', () => {
  let component: MissionCreatorComponent;
  let fixture: ComponentFixture<MissionCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
