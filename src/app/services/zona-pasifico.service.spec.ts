import { TestBed } from '@angular/core/testing';

import { ZonaPasificoService } from './zona-pasifico.service';

describe('ZonaPasificoService', () => {
  let service: ZonaPasificoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonaPasificoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
