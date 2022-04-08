import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signedIn$: BehaviorSubject<boolean>;

  constructor(private _authService: AuthService) {
    this.signedIn$ = this._authService.signedIn$;
  }
  ngOnInit(): void {
    this._authService.checkAuth().subscribe(() => {});
  }
}
