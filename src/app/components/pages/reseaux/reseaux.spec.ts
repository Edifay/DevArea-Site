import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reseaux } from './reseaux';

describe('ReseauxComponent', () => {
  let component: Reseaux;
  let fixture: ComponentFixture<Reseaux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reseaux ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reseaux);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
