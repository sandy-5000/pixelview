import { Component } from '@angular/core';
import { AuthlayoutComponent } from '../../layouts/authlayout/authlayout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthlayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {

}
