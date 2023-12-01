import { TestBed } from '@angular/core/testing';

import { LogicaService } from './logica.service';

describe('LogicaService', () => {
  let service: LogicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
