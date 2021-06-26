import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, EmailSummary } from './email';



@Injectable({
  providedIn: 'root',
})
export class EmailService {
  endpoint = 'https://api.angular-email.com/emails';

  constructor(private _http: HttpClient) {}

  getEmails() {
    return this._http.get<EmailSummary[]>(this.endpoint);
  }

  getEmail(id: string) {
    return this._http.get<Email>(`${this.endpoint}/${id}`);
  }
}
