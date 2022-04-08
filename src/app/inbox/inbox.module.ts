import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EmailCreateComponent } from './components/email-create/email-create.component';
import { EmailReplyComponent } from './components/email-reply/email-reply.component';
import { EmailIndexComponent } from './components/email-index/email-index.component';
import { EmailShowComponent } from './components/email-show/email-show.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SharedModule } from '../shared/shared.module';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailShowComponent,
    PlaceholderComponent,
    EmailFormComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class InboxModule {}
