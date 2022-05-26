import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpTopRank } from './xp-top-rank';

describe('XpTopRankComponent', () => {
  let component: XpTopRank;
  let fixture: ComponentFixture<XpTopRank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpTopRank ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpTopRank);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
