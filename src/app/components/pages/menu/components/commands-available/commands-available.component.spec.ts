import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsAvailable } from './commands-available';

describe('CommandsAvailableComponent', () => {
  let component: CommandsAvailable;
  let fixture: ComponentFixture<CommandsAvailable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandsAvailable ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsAvailable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
