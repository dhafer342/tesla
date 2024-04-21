import { Directive, ElementRef, HostListener } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Directive({
  selector: '[appSelected]',
  standalone: true,
})
export class SelectedDirective {
  constructor(private el: ElementRef, private sharedService: SharedService) {}

  @HostListener('mouseenter') private enter() {
    this.el.nativeElement.style.backgroundColor = '#3a3939';

    if (
      this.el.nativeElement.id.includes('step2') &&
      !this.sharedService.activeStepOne
    ) {
      this.el.nativeElement.style.cursor = 'not-allowed';
    }

    if (
      this.el.nativeElement.id.includes('step3') &&
      !this.sharedService.activeStepTow
    ) {
      this.el.nativeElement.style.cursor = 'not-allowed';
    }
   
  }

  @HostListener('mouseleave') private leave() {
    this.el.nativeElement.style.backgroundColor = '#1d1c1c';
    this.el.nativeElement.style.cursor = 'pointer';
  }
}
