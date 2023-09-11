import { TestBed } from '@angular/core/testing';

import { RequerimientoService } from './requerimiento.service';

describe('RequerimientoService', () => {
  let service: RequerimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequerimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
