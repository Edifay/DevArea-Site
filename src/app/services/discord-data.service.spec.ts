import { TestBed } from '@angular/core/testing';

import { DiscordDataService } from './discord-data.service';

describe('DiscordDataService', () => {
  let service: DiscordDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscordDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
