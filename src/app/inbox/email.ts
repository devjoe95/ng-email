export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
  img?: string;
}

export interface Email extends EmailSummary {
  to: string;
  text: string;
  html: string;
}
