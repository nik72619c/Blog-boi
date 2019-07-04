import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  exports: [LoginComponentComponent],
  bootstrap:[LoginComponentComponent],
})
export class LoginModule { }
