import { TestBed } from '@angular/core/testing';

import { WaitingToAcceptService } from './waiting-to-accept.service';

describe('WaitingToAcceptService', () => {
  let service: WaitingToAcceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingToAcceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
