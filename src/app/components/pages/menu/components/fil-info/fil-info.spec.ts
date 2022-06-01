import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilInfo } from './fil-info';

describe('FilInfoComponent', () => {
  let component: FilInfo;
  let fixture: ComponentFixture<FilInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilInfo ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
