import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Session } from './models/session.model';
import { formatDate } from '@angular/common';


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

  constructor() {}

  ngOnInit() {}

}
