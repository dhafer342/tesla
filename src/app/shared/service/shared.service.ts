import { Injectable, signal } from '@angular/core';
import { Color } from '../interface/color.interface';
import { Model } from '../interface/model.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _activeStepOne: boolean = false;
  private _activeStepTow: boolean = false;
  private _modelCode: string = '';

  private _carName?: string;
  private _configDescription?: string;
  private _color?: string;
  private _carImg?: string;
  private _codeColor?: string;

  private _selectedConfig?: string;
  private _selectedColor?: string;
  private _listColor?: Color[];

  private _models: Model[] = [];

  range = signal(0);
  maxSpeed = signal(0);
  cost = signal(0);
  towHitch = signal(0);
  yokeSteering = signal(0);
  colorPrice = signal(0);

  // Getters
  get activeStepOne(): boolean {
    return this._activeStepOne;
  }

  get activeStepTow(): boolean {
    return this._activeStepTow;
  }

  get modelCode(): string {
    return this._modelCode;
  }

  get carName(): string | undefined {
    return this._carName;
  }

  get configDescription(): string | undefined {
    return this._configDescription;
  }

  get color(): string | undefined {
    return this._color;
  }

  get carImg(): string | undefined {
    return this._carImg;
  }

  get codeColor(): string | undefined {
    return this._codeColor;
  }

  get selectedConfig(): string | undefined {
    return this._selectedConfig;
  }

  get selectedColor(): string | undefined {
    return this._selectedColor;
  }

  get listColor(): Color[] | undefined {
    return this._listColor;
  }

  get models(): Model[] {
    return this._models;
  }

  // Setters
  set activeStepOne(value: boolean) {
    this._activeStepOne = value;
  }

  set activeStepTow(value: boolean) {
    this._activeStepTow = value;
  }

  set modelCode(value: string) {
    this._modelCode = value;
  }

  set carName(value: string | undefined) {
    this._carName = value;
  }

  set configDescription(value: string | undefined) {
    this._configDescription = value;
  }

  set color(value: string | undefined) {
    this._color = value;
  }

  set carImg(value: string | undefined) {
    this._carImg = value;
  }

  set codeColor(value: string | undefined) {
    this._codeColor = value;
  }

  set selectedConfig(value: string | undefined) {
    this._selectedConfig = value;
  }

  set selectedColor(value: string | undefined) {
    this._selectedColor = value;
  }

  set listColor(value: Color[] | undefined) {
    this._listColor = value;
  }

  set models(value: Model[]) {
    this._models = value;
  }

  constructor() {}
}
