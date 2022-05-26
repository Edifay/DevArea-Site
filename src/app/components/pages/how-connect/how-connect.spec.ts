import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowConnect } from './how-connect';

describe('HowConnectComponent', () => {
  let component: HowConnect;
  let fixture: ComponentFixture<HowConnect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowConnect ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowConnect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
