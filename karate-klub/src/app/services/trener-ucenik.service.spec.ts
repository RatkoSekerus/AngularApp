import { TestBed } from '@angular/core/testing';

import { TrenerUcenikService } from './trener-ucenik.service';

describe('TrenerUcenikService', () => {
  let service: TrenerUcenikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrenerUcenikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
