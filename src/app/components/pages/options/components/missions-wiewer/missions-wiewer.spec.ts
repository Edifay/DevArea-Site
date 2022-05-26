import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsWiewer } from './missions-wiewer';

describe('MissionsWiewerComponent', () => {
  let component: MissionsWiewer;
  let fixture: ComponentFixture<MissionsWiewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionsWiewer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsWiewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
