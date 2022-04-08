import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent {
  email!: Email;
  markContent: boolean = true;

  constructor(private _route: ActivatedRoute) {
    this._route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }
}
