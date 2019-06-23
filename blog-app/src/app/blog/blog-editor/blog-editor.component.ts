import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
  addSection(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === 13) {
      console.log('enter key event via hostlstener called..');
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
