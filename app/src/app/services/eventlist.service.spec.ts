import { TestBed } from '@angular/core/testing';

import { EventlistService } from './eventlist.service';

describe('EventlistService', () => {
  let service: EventlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
