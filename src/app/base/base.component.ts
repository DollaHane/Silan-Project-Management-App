import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LeftnavMainComponent } from '../components/leftnav-main-comp/leftnav-main/leftnav-main.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    ReactiveFormsModule,
    BaseComponent,
    NavbarComponent,
    LeftnavMainComponent,
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
