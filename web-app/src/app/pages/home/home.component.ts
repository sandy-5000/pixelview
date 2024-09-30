import { Component } from '@angular/core';
import { MainlayoutComponent } from '../../layouts/mainlayout/mainlayout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainlayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {

}
