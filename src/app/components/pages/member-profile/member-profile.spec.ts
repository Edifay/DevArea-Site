import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfile } from './member-profile';

describe('MemberProfileComponent', () => {
  let component: MemberProfile;
  let fixture: ComponentFixture<MemberProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberProfile ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
