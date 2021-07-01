import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilInfoComponent } from './fil-info.component';

describe('FilInfoComponent', () => {
  let component: FilInfoComponent;
  let fixture: ComponentFixture<FilInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
