import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalXpComponent } from './personnal-xp.component';

describe('PersonnalXpComponent', () => {
  let component: PersonnalXpComponent;
  let fixture: ComponentFixture<PersonnalXpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalXpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalXpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
