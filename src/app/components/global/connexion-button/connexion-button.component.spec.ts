import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionButtonComponent } from './connexion-button.component';

describe('ConnexionButtonComponent', () => {
  let component: ConnexionButtonComponent;
  let fixture: ComponentFixture<ConnexionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
