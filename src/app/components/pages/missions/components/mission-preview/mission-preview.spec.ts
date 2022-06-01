import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPreview } from './mission-preview';

describe('MissionPreviewComponent', () => {
  let component: MissionPreview;
  let fixture: ComponentFixture<MissionPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionPreview ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
