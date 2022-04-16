import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowConnectComponent } from './how-connect.component';

describe('HowConnectComponent', () => {
  let component: HowConnectComponent;
  let fixture: ComponentFixture<HowConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
