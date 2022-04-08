import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KebabCasePipe } from './pipes/Kebab-case.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    InputComponent,
    KebabCasePipe,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [InputComponent, HeaderComponent, ModalComponent],
})
export class SharedModule {}
