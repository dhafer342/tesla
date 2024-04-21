import { Component, computed, signal } from '@angular/core';
import { SharedService } from '../../shared/service/shared.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {

  cost = signal(0);
  range = signal(0);
  maxSpeed = signal(0);
  toHich = signal(0);
  yoke = signal(0);
  carName?: string;
  configDescription?: string;
  color?:string;
  colorPrice = signal(0);
  carImg?: string;
  totalCost = computed(()=>this.cost() + this.colorPrice() + this.toHich() + this.yoke());

  constructor(private sharedService: SharedService){
    this.carName = sharedService.carName;
    this.toHich = sharedService.towHitch;
    this.yoke = sharedService.yokeSteering;
    this.configDescription = sharedService.configDescription;
    this.cost = this.sharedService.cost;
    this.range = this.sharedService.range;
    this.maxSpeed = this.sharedService.maxSpeed;
    this.color=this.sharedService.color;
    this.colorPrice.set(sharedService.colorPrice());
    this.carImg = this.sharedService.carImg;
    

  }

}
