import { IBlog } from './../../interfaces/IBlog';
import { Component, OnInit , HostListener} from '@angular/core';
import { UtilServiceService } from 'src/app/services/util-service.service';
import { AppComponent } from 'src/app/app.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {
  closeResult: string;

  // @HostListener('window:keyup', ['$event'])
  // addSection(event: KeyboardEvent) {
  //   if (event.keyCode === 13) {
  //     console.log('enter key event via hostlstener called..');
  //   }
  // }
  blog: IBlog;
  title: string;
  constructor(public parent: AppComponent ,private utilService: UtilServiceService,private modalService: NgbModal) {
   }

  ngOnInit() {
    this.blog={
      title: 'sample title',
      body: [
        {
          heading: 'sample heading',
          content: ['some sample content, lets begin from here...']
        }
    ]
    };
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  addParagraph(event, id, paraIndex){
    if(event.keyCode===13){
    console.log('event value is', event.target.value);
    console.log('isHeading', id);
    let paragrpahId= id.charAt(id.length-1);
    console.log('paragraphId', paragrpahId);
    console.log('type of paragraphId', paraIndex);
    this.blog[paragrpahId].content[paraIndex]=event.target.value;
    this.blog[paragrpahId].content.splice(paraIndex+1, 0 ,'');
    // this.blog[paragrpahId].content[this.blog[paragrpahId].content.length-1]='';
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

  handleTitleChange(event){
    console.log('title ', event.target.value);
    this.title= event.target.value;
  }

  createBlog(){
    let observable=this.utilService.createBlog({
      ...this.blog[0],
      title: this.title
    });
    observable.subscribe(data=>console.log('data oncreating a blog', data));
  }

}
