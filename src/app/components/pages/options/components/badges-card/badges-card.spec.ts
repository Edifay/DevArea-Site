import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesCard } from './badges-card';

describe('BadgesCardComponent', () => {
  let component: BadgesCard;
  let fixture: ComponentFixture<BadgesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesCard ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

