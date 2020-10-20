import { TestBed } from '@angular/core/testing';

import { OmdService } from './omd.service';

describe('OmdService', () => {
  let service: OmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
