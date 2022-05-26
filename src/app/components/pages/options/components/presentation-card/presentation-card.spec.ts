import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCard } from './presentation-card';

describe('PresentationCardComponent', () => {
  let component: PresentationCard;
  let fixture: ComponentFixture<PresentationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationCard ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
