import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';


@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LoginComponentComponent],
  bootstrap:[LoginComponentComponent]
  
})
export class LoginModule { }
