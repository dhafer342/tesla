import { Component, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DataService } from './shared/service/data.service';
import { SharedService } from './shared/service/shared.service';
import { first } from 'rxjs';
import { Model } from './shared/interface/model.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  imports: [JsonPipe, HeaderComponent, RouterModule],
})
export class AppComponent {}
