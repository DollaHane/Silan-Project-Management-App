import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  // FORM FUNCTIONS
  signinForm: FormGroup;

  signin(): void {
    const loginCredentials = {
      ...this.signinForm.value,
    };

    console.log('loginCredentials:', loginCredentials)

    if (this.signinForm.invalid) {
      console.log('Invalid form submitted', )
      return;
    }

    this.authService.login(loginCredentials).subscribe({
      next: (response) => {
        console.log('response:', response)
        this.signinForm.reset()
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error signing in:', error)
      }
    });
  }
}
