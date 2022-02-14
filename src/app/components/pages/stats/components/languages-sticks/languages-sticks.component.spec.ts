import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSticksComponent } from './languages-sticks.component';

describe('LanguagesSticksComponent', () => {
  let component: LanguagesSticksComponent;
  let fixture: ComponentFixture<LanguagesSticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesSticksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesSticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
