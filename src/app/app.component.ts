import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'my-app';

  constructor(private authService: AuthService) {}

  ngOnInit() {this.authService.CheckSessionStatus}

}
