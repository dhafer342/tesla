import { CanActivateFn } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { inject } from '@angular/core';

export const setpTwoGuard: CanActivateFn = (route, state) => {
  const permission = inject(SharedService);
  if (permission.activeStepTow) {
    return true;
  } else {
    return false;
  }
};
