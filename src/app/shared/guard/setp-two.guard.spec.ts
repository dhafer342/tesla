import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { setpTwoGuard } from './setp-two.guard';

describe('setpTwoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => setpTwoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
