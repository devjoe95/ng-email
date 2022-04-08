import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatchPassword } from '../../validators/match-password';
import { UniqueUsername } from '../../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent   {
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this._uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      agree: new FormControl(false, [Validators.pattern('true')]),
    },
    { validators: [this._matchPassword.validate] }
  );
  constructor(
    private _matchPassword: MatchPassword,
    private _uniqueUsername: UniqueUsername,
    private _authService: AuthService,
    private _router: Router
  ) {}

  onSubmit() {
    if (this.authForm.valid) {
      const { username, password, passwordConfirmation } = this.authForm.value;
      this._authService
        .signUp({ username, password, passwordConfirmation })
        .subscribe(
          () => {
            this._router.navigateByUrl('/inbox');
          },
          (err) => {
            if (!err.status) {
              this.authForm.setErrors({ connectionOffline: true });
            } else {
              this.authForm.setErrors({ unknownError: true });
            }
          },
          () => {}
        );
    }
  }
}
