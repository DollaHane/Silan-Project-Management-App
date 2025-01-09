import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  templateUrl: './signout.component.html',
})
export class SignoutComponent {

  constructor(private authService: AuthService) {}

  public signout() {
    console.log('click', )
    this.authService.Signout()
  }

}
