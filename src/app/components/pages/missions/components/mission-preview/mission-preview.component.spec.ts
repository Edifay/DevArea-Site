import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPreviewComponent } from './mission-preview.component';

describe('MissionPreviewComponent', () => {
  let component: MissionPreviewComponent;
  let fixture: ComponentFixture<MissionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
