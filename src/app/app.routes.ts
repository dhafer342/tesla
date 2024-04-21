import { Routes } from '@angular/router';

import { Step1Component } from './feature/step1/step1.component';
import { Step3Component } from './feature/step3/step3.component';
import { Step2Component } from './feature/step2/step2.component';
import { stepOneGuard } from './shared/guard/step-one.guard';
import { setpTwoGuard } from './shared/guard/setp-two.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/step1', pathMatch: 'full' },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component, canActivate: [stepOneGuard] },
  { path: 'step3', component: Step3Component, canActivate: [stepOneGuard,setpTwoGuard] },
];
