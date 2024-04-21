import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Model } from '../interface/model.interface';
import { Option } from '../interface/option.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>('/models');
  }

  getOption(modelCode: string): Observable<Option> {
    return this.http.get<Option>(`/options/${modelCode}`);
  }
}
