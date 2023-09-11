import { TestBed } from '@angular/core/testing';

import { UnidadOperativaService } from './unidad-operativa.service';

describe('UnidadOperativaService', () => {
  let service: UnidadOperativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadOperativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
