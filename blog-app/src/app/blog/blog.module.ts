import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { FormsModule } from '@angular/forms';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [BlogEditorComponent, BlogViewComponent, BlogCardComponent],
  imports: [
  CommonModule, FormsModule,NbCardModule
  ],
  exports: [BlogEditorComponent, BlogCardComponent],
  bootstrap: [BlogEditorComponent]
})
export class BlogModule { }
