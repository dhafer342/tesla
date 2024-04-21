import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Model } from '../../shared/interface/model.interface';
import { DataService } from '../../shared/service/data.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Color } from '../../shared/interface/color.interface';
import { SharedService } from '../../shared/service/shared.service';
import { Constants } from '../../shared/constants/constants.class';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule, AsyncPipe, NgOptimizedImage],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component implements OnInit {
  listColor?: Color[];
  models!: Model[];
  selectedModel: string = '';
  selectedColor?: string;
  srcImage: string = '';

  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {
    this.initializeStep1();
  }

  ngOnInit(): void {
    if (this.sharedService.models.length === 0) {
      this.dataService
        .getModels()
        .pipe(first())
        .subscribe((listModel: Model[]) => {
          this.models = listModel;
          this.sharedService.models = this.models;
        });
    } else {
      this.models = this.sharedService.models;
    }
  }

  onSelectChangeModel(): void {
    if (this.selectedModel !== '') {
      const targetModel = this.models.find(
        (m: Model) => m.code === this.selectedModel
      )!;

      this.listColor = targetModel.colors;
      this.sharedService.listColor = this.listColor;
      this.selectedColor = this.listColor[0].code;
      this.initializeModel(targetModel);
      this.initializeColor();
      this.initializeImage();
    } else {
      this.sharedService.activeStepOne = false;
      this.sharedService.activeStepTow = false;
      this.srcImage = '';
      this.listColor = undefined;
      this.initializeStep2();
    }
    this.sharedService.activeStepTow = false;
  }

  onSelectChangeColor(): void {
    this.initializeColor();
    this.initializeImage();
  }

  initializeModel(model: Model): void {
    this.sharedService.modelCode = this.selectedModel;
    this.sharedService.carName = model.description;
    this.initializeStep2();
    if (this.selectedModel) {
      this.sharedService.activeStepOne = true;
    } else {
      this.sharedService.activeStepOne = false;
    }
  }

  initializeColor(): void {
    if (this.listColor) {
      const color = this.listColor.find(
        (c: Color) => c.code === this.selectedColor
      )!;

      this.sharedService.color = color.description;
      this.sharedService.colorPrice.set(color.price);
      this.sharedService.codeColor = color.code;
    }
  }

  initializeImage(): void {
    this.srcImage =
      Constants.IMG_BASE_URL +
      `${this.selectedModel}/${this.selectedColor}` +
      Constants.EXTENSION_IMG;
    this.sharedService.carImg = this.srcImage;
  }

  initializeStep1() {
    if (this.sharedService.modelCode) {
      this.selectedModel = this.sharedService.modelCode;
    }
    if (this.sharedService.codeColor) {
      this.selectedColor = this.sharedService.codeColor;
    }
    if (this.sharedService.listColor) {
      this.listColor = this.sharedService.listColor;
    }
    if (this.sharedService.carImg) {
      this.srcImage = this.sharedService.carImg;
    }
  }

  initializeStep2() {
    this.sharedService.selectedConfig = '';
    this.sharedService.towHitch.set(0);
    this.sharedService.yokeSteering.set(0);
  }
}
