import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KebabCasePipe } from './pipes/Kebab-case.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';

@NgModule({
  declarations: [InputComponent, KebabCasePipe, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [InputComponent, HeaderComponent],
})
export class SharedModule {}
