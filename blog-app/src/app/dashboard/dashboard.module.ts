import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent, NavbarComponent],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
