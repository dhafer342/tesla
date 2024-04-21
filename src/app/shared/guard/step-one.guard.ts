import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SharedService } from '../service/shared.service';

export const stepOneGuard: CanActivateFn = (route, state) => {
  const permission = inject(SharedService);

  if (permission.activeStepOne) {
    return true;
  } else {
    return false;
  }
};
