import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginModule} from './login/login.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, LoginModule,NgbModule, BrowserAnimationsModule, DashboardModule,
    RouterModule.forRoot([{
      path: '', component: LoginComponentComponent
    },
  {
    path: 'dashboard', component: DashboardComponent
  }])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

