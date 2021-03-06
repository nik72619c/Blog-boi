import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UtilServiceService } from 'src/app/services/util-service.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result: any;
  constructor(private utilsService: UtilServiceService) {
  
   }

  ngOnInit() {
    //TODO call to server to get all the blogs
    console.log('ngOnInit for dashboard called...');
     //this.result=this.utilsService.createBlog();
     //this.result.subscribe(value=>console.log('value obtained from the obsevable ', value));
     this.utilsService.getBlogs().subscribe(value=>console.log(' blogs obtained', value));
     
  }

}
