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
import { BlogModule } from './blog/blog.module';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {StoreModule} from '@ngrx/store';
import { blogReducer } from './store/Reducers/blogs.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule , LoginModule,NgbModule, 
    BrowserAnimationsModule, StoreModule.forRoot({ blogs: blogReducer }),
    FormsModule,DashboardModule,
    BlogModule,
    RouterModule.forRoot([{
      path: '', component: LoginComponentComponent
    },
  {
    path: 'dashboard', component: DashboardComponent
  }]),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule
    
  ],
  providers: [UtilServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

