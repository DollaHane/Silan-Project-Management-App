import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './base/base.component';

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
}
