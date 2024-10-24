import { TestBed } from '@angular/core/testing';

import { KlijentiService } from './klijenti.service';

describe('KlijentiService', () => {
  let service: KlijentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlijentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
