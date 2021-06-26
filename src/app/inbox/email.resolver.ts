import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Email } from './email';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolver implements Resolve<Email> {
  constructor(private _emailService: EmailService, private _router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Email> {
    const { id } = route.params;
    return this._emailService.getEmail(id).pipe(
      catchError((err) => {
        this._router.navigateByUrl('/inbox');
        return EMPTY;
      })
    );
  }
}
