import { Component, OnInit, signal } from '@angular/core';
import { SharedService } from '../../shared/service/shared.service';
import { Option } from '../../shared/interface/option.interface';
import { DataService } from '../../shared/service/data.service';
import { first } from 'rxjs';
import { Config } from '../../shared/interface/config.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component implements OnInit {
  modelCode!: string;
  option: Option = { configs: [], towHitch: false, yoke: false };
  range = signal(0);
  maxSpeed = signal(0);
  cost = signal(0);
  selectedConfig: string = '1';
  configs: Config[] = [];
  includeTow: boolean = false;
  includeYoke: boolean = false;
  carImg?: string;

  constructor(
    private sharedService: SharedService,
    private dataService: DataService
  ) {
    this.modelCode = this.sharedService.modelCode;
    this.carImg = this.sharedService.carImg;
    this.inisializeStep2();
  }

  ngOnInit(): void {
    
      this.dataService
        .getOption(this.modelCode!)
        .pipe(first())
        .subscribe((opt: Option) => {
          this.option = opt;
          this.configs = opt.configs;
          this.onSelectChangeConfig();
        });
   
    this.sharedService.activeStepTow = true;
  }

  onSelectChangeConfig(): void {
    const config: Config = this.configs.find(
      (conf) => conf.id === +this.selectedConfig
    )!;
    this.setConfig(config);
  }

  setConfig(config: Config): void {
    this.range.set(config.range);
    this.maxSpeed.set(config.speed);
    this.cost.set(config.price);
    this.sharedService.range.set(config.range);
    this.sharedService.maxSpeed.set(config.speed);
    this.sharedService.cost.set(config.price);
    this.sharedService.configDescription = config.description;
    this.sharedService.selectedConfig = this.selectedConfig;
  }

  includeYokeChange(): void {
    if (this.includeYoke) {
      this.sharedService.yokeSteering.set(1000);
    } else {
      this.sharedService.yokeSteering.set(0);
    }
  }

  includeTowChange(): void {
    if (this.includeTow) {
      this.sharedService.towHitch.set(1000);
    } else {
      this.sharedService.towHitch.set(0);
    }
  }

  inisializeStep2(): void {
    if (this.sharedService.towHitch()) {
      this.includeTow = true;
    }
    if (this.sharedService.yokeSteering()) {
      this.includeYoke = true;
    }
    if (this.sharedService.selectedConfig) {
      this.selectedConfig = this.sharedService.selectedConfig;
    }
  }
}
