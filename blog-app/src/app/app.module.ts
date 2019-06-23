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
import { HttpClientModule } from '@angular/common/http';
import { UtilServiceService } from './services/util-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule , LoginModule,NgbModule, 
    BrowserAnimationsModule, 
    FormsModule,DashboardModule,
    RouterModule.forRoot([{
      path: '', component: LoginComponentComponent
    },
  {
    path: 'dashboard', component: DashboardComponent
  }])
    
  ],
  providers: [UtilServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

