import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalXp } from './personnal-xp';

describe('PersonnalXpComponent', () => {
  let component: PersonnalXp;
  let fixture: ComponentFixture<PersonnalXp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalXp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalXp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
