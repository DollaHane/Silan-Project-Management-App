import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LeftnavMainComponent } from '../components/leftnav-main-comp/leftnav-main/leftnav-main.component';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    NavbarComponent,
    LeftnavMainComponent,
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  constructor(private authService: AuthService){}

  ngOnInit() {
    this.authService.CheckSessionStatus()
  }
}
