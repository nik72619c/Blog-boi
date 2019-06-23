import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';

@NgModule({
  declarations: [BlogEditorComponent],
  imports: [
    CommonModule
  ],
  exports: [BlogEditorComponent],
  bootstrap: [BlogEditorComponent]
})
export class BlogModule { }
