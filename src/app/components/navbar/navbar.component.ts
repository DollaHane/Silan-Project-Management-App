import { Component } from '@angular/core';
import { SignoutComponent } from '../../auth/signout/signout.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SignoutComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.CheckSessionStatus()
  }

}
