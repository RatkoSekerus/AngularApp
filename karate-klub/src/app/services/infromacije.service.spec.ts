import { TestBed } from '@angular/core/testing';

import { InfromacijeService } from './infromacije.service';

describe('InfromacijeService', () => {
  let service: InfromacijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfromacijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
