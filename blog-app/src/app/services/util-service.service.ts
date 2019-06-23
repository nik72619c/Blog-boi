import { Injectable, ComponentFactoryResolver, ReflectiveInjector} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { BlogEditorComponent } from '../blog/blog-editor/blog-editor.component';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {
  rootViewContainerRef:any;
  constructor(private http: HttpClient, private factoryResolver: ComponentFactoryResolver) {

    
   }

   createBlog(){
    return this.http.post('http://localhost:1234/createBlog', {
      blog: {
        heading: 'my first blog post',
        content: ['content 1', 'content 2', 'content 3']
    },
    withCredentials: true
    })
   }

   getBlogs(){
     return this.http.get('http://localhost:1234/getBlogs');
   }
   setRootViewContainerRef(containerRef){
     this.rootViewContainerRef= containerRef;
   }

   toggleModal(){
    if(this.rootViewContainerRef.length>0){
      this.rootViewContainerRef.remove();
      }
      else {
     const factory=this.factoryResolver.resolveComponentFactory(BlogEditorComponent);
     const component= factory.create(this.rootViewContainerRef.parentInjector);
     this.rootViewContainerRef.insert(component.hostView);
      }
   }
   hideModal(){
     

   }
}
