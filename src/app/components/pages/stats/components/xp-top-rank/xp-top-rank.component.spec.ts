import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpTopRankComponent } from './xp-top-rank.component';

describe('XpTopRankComponent', () => {
  let component: XpTopRankComponent;
  let fixture: ComponentFixture<XpTopRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpTopRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpTopRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
