import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
  addSection(event: KeyboardEvent) {
    console.log(event.target.getAttribute('id'));
    
    if (event.keyCode === 13) {
      console.log('enter key event via hostlstener called..');
    }
  }
  blog: any;
  title: string;
  constructor() {
    this.blog=[];
    this.title='';
   }

  ngOnInit() {
    this.blog=[{
  heading: '',
  content: ['']
}];
  }
  addParagraph(event, id, paraIndex){
    if(event.keyCode===13){
    console.log('event value is', event.target.value);
    console.log('isHeading', id);
    let paragrpahId= id.charAt(id.length-1);
    console.log('paragraphId', paragrpahId);
    this.blog[paragrpahId].content[paraIndex-1]=event.target.value;
    this.blog[paragrpahId].content.length++;
    this.blog[paragrpahId].content[paraIndex]='';
    console.log('new blog now', this.blog);
    }
  }
  headingChanged(){
    console.log('the array for blog obtained is', this.blog);
  }
  handleChangeParagraph(event, id){

  }

}
