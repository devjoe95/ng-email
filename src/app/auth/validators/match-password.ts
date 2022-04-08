import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirmation } = control.value;
    if (control.dirty && control.touched && password !== passwordConfirmation) {
      return { passwordsDoNotMatch: true };
    } else {
      return null;
    }
  }
}
