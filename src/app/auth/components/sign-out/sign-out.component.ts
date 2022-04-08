import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
})
export class SignOutComponent implements OnInit {
  constructor(private _authService: AuthService,private _router:Router) {}

  ngOnInit(): void {
    this._authService.signOut().subscribe(() => {
      this._router.navigateByUrl('/')
    })
  }
}
