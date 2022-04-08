import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private _authService: AuthService) {}
  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;
    const result = this._authService.userNameAvailable(value);
    return result.pipe(
      delay(1000),
      map(() => {
        return null;
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ userExists: true });
        } else {
          return of({ connectionOffline: true });
        }
      })
    );
  };
}
