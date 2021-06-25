import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
  img?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  endpoint = 'https://api.angular-email.com/emails';

  constructor(private _http: HttpClient) {}

  getEmails() {
    return this._http.get<EmailSummary[]>(this.endpoint);
  }


}
