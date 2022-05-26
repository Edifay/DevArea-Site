import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionButton } from './connexion-button';

describe('ConnexionButtonComponent', () => {
  let component: ConnexionButton;
  let fixture: ComponentFixture<ConnexionButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
