import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    rememberMe: new FormControl(false, [Validators.required]),
  });
  constructor(private _authService: AuthService, private _router: Router) {}

  onSubmit() {
    if (this.authForm.valid) {
      this._authService.signIn(this.authForm.value).subscribe(
        () => {
          this._router.navigateByUrl('/inbox');
        },
        ({ status, error }) => {
          if (!status) {
            this.authForm.setErrors({ connectionOffline: true });
          } else if (error.username || error.password) {
            this.authForm.setErrors({ credential: true });
          } else {
            this.authForm.setErrors({ unknownError: true });
          }
        },
        () => {}
      );
    }
  }
}
