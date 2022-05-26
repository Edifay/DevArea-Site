import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceCreatorComponent } from './freelance-creator.component';

describe('FreelanceCreatorComponent', () => {
  let component: FreelanceCreatorComponent;
  let fixture: ComponentFixture<FreelanceCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
