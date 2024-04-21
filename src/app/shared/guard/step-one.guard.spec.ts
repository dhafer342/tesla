import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { stepOneGuard } from './step-one.guard';

describe('stepActiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => stepOneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
