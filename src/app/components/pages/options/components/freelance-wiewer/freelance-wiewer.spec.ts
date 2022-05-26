import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceWiewer } from './freelance-wiewer';

describe('FreelanceWiewerComponent', () => {
  let component: FreelanceWiewer;
  let fixture: ComponentFixture<FreelanceWiewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceWiewer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceWiewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
