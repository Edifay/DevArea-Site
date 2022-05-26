import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcher } from './theme-switcher';

describe('ThemeSwitcherComponent', () => {
  let component: ThemeSwitcher;
  let fixture: ComponentFixture<ThemeSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSwitcher ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
