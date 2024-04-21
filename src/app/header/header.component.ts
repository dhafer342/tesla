import { Component } from '@angular/core';
import { SelectedDirective } from '../shared/directive/selected.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SelectedDirective,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
