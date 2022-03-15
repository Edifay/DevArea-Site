import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesCardComponent } from './badges-card.component';

describe('BadgesCardComponent', () => {
  let component: BadgesCardComponent;
  let fixture: ComponentFixture<BadgesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

