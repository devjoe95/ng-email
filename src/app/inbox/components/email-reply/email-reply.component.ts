import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Email } from '../../email';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnChanges {
  showModal: boolean = false;
  @Input() email: Email;
  constructor(private emailService: EmailService) {
    this.email = {
      id: '',
      to: '',
      from: '',
      subject: '',
      html: '',
      text: '',
    };
  }
  ngOnChanges(): void {
    this.email = {
      ...this.email,
      to: this.email.from,
      from: this.email.to,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--- ${this.email.from} wrote: \n\n${this.email.text}`,
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
