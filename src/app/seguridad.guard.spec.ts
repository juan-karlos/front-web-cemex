import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { seguridadGuard } from './seguridad.guard';

describe('seguridadGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => seguridadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
