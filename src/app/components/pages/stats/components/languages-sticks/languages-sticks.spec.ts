import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSticks } from './languages-sticks';

describe('LanguagesSticksComponent', () => {
  let component: LanguagesSticks;
  let fixture: ComponentFixture<LanguagesSticks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesSticks ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesSticks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
