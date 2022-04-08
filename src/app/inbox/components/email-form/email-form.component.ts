import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from '../../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  emailGroup: FormGroup = new FormGroup({});
  @Input() email: Email = {
    id: '',
    to: '',
    from: '',
    subject: '',
    html: '',
    text: '',
  };
  @Output() emailSubmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    const { to, from, subject, text } = this.email;
    this.emailGroup = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }, [
        Validators.required,
        Validators.email,
      ]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text),
    });
  }

  onSubmit() {
    if (this.emailGroup.invalid) {
      return;
    }
    this.emailSubmit.emit(this.emailGroup.value);
  }
}
