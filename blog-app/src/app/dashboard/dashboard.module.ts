import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogModule } from '../blog/blog.module';
import { BlogEditorComponent } from '../blog/blog-editor/blog-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent],
  imports: [
    CommonModule, BlogModule, FormsModule
  ],
  exports: [DashboardComponent, NavbarComponent],
  bootstrap: [DashboardComponent],
  entryComponents: [BlogEditorComponent]
})
export class DashboardModule { }
