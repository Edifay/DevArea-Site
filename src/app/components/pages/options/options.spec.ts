import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Options } from './options';

describe('OptionsComponent', () => {
  let component: Options;
  let fixture: ComponentFixture<Options>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Options ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Options);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
