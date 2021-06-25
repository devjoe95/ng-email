import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { EmailService, EmailSummary } from '../../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emails: Array<EmailSummary> = [];
  constructor(private _emailService: EmailService) {}

  ngOnInit(): void {
    this._emailService
      .getEmails()
      .pipe(
        map((emails) => {
          return emails.map((email) => ({
            ...email,
            img: `https://i.pravatar.cc/${Math.floor(Math.random() * 300)}
`,
          }));
        })
      )
      .subscribe((emails) => {
        this.emails = emails;
      });
  }
}
