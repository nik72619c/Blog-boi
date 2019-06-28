import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
  addSection(event: KeyboardEvent) {
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
    console.log('type of paragraphId', paraIndex);
    this.blog[paragrpahId].content[paraIndex]=event.target.value;
    this.blog[paragrpahId].content.splice(paraIndex, 0 ,'');
    this.blog[paragrpahId].content[this.blog[paragrpahId].content.length-1]='';
    console.log('new blog now', this.blog);
    }
  }
  headingChanged(event,headingIndex){
    
    this.blog[headingIndex].heading=event.target.value;
    console.log('the array for blog obtained is', this.blog);
    console.log('headingIndezx', headingIndex);
  }
  handleChangeParagraph(event, id){

  }

}
