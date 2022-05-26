import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader } from './loader';

describe('LoaderComponent', () => {
  let component: Loader;
  let fixture: ComponentFixture<Loader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loader ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
