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
  blog: any;
  constructor() {
    this.blog=[];
   }

  ngOnInit() {
    this.blog=[{heading: 'my first ever blog',
                content: ['content 1', 'content 2']
  },
{
  heading: 'my second heading ',
  content: ['content 4', ' content 5', ' content 6']
}]
  }
  addParagraph(event, isHeading){
    console.log('event value is', event.target.value);
    console.log('isHeading', isHeading);
  }
  headingChanged(){
    console.log('the array for blog obtained is', this.blog);
  }

}
