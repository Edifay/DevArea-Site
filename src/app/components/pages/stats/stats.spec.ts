import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stats } from './stats';

describe('StatsComponent', () => {
  let component: Stats;
  let fixture: ComponentFixture<Stats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stats ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
