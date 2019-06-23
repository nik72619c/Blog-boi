import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BlogEditorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [BlogEditorComponent],
  bootstrap: [BlogEditorComponent]
})
export class BlogModule { }
