import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsAvailableComponent } from './commands-available.component';

describe('CommandsAvailableComponent', () => {
  let component: CommandsAvailableComponent;
  let fixture: ComponentFixture<CommandsAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandsAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
